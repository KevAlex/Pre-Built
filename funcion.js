function s(){
	document.onkeydown=mover;
}
function mover(obj) {
	
	var key = obj.which;
	var elemento = document.getElementById('ship');
	var situacionY = document.getElementById("ship").offsetLeft;
	var situacionX = document.getElementById("ship").offsetTop;
	var posicion

	switch (key){

		case 37 :   /Izq key/
		ship.style.left = situacionY-210+"px" ; 
		posicion = elemento.getBoundingClientRect();

		console.log("izq " + posicion.right);
		if(posicion.left< ){
			ship.style.left=
		}
		break;

		case 38 : /Up key/

		ship.style.top = situacionX-210+"px" ;
		
		posicion = elemento.getBoundingClientRect();

		console.log(posicion.top);
		break;
		case 39 :  /Der key/ 
		ship.style.left = situacionY-170+"px" ;
		
		posicion = elemento.getBoundingClientRect();

		console.log(posicion.right);
		if (posicion.right>600) {

			ship.style.left= 8+"px";

		}
		break;
		case 40 : /down key/
		ship.style.top = situacionX-170+"px" ;
		
		posicion = elemento.getBoundingClientRect();
		if(posicion.top >380){
			ship.style.top = 330+ "px";
		
		}

		console.log(posicion.top);
		break;
	//	default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
	
}
}

	

