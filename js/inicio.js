const formu = document.querySelector ("#formRegistro");
const espacioForum = document.querySelector ("#espacioForm");

function registroUsuario(evento){
    
    evento.preventDefault();

    let inputUsuario = document.getElementById("usuario");
    let inputEmail = document.getElementById("email");
    let inputContrasena = document.getElementById("contrasena");
    let inputRepContrasena = document.getElementById("repContrasena");

    const nuevoUsuario = {
       
        usuario: inputUsuario.value,
        email: inputEmail.value,
        contrasena: inputContrasena.value,
        repContrasena: inputRepContrasena.value,

    };

    console.log(nuevoUsuario);

    localStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));
    
    //formu.reset();

    return nuevoUsuario;
    
};

formu.addEventListener("submit", (evento) => {

    const usuarioRegistrado = registroUsuario(evento);

    if (usuarioRegistrado.usuario.trim() === "" || usuarioRegistrado.email.trim() === "" || usuarioRegistrado.contrasena.trim() === "" || usuarioRegistrado.repContrasena.trim() === "") {

        espacioForum.innerHTML = '<h2 class="h2pixel bordemensaje">Los campos están en blanco, vuelva a intentar.</h2><button class="btn color-btn-way w-100 py-2" onclick="recargarPagina()">VOLVER A INTENTAR</button>';

    } else if (usuarioRegistrado.contrasena === usuarioRegistrado.repContrasena) {
        
        registroUsuario(evento);
        formu.remove();
        espacioForum.innerHTML = '<h2 class="h2pixel bordemensaje">Gracias por su registro!</h2><a href="./index.html"><button class="btn color-btn-way w-100 py-2">IR AL HOME</button></a>';

    } else {

        espacioForum.innerHTML = '<h2 class="h2pixel bordemensaje">Sus contraseñas no son iguales. Por favor intente nuevamente!</h2><button class="btn color-btn-way w-100 py-2" onclick="recargarPagina()">VOLVER A INTENTAR</button>';
    };  
});

function recargarPagina() {

    window.location.reload();

};