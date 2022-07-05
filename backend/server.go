package main

import (
	"backend/models"

	"log"

	"net/http"

	"github.com/gorilla/mux"

	"github.com/jinzhu/gorm"

	"github.com/rs/cors"

	_ "github.com/jinzhu/gorm/dialects/postgres"

	"os"

	"github.com/joho/godotenv"
)

var db *gorm.DB

var err error

var (
	users = []models.Usuario{
		{Nombre: "Roberto", Cargo: "Profesor", Correo: "abc123@email.com"},
		{Nombre: "Maria", Cargo: "Administrador", Correo: "qwerty@email.com"},
	}

	forms = []models.Encuestas{
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
)

func main() {

	router := mux.NewRouter()

	godotenv.Load(".env")
	db, err = gorm.Open("postgres", os.Getenv("POSTGRES"))

	if err != nil {

		panic("failed to connect database")

	}

	defer db.Close()

	router.HandleFunc("/users", GetUsers).Methods("GET")

	router.HandleFunc("/users/{id}", GetUser).Methods("GET")

	router.HandleFunc("/users/auth", GetAuth).Methods("POST")

	router.HandleFunc("/add/users", PostUser).Methods("POST")

	router.HandleFunc("/users/test", PostUserTest).Methods("POST")

	router.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")

	router.HandleFunc("/forms", GetForms).Methods("GET")

	router.HandleFunc("/forms/{id}", GetForm).Methods("GET")

	router.HandleFunc("/add/forms", PostForm).Methods("POST")

	router.HandleFunc("/forms/test", PostFormTest).Methods("POST")

	router.HandleFunc("/forms/{id}", DeleteForm).Methods("DELETE")

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":5000", handler))

}
