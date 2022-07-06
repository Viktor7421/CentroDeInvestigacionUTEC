package handlers

import (
	"backend/bd"
	"backend/models"
	"backend/test"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

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

	for index := range test.Forms {

		bd.DB.Create(&test.Forms[index])

	}

	json.NewEncoder(w).Encode(&test.Forms)

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
