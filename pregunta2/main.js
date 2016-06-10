var suma = 0;

do {

	var valor = prompt("ingresa un número");
	if (!isNaN(valor)){

	suma = suma + parseInt(valor);
	}
}

while (valor != "fin");
	

console.log(suma)