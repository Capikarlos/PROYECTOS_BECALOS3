//Array que almacena los libros leídos
const librosLeidos = [];

//Función que agrega un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

//mi función que muestra en la consola todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(`${i + 1}. ${librosLeidos[i]}`);
    }
    
}

// mi ejemplo de uso:
agregarLibro("Cien Años de Soledad");
agregarLibro("El principito");
agregarLibro("El Aleph");
agregarLibro("La Odisea");

mostrarLibrosLeidos();
