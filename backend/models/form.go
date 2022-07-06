package models

import "github.com/jinzhu/gorm"

type Encuestas struct {
	gorm.Model

	UsuarioId int `json:"UsuarioId"`

	Departamento_Academico string `json:"Departamento_Academico"`

	Centro_de_Investigación string `json:"Centro_de_Investigación"`

	Linea_de_investigacion string `json:"Linea_de_investigacion"`

	Titulo_de_Proyecto string `json:"Titulo_de_Proyecto"`

	Tipo_de_Proyecto string `json:"Tipo_de_Proyecto"`

	Investigador_Principal string `json:"Investigador_Principal"`

	Coeinvestigadores_de_UTEC string `json:"Coeinvestigadores_de_UTEC"`

	Tipo_de_participacion string `json:"Tipo_de_participacion"`

	Fecha_de_inicio_de_Proyecto string `json:"Fecha_de_inicio_de_Proyecto"`

	POI_Financiadora string `json:"POI_Financiadora"`

	Tipo_entidad_financiadora string `json:"Tipo_entidad_financiadora"`

	Presupuesto_proyecto int `json:"Presupuesto_proyecto"`

	Overhead int `json:"Overhead"`

	Monto_asignado int `json:"Monto_asignado"`

	Moneda string `json:"Moneda"`

	Estado_financiamiento string `json:"Estado_financiamiento"`

	Se_requiere_aprovacion string `json:"Se_requiere_aprovacion"`
}
