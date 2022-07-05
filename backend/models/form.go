package models

import "github.com/jinzhu/gorm"

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
