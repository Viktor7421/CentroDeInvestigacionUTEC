package handlers

import (
	"backend/bd"
	"backend/models"
	"backend/test"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
)

func PostFile(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user models.Usuario

	bd.DB.First(&user, params["id"])

	bd.DB.AutoMigrate(&models.Encuestas{})

	for index := range test.Forms {

		bd.DB.Create(&test.Forms[index])

	}

	fpath := "files/" + strconv.Itoa(int(test.Forms[0].ID)) + "_" + params["id"] + "_" + test.Forms[0].Tipo_de_Proyecto + ".pdf"

	defer r.Body.Close()

	out, err := os.Create(fpath)

	if err != nil {
		log.Fatal("ERROR! ", err)
	}

	defer out.Close()

	io.Copy(out, r.Body)

	json.NewEncoder(w).Encode(&test.Forms)
}
