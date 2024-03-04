let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`); /* Operador ternario: ? -> if, : -> else */
        document.getElementById("reiniciar").removeAttribute("disabled"); //Activa el botón de juego nuevo
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número es menor");
        }
        else {
            asignarTextoElemento("p", "El número es mayor");
        }
        intentos++; /* Equivalente a intentos += 1 */
        limpiarCaja();
    }
    /* === igual en valor y tipo */
    /* Notar que estamos llamando a una función dentro de otra función */
    return;
}

//Para dejar al recuadro de número vacío en cada nuevo intento

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");

    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Parece un continue (Recursividad)
        } else {
            
            listaNumerosSorteados.push(numeroGenerado);
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
            
        }
    }
    
    
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
     //generar nuevo número aleatorio
     numeroSecreto = generarNumeroSecreto();
     //Inicializar el número de intentos
     intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    
}

condicionesIniciales()