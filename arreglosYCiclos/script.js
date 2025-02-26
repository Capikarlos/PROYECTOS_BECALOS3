// Declaro un arreglo con varios tipos de frutas
let frutas = [
    "manzana", "banana", "naranja", "manzana", "banana",
    "manzana", "pera", "naranja", "pera", "lichi"];

//For para contar las frutas
    let fruta, i, cuentaFor = {};

for (i=0; i<frutas.length; i++) {
    fruta = frutas[i];
    if(cuentaFor[fruta]) {
        cuentaFor[fruta]++;
    }else{
        cuentaFor[fruta] = 1;
    }
}

    console.log("Conteo con for:");
    console.log(cuentaFor);

//while para contar las frutas (opcional)
    let cuentaWhile = {};
    let j = 0;

    while (j < frutas.length) {
    fruta = frutas[j];
    if (cuentaWhile[fruta]){
        cuentaWhile[fruta]++;
    }else{
        cuentaWhile[fruta] = 1;
    }
    j++;
}

console.log("Conteo con while:");
console.log(cuentaWhile);
