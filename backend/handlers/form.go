package handlers

import (
	"backend/bd"
	"backend/models"
	"backend/test"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mailgun/mailgun-go"
)

func GetForms(w http.ResponseWriter, r *http.Request) {

	var forms []models.Encuestas

	bd.DB.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}

func GetFormsUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var forms []models.Encuestas

	bd.DB.Where("usuario_id = ?", params["id"]).Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}

func GetForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	bd.DB.First(&form, params["id"])

	json.NewEncoder(w).Encode(&form)

}

func ValidateForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	bd.DB.First(&form, params["id"])

	form.Estado_financiamiento = 1

	bd.DB.Save(&form)

	json.NewEncoder(w).Encode(&form)
}

func DenegateForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	bd.DB.First(&form, params["id"])

	form.Estado_financiamiento = 2

	bd.DB.Save(&form)

	json.NewEncoder(w).Encode(&form)
}

func PostFormTest(w http.ResponseWriter, r *http.Request) {

	bd.DB.AutoMigrate(&models.Encuestas{})

	for index := range test.Forms {

		bd.DB.Create(&test.Forms[index])

	}

	json.NewEncoder(w).Encode(&test.Forms)

}

func SendSimpleMessage(name, mail, titulo, domain, apiKey string) (string, error) {
	mg := mailgun.NewMailgun(domain, apiKey)

	m := mg.NewMessage(
		"Centro de Investigacion UTEC <centro_investigacion@tsandboxafa7f5b9e4974f93841ca8aed42da63f.mailgun.org>",
		"Solicitud de Proyecto Recibida",
		"htmlContent",
		mail,
	)
	_, id, err := mg.Send(m)
	return id, err
}

func PostForm(w http.ResponseWriter, r *http.Request) {

	var form models.Encuestas
	err := json.NewDecoder(r.Body).Decode(&form)

	if err != nil {
		http.Error(w, "Error en los datos recibidos"+err.Error(), 400)
		return
	}

	bd.DB.AutoMigrate(&models.Encuestas{})

	bd.DB.Create(&form)

	json.NewEncoder(w).Encode(&form)

	var user models.Usuario

	bd.DB.First(&user, form.UsuarioId)

	json.NewEncoder(w).Encode(&form)

	json.NewEncoder(w).Encode(&user)

	newmail := []models.Mail{
		{
			Name:            user.Nombre,
			User_mail:       user.Correo,
			Nombre_Proyecto: form.Titulo_de_Proyecto,
		},
	}

	SendSimpleMessage(newmail[0].Name, newmail[0].User_mail, newmail[0].Nombre_Proyecto, "sandboxafa7f5b9e4974f93841ca8aed42da63f.mailgun.org", "43b328752ddeb0566feaf095e86dfe28-1b8ced53-5bc3d32f")

}

func DeleteForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	bd.DB.First(&form, params["id"])

	bd.DB.Delete(&form)

	var forms []models.Encuestas

	bd.DB.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}
