package handlers

import (
	"backend/bd"
	"backend/models"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

var forms = []models.Encuestas{
	{
		UsuarioId:                   "1",
		Estado_financiamiento:       "Roberto",
		Moneda:                      "Profesor",
		Fecha_de_inicio_de_Proyecto: "abc123@email.com",
		Centro_de_Investigación:     "abc123@email.com",
		Departamento_Academico:      "abc123@email.com",
		Titulo_de_Proyecto:          "abc123@email.com",
		Linea_de_investigacion:      "abc123@email.com",
		Coeinvestigadores_de_UTEC:   "abc123@email.com",
		Investigador_Principal:      "abc123@email.com",
		Tipo_de_participacion:       "abc123@email.com",
		POI_Financiadora:            "abc123@email.com",
		Overhead:                    "abc123@email.com",
		Presupuesto_proyecto:        "abc123@email.com",
		Tipo_entidad_financiadora:   "abc123@email.com",
		Monto_asignado:              "abc123@email.com",
		Se_requiere_aprovacion:      "abc123@email.com",
		Estado:                      "aprovado",
	},
}

func GetForms(w http.ResponseWriter, r *http.Request) {

	var forms []models.Encuestas

	bd.DB.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}

func GetForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	bd.DB.First(&form, params["id"])

	json.NewEncoder(w).Encode(&form)

}

func PostFormTest(w http.ResponseWriter, r *http.Request) {

	bd.DB.AutoMigrate(&models.Encuestas{})

	for index := range forms {

		bd.DB.Create(&forms[index])

	}

	json.NewEncoder(w).Encode(&forms)

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
