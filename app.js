//DOM interactucar con HTML recibimos con getElement y mandamos a p con .innerHTML
function calcDolar(){
    let num1 = document.getElementById("num1").value;
    document.getElementById("rtaDlr").innerHTML = num1 * 144,86;
    localStorage.setItem('num1', num1)
}

function calcBlue(){
    let num2 = document.getElementById("num2").value;
    document.getElementById("rtaBlue").innerHTML = num2 * 200;
}

function calcEuro(){
    let num3 = document.getElementById("num3").value;
    document.getElementById("rtaEur").innerHTML = num3 * 137,08;
}

//Clase metodo 2 .on / Evento onclick
let botonDlr = document.getElementById("calcDlr")
botonDlr.addEventListener("click", calcDolar);


let botonBlue = document.getElementById("calcBlue")
botonBlue.addEventListener("click", calcBlue);

let botonEur = document.getElementById("calcEur")
botonEur.addEventListener("click", calcEuro);


const formulario = document.querySelector("#formulario");
console.log(formulario)
//crear el evento para que escuche el submit y nombro la funcion

formulario.addEventListener("submit", (e) =>{
    emviarFormulario(e)
});

function enviarFormulario (e){
    e.preventDefault()
    const user = document.querySelector("#usuario").value
    const edad = document.querySelector("#clave").value
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `HOLA${user} tienes la edad de ${edad}`
    localStorage.setItem('user', user)
    localStorage.setItem('edad', edad)
}
enviarFormulario()
