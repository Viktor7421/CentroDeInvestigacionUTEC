package models

import "github.com/jinzhu/gorm"

type Usuario struct {
	gorm.Model

	Nombre string `json:"Nombre"`

	Cargo string `json:"Cargo"`

	Correo string `json:"Correo"`
}
