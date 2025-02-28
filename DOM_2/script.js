document.addEventListener('DOMContentLoaded', function() {
    const displayContraseña = document.getElementById('displayContraseña');
    const rangoLongitud = document.getElementById('rangoLongitud');
    const valorLongitud = document.getElementById('valorLongitud');
    const mayusculas = document.getElementById('mayusculas');
    const minusculas = document.getElementById('minusculas');
    const numeros = document.getElementById('numeros');
    const simbolos = document.getElementById('simbolos');
    const nivelFuerza = document.getElementById('nivelFuerza');
    const btnGenerar = document.getElementById('btnGenerar');
    
    const caracteres ={
    mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculas: 'abcdefghijklmnopqrstuvwxyz',
    numeros: '0123456789',
    simbolos: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
    };
    
    function actualizarLongitud(){
    valorLongitud.textContent = rangoLongitud.value;//Actualiza el valor de la longitud de la contraseña
    }
    
    function generarContraseña() {
    let caracteresDisponibles = '';
    //Concatena los caracteres seleccionados por el usuario
    //.checked devuelve true si el checkbox esta seleccionado
    if (mayusculas.checked) caracteresDisponibles += caracteres.mayusculas;
    if (minusculas.checked) caracteresDisponibles += caracteres.minusculas;
    if (numeros.checked) caracteresDisponibles += caracteres.numeros;
    if (simbolos.checked) caracteresDisponibles += caracteres.simbolos;
    
    if (caracteresDisponibles === ''){
        displayContraseña.textContent = 'Selecciona al menos una opción';
        return; //EL usuario no seleccionó ninguna opción
    }
    //parseInt convierte el valor de un string a un entero lo necesito pa la longitud
    const longitud = parseInt(rangoLongitud.value);
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteresDisponibles.length);//esto funciona como un random para seleccionar un caracter gracias a mi arreglo de caracteresDisponibles
        contraseña += caracteresDisponibles[indice];
    }
    
    displayContraseña.textContent = contraseña; //Muestra la contraseña generada
    evaluarFuerza(contraseña);
    }
    
    function evaluarFuerza(contraseña) {
    let fuerza = 0; 
    if (/[A-Z]/.test(contraseña)) fuerza++;
    if (/[a-z]/.test(contraseña))  fuerza++;
    if (/[0-9]/.test(contraseña)) fuerza++;
    if (/[^A-Za-z0-9]/.test(contraseña)) fuerza++;
    
    const niveles = ['DEBIL | ▮▯▯▯', 'MEDIO | ▮▮▯▯', 'FUERTE | ▮▮▮▯', 'MUY FUERTE | ▮▮▮▮'];
    nivelFuerza.textContent = niveles[fuerza - 1] || 'DEBIL | ▮▯▯▯'; //CAlcula el nivel de fuerza de la contraseña con los ifs
    }
    
    rangoLongitud.addEventListener('input', actualizarLongitud); //Actualiza la longitud de la contraseña
    btnGenerar.addEventListener('click', generarContraseña); // Genera la contraseña
    
    actualizarLongitud();
});
