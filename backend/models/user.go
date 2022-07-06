package models

import "github.com/jinzhu/gorm"

type Usuario struct {
	gorm.Model

	GoogleId string `json:"GoogleId"`

	Nombre string `json:"Nombre"`

	Cargo string `json:"Cargo"`

	Correo string `json:"Correo"`
}
