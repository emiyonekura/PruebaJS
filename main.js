var array = [1,2,3,4,"shgd",6];

function suma(array){
	var resultado = 0;

 for (var i = 0; i < array.length; i++) {
 	if (!isNaN(array[i]) == true) {
 		resultado = resultado + array[i];	
 	} 
 
 }
 return resultado;
}