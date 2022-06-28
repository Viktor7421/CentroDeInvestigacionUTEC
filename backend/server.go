package main

import (
	"encoding/json"

	"log"

	"net/http"

	"github.com/gorilla/mux"

	"github.com/jinzhu/gorm"

	"github.com/rs/cors"

	_ "github.com/jinzhu/gorm/dialects/postgres"

	"os"

	"github.com/joho/godotenv"
)

type Usuario struct {
	gorm.Model

	Nombre string

	Cargo string

	Correo string
}

type Encuestas struct {
	gorm.Model

	Estado_financiamiento string

	Moneda string

	Fecha_de_inicio_de_Proyecto string

	Centro_de_Investigación string

	Departamento_Academico string

	Titulo_de_Proyecto string

	Linea_de_investigacion string

	Coeinvestigadores_de_UTEC string

	Investigador_Principal string

	Tipo_de_participacion string

	POI_Financiadora string

	Overhead string

	Presupuesto_proyecto string

	Tipo_entidad_financiadora string

	Monto_asignado string

	Se_requiere_aprovacion string
}

var db *gorm.DB

var err error

var (
	users = []Usuario{
		{Nombre: "Roberto", Cargo: "Profesor", Correo: "abc123@email.com"},
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

	router.HandleFunc("/users/test", PostUserTest).Methods("POST")

	router.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":5000", handler))

}

func GetUsers(w http.ResponseWriter, r *http.Request) {

	var users []Usuario

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}

func GetUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user Usuario

	db.First(&user, params["id"])

	json.NewEncoder(w).Encode(&user)

}

func PostUserTest(w http.ResponseWriter, r *http.Request) {

	db.AutoMigrate(&Usuario{})

	for index := range users {

		db.Create(&users[index])

	}

	json.NewEncoder(w).Encode(&users)

}

func DeleteUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user Usuario

	db.First(&user, params["id"])

	db.Delete(&user)

	var users []Usuario

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}
