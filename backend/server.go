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

	Nombre string `json:"Nombre"`

	Cargo string `json:"Cargo"`

	Correo string `json:"Correo"`
}

type Encuestas struct {
	gorm.Model

	UsuarioId string `json:"UsuarioId"`

	Estado_financiamiento string `json:"Estado_financiamiento"`

	Moneda string `json:"Moneda"`

	Fecha_de_inicio_de_Proyecto string `json:"Fecha_de_inicio_de_Proyecto"`

	Centro_de_Investigación string `json:"Centro_de_Investigación"`

	Departamento_Academico string `json:"Departamento_Academico"`

	Titulo_de_Proyecto string `json:"Titulo_de_Proyecto"`

	Linea_de_investigacion string `json:"Linea_de_investigacion"`

	Coeinvestigadores_de_UTEC string `json:"Coeinvestigadores_de_UTEC"`

	Investigador_Principal string `json:"Investigador_Principal"`

	Tipo_de_participacion string `json:"Tipo_de_participacion"`

	POI_Financiadora string `json:"POI_Financiadora"`

	Overhead string `json:"Overhead"`

	Presupuesto_proyecto string `json:"Presupuesto_proyecto"`

	Tipo_entidad_financiadora string `json:"Tipo_entidad_financiadora"`

	Monto_asignado string `json:"Monto_asignado"`

	Se_requiere_aprovacion string `json:"Se_requiere_aprovacion"`

	Estado string `json:"Estado"`
}

var db *gorm.DB

var err error

var (
	users = []Usuario{
		{Nombre: "Roberto", Cargo: "Profesor", Correo: "abc123@email.com"},
		{Nombre: "Maria", Cargo: "Administrador", Correo: "qwerty@email.com"},
	}

	forms = []Encuestas{
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

func PostUser(w http.ResponseWriter, r *http.Request) {

	var user Usuario
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		http.Error(w, "Error en los datos recibidos"+err.Error(), 400)
		return
	}

	db.AutoMigrate(&Usuario{})

	db.Create(&user)

	json.NewEncoder(w).Encode(&user)

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

func GetForms(w http.ResponseWriter, r *http.Request) {

	var forms []Encuestas

	db.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}

func GetForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form Encuestas

	db.First(&form, params["id"])

	json.NewEncoder(w).Encode(&form)

}

func PostFormTest(w http.ResponseWriter, r *http.Request) {

	db.AutoMigrate(&Encuestas{})

	for index := range forms {

		db.Create(&forms[index])

	}

	json.NewEncoder(w).Encode(&forms)

}

func PostForm(w http.ResponseWriter, r *http.Request) {

	var form Encuestas
	err := json.NewDecoder(r.Body).Decode(&form)

	if err != nil {
		http.Error(w, "Error en los datos recibidos"+err.Error(), 400)
		return
	}

	db.AutoMigrate(&Encuestas{})

	db.Create(&form)

	json.NewEncoder(w).Encode(&form)

}

func DeleteForm(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var form Encuestas

	db.First(&form, params["id"])

	db.Delete(&form)

	var forms []Encuestas

	db.Find(&forms)

	json.NewEncoder(w).Encode(&forms)

}
