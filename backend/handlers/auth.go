package handlers

import (
	"backend/bd"
	"backend/models"
	"encoding/json"
	"net/http"
)

func Auth(w http.ResponseWriter, r *http.Request) {

	var user models.Usuario
	var user_cur models.Usuario

	err := json.NewDecoder(r.Body).Decode(&user_cur)

	if err != nil {
		http.Error(w, "Ez	"+err.Error(), 400)
		return
	}

	bd.DB.First(&user, "google_id = ?", user_cur.GoogleId)

	if user.ID != 0 {
		json.NewEncoder(w).Encode(&user)
		return
	}

	bd.DB.AutoMigrate(&models.Usuario{})

	bd.DB.Create(&user_cur)

	json.NewEncoder(w).Encode(&user_cur)
}
