package main

import (
	"backend/models"
	"encoding/json"
	"net/http"
)

func GetAuth(w http.ResponseWriter, r *http.Request) {

	var users []models.Usuario

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}
