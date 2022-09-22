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
//crear el evento para que escuche el submit y nombro la funcion

formulario.addEventListener("submit", (e) =>{
    enviarFormulario(e)
});

function enviarFormulario (e){
    e.preventDefault()
    const user = document.querySelector("#usuario").value
    const edad = document.querySelector("#clave").value
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${user}, tienes la edad de ${edad}`
    localStorage.setItem('user', user)
    localStorage.setItem('edad', edad)
}
enviarFormulario();





    const input = document.querySelector('.inp')
    const button = document.querySelector('.btn')
    const pokemonCont = document.querySelector('#pokemon-container')
     
    button.addEventListener('click' ,(e) =>{
    e.preventDefault();
    traerPokemon(input.value);
})
    function traerPokemon(){
        fetch('https://pokeapi.co/api/v2/ability/{id or name}/')
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
        }) ;
    }

    function crearPokemon(pokemon){
        //crea la variable de img
        const img = document.createElement('img');
        //llamo al atributo sprite del array
        img.src = pokemon.sprites.front_default;

        const h3 = document.createElement('h3');
        h3.textContent=pokemon.name;

        const div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(h3);

        pokemonCont.appendChild(div)
    }
    crearPokemon();
    traerPokemon();

    const lista = document.getElementById('lista')
    fetch( 'https://jsonplaceholder.typicode.com/users')
    .then((respuesta) => respuesta.json())// 
    .then((data) => data.forEach ((info) => {
        const li=  document.createElement('li') //creamos la etiqueta
        li.innerHTML = ` 
        <p>${info.id}</p>
        <img>${info.img}</img>
        <h3>${info.name}</h3>
        <p>${info.username}</p>
        <p>${info.email}</p>
        `//lo imprimimos con el inner
         lista.append(li)//avisamos que lo creamos en append para que todo lo que creamos  adentro de esta lista 
         console.log(data)
    })) 
    fetch( 'https://jsonplaceholder.typicode.com/post',
    {
        method: 'POST',
        body:JSON.stringify({
            id: 10,
            name: "juan",
            username:"juankpopro",
            email: "juan@gamil.com"
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }
       
    }
    )
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
