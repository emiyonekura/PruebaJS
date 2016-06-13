function Alumno(nombre, notas){
	this.nombre = nombre;
	this.notas = [];

	this.check = function(){
		if (typeof this.nombre !== "string"){
			alert("Ingresa un nombre válido");
		} continue;
	}
}


var alumno1 = new Alumno("Oscar", [2,3]);