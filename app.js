let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let parrafo = document.querySelector(elemento);
  parrafo.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // No acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El Número Secreto es Menor");
    } else {
      asignarTextoElemento("p", "El Número Secreto es Mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  // Ya se sortearon todos los numeros
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", `Ya se sortearon todos los numeros posibles`);  
  } else {
    // Verificacion del numero generado, ya que no se debe de reutilizar
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del Numero Secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // Limpair la caja
  limpiarCaja();
  // Reinicio de Juego
  condicionesIniciales();
  // Deshabilita el botón de reinicio
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function imcCalculate(altura, peso) {
  return (peso / (altura * altura)).toFixed(2);
}

condicionesIniciales();
