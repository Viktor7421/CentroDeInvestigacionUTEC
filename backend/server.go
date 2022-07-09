package main

import (
	"backend/bd"

	"backend/handlers"

	"log"

	"net/http"

	"github.com/gorilla/mux"

	"github.com/rs/cors"
)

func main() {

	router := mux.NewRouter()

	bd.Connect()

	router.HandleFunc("/users", handlers.GetUsers).Methods("GET")

	router.HandleFunc("/users/{id}", handlers.GetUser).Methods("GET")

	router.HandleFunc("/users/auth", handlers.Auth).Methods("POST")

	router.HandleFunc("/add/users", handlers.PostUser).Methods("POST")

	router.HandleFunc("/users/test", handlers.PostUserTest).Methods("POST")

	router.HandleFunc("/users/{id}", handlers.DeleteUser).Methods("DELETE")

	router.HandleFunc("/forms", handlers.GetForms).Methods("GET")

	router.HandleFunc("/forms/user/{id}", handlers.GetFormsUser).Methods("GET")

	router.HandleFunc("/forms/{id}", handlers.GetForm).Methods("GET")

	router.HandleFunc("/add/forms", handlers.PostForm).Methods("POST")

	router.HandleFunc("/forms/test", handlers.PostFormTest).Methods("POST")

	router.HandleFunc("/forms/{id}", handlers.DeleteForm).Methods("DELETE")

	router.HandleFunc("/add/file/{id}", handlers.PostFile).Methods("POST")

	router.HandleFunc("/forms/validate/{id}", handlers.ValidateForm).Methods("POST")

	router.HandleFunc("/forms/denegate/{id}", handlers.DenegateForm).Methods("POST")

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":5000", handler))

	defer bd.DB.Close()

}
