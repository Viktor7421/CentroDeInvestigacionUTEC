package test

import "backend/models"

var (
	users = []models.Usuario{
		{Nombre: "Roberto", Cargo: "Profesor", Correo: "abc123@email.com"},
		{Nombre: "Maria", Cargo: "Administrador", Correo: "qwerty@email.com"},
	}
)
