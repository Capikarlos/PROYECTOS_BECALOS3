document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        
        let entrada = document.getElementById("entrada");
        let texto = entrada.value.trim();
        if (texto === "") return;
        
        //crear el bloque del comentario
        let comentario = document.createElement("div");
        comentario.className = "comentario";
        //botón para borrar el comentario
        let borrar = document.createElement("button");
        borrar.textContent = "Eliminar";
        borrar.onclick = function() {
        comentario.parentNode.removeChild(comentario);
        };
        comentario.appendChild(borrar);

        //agregar el texto del comentario
        let parrafo = document.createElement("p");
        parrafo.textContent = texto;
        comentario.appendChild(parrafo);

        //Agregar la fecha y hora actual
        let fecha = document.createElement("span");
        fecha.className = "fecha";
        fecha.textContent = new Date().toLocaleString();
        comentario.appendChild(fecha);

        //Insertar el comentario en el contenedor
        document.getElementById("contenedor").appendChild(comentario);

        //Limpiar el campo de texto
        entrada.value = "";
    });
});
