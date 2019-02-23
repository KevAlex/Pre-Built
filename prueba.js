function empezar() {
	location.href="fondo.html";
}
function salir(){
	location.href="menu.html";
}
setInterval(score,900);
var x=500;
var y=400;
var t=0;
function nave(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font= "20px Arial ";
	ctx.fillStyle = 'yellow';
	
	var img = new Image();
	img.src = "imagenes/nave.png";
	img.onload = function(){

		ctx.clearRect(0,0,640,480);
		console.log(x,y);
		ctx.drawImage(img, x, y);
		ctx.fillText("Puntaje: ",300,80);
		ctx.font = "25px Times New Roman ";
		ctx.fillStyle = 'green';
		ctx.fillText(t,450,80);

	}

}

function score(){

	t= t+5;
	return t;
}


function cambio(event){

	if(event.keyCode=='39'){//si la tecla presionada es direccional derecho
		x=x+5;//mueve la nave 5 pixeles a la derecha
		if (x>640) {
			x=x-630;
			
		} nave(); 

	}

	if(event.keyCode=='37'){//si la tecla presionada es direccional izquierdo
		x=x-5;//mueve la nave 5 pixeles a la izquierda
		if (x<0) {
			x=x+640;
		} 
			nave();
	}

	if(event.keyCode=='38'){//si la tecla presionada es direccional arriba

		y=y-5;//sube la nave
		if (y<0) {
			y=y+480;
		}
		nave();

	}

	if(event.keyCode=='40'){// si la tecla presionada es direccional abajo

		y=y+5;//baja la nave
		if (y>480) {
			y=y-480;
		}
		nave();

	}
	}