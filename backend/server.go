package main

import (
	"encoding/json"

	"log"

	"net/http"

	"github.com/gorilla/mux"

	"github.com/jinzhu/gorm"

	"github.com/rs/cors"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model

	Name string

	Password string
}

var db *gorm.DB

var err error

var (
	users = []User{
		{Name: "Jimmy", Password: "ABC123"},
	}
)

func main() {

	router := mux.NewRouter()

	db, err = gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=<DBname> sslmode=disable password=<password>")

	if err != nil {

		panic("failed to connect database")

	}

	defer db.Close()

	router.HandleFunc("/users", GetUsers).Methods("GET")

	router.HandleFunc("/users/{id}", GetUser).Methods("GET")

	router.HandleFunc("/users/test", PostUserTest).Methods("POST")

	router.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":3000", handler))

}

func GetUsers(w http.ResponseWriter, r *http.Request) {

	var users []User

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}

func GetUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user User

	db.First(&user, params["id"])

	json.NewEncoder(w).Encode(&user)

}

func PostUserTest(w http.ResponseWriter, r *http.Request) {

	db.AutoMigrate(&User{})

	for index := range users {

		db.Create(&users[index])

	}

	json.NewEncoder(w).Encode(&users)

}

func DeleteUser(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	var user User

	db.First(&user, params["id"])

	db.Delete(&user)

	var users []User

	db.Find(&users)

	json.NewEncoder(w).Encode(&users)

}
