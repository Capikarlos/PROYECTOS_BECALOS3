// Definición de la clase Libro
class Libro {
    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado; //'disponible' o 'prestado'
        this.capitulos = [];
    }

    //imprimir la información básica del libro
    describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }

    // Método pa agregar un capítulo
    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);
    }

    //Método pa eliminar un capítulo
    eliminarCapitulo(capitulo){
        const indice= this.capitulos.indexOf(capitulo); //busca el índice del capítulo
        if (indice !== -1){//si lo encuentra, lo elimina
        this.capitulos.splice(indice, 1);
        }
    }
}

//Mis respuestas
    //ejemplo de uso
    const miLibro = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "disponible");

    //Mostrar la descripción del libro en la consola
    console.log(miLibro.describirLibro());

    //opcional:agregar y eliminar capítulos
    miLibro.agregarCapitulo("Capítulo 1: El encuentro");
    miLibro.agregarCapitulo("Capítulo 2: La aventura");
    console.log("Capítulos:", miLibro.capitulos);

    miLibro.eliminarCapitulo("Capítulo 1: El encuentro");
    console.log("Capítulos después de eliminar:", miLibro.capitulos);

    //Lo que nos enseño en clases
    document.getElementById("resultado").innerText = miLibro.describirLibro();

    //otro ejemplo
    const otroLibro= new Libro("El Aleph", "Jorge Luis Borges", 1949, "disponible");
    console.log(otroLibro.describirLibro());
