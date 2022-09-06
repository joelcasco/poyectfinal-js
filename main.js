//declaramos las variables
// let formulario = document.getElementById("login");
// let resultado = document.querySelector('#error');
// //creo una class para obtener los datos de los usuarios
// class Usuario {
//     constructor(user, password){
//         this.user = user;
//         this.password = password;
//     }
    
// }
// //creo un array para almacenar los usuarios
// let usuarios = [];
// let usuario = new Usuario("Joel", "2341");
// let usuario2 = new Usuario("Santiago", "1234");

// usuarios.push(usuario,usuario2);

// // declaro un evento para agregar una funcion para enviar el form
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault(); // prevenimos el evento para que no se mande directament el form
//     let usuarioLogin = document.getElementById("user").value;
//     let passLogin = document.getElementById("pass").value;

//     for(let user of usuarios){
//         if (user.user == usuarioLogin && user.password == passLogin){
//             alert("acceso correcto");
//             window.location.href = "welcome.html" // para que me redireccione al html de la calculadora
//         } else  if ((user.user =! usuarioLogin) && (user.password =! passLogin) || (user.user =! usuarioLogin) ||  (user.password =! passLogin) ){
//             resultado.innerHTML = `<p> acceso incorrecto, revise sus datos</p>`
//         }
//     }
// })
// console.log(formulario)

let boton = document.getElementById("entrar");
let resultado = document.querySelector('#error');
boton.addEventListener("click", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("usuario").value;
  let pass = document.getElementById("pass").value;

  if (usuario == "Joel" && pass == "1122") {
    window.location.href = "welcome.html";
    localStorage.setItem("nombre", usuario)
  } else {
    resultado.innerHTML = `<p> acceso incorrecto, revise sus datos</p>`
     
  }
})