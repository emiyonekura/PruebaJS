var num = 3;

$("div").on("click" function(event){
	var target = $(event.target);
		if (target.is("div")){
			num++ ;
	   		$("ol").append("<li>" + "Elemento " + num + "</li>" );
	    }
})