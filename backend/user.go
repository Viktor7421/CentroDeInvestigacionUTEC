package main

import (
	"backend/models"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {

	var users []models.Usuario

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}

func GetUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user models.Usuario

	db.First(&user, params["id"])

	json.NewEncoder(w).Encode(&user)

}

func PostUserTest(w http.ResponseWriter, r *http.Request) {

	db.AutoMigrate(&models.Usuario{})

	for index := range users {

		db.Create(&users[index])

	}

	json.NewEncoder(w).Encode(&users)

}

func PostUser(w http.ResponseWriter, r *http.Request) {

	var user models.Usuario
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		http.Error(w, "Error en los datos recibidos"+err.Error(), 400)
		return
	}

	db.AutoMigrate(&models.Usuario{})

	db.Create(&user)

	json.NewEncoder(w).Encode(&user)

}

func DeleteUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user models.Usuario

	db.First(&user, params["id"])

	db.Delete(&user)

	var users []models.Usuario

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}
