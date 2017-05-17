function agregar(){
//recuperamos texto ingresado en textarea y limpio textarea
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";

//indicamos donde van a estar las tareas que recupere de textarea

	var cont = document.getElementById("contenedor");

//creamos nuestros nuevos nodos elementos

	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	
	//valida que textarea no este vacia al presionar boton aceptar, ubica el siguiente codigo dentro de la funcion de manera que no se permita agregar una tarea vacia

	if(tareas == null || tareas.length == 0) {
		alert("¡Error! Debe ingresar tarea");
		return false;
	}

//asignamos padres a nodos creados

	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

//creamos checkbox e iconos, les damos atributo y clases

	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

//asignamos padres a nodos creados

	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

//agregamos un evento al hacer clic, para que elimine o agregue la clase "tachado" al elementoContenedor

	chck.addEventListener("click", function() {
		elementoContenedor.classList.toggle("tachado");
	});

//removemos el icono basurero al hacerle click sobre el

	basura.addEventListener("click", function() {
		cont.removeChild(nuevasTareas);
		});

//creamos funcion click para el corazon y le asignamos la clase red de css
	
	cora.addEventListener("click", function() {
		cora.classList.toggle("red");
	
	});	
		
}

//ademas, si deseas eliminar la llamada onclick="agregar()" del elemento #boton, puedes agregar este codigo al inicio del documento


window.onload = function() {
	document.getElementById("boton").addEventListener("click", agregar);
		}
























