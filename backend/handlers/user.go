package handlers

import (
	"backend/bd"
	"backend/models"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

var (
	users = []models.Usuario{
		{Nombre: "Roberto", Cargo: "Profesor", Correo: "abc123@email.com"},
		{Nombre: "Maria", Cargo: "Administrador", Correo: "qwerty@email.com"},
	}
)

func GetUsers(w http.ResponseWriter, r *http.Request) {

	var users []models.Usuario

	bd.DB.Find(&users)

	json.NewEncoder(w).Encode(&users)

}

func GetUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user models.Usuario

	bd.DB.First(&user, params["id"])

	json.NewEncoder(w).Encode(&user)

}

func PostUserTest(w http.ResponseWriter, r *http.Request) {

	bd.DB.AutoMigrate(&models.Usuario{})

	for index := range users {

		bd.DB.Create(&users[index])

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

	bd.DB.AutoMigrate(&models.Usuario{})

	bd.DB.Create(&user)

	json.NewEncoder(w).Encode(&user)

}

func DeleteUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user models.Usuario

	bd.DB.First(&user, params["id"])

	bd.DB.Delete(&user)

	var users []models.Usuario

	bd.DB.Find(&users)

	json.NewEncoder(w).Encode(&users)

}
