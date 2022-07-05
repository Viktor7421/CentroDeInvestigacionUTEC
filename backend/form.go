package main

import (
	"backend/models"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetForms(w http.ResponseWriter, r *http.Request) {

	var forms []models.Encuestas

	db.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}

func GetForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	db.First(&form, params["id"])

	json.NewEncoder(w).Encode(&form)

}

func PostFormTest(w http.ResponseWriter, r *http.Request) {

	db.AutoMigrate(&models.Encuestas{})

	for index := range forms {

		db.Create(&forms[index])

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

	db.AutoMigrate(&models.Encuestas{})

	db.Create(&form)

	json.NewEncoder(w).Encode(&form)

}

func DeleteForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form models.Encuestas

	db.First(&form, params["id"])

	db.Delete(&form)

	var forms []models.Encuestas

	db.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}
