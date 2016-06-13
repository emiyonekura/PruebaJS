var	alumno1	=	{nombre:	"Matías",	edad:5}
var	alumno2	=	alumno1
alumno2.nombre	=	"Sebastián"

//El problema es que se está creando la variable alumno2 como copia de alumno1 y
//al asignar un nuevo nombre a alumno2, también cambia el valor
//del nombre de alumno1, quedando los dos como "Sebastián"