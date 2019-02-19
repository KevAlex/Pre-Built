function prue (){
	alert("hola");

}

var nave = document.getElementById("ship");

document.onkeydown= function(a){
	
	// alert(a.keyCode);
	
	
	if (a.keyCode === 38){
	
		alert("up");
		a.preventDefault();
	}
	
	if (a.keyCode === 37){
	
		alert("lft");
		a.preventDefault();
	}
	
	if (a.keyCode === 39){
	
		alert("rgt");
		a.preventDefault();
	}
	
	if (a.keyCode === 40){
	
		alert("down");
		a.preventDefault();
	}
}




	

function key(){
	
}