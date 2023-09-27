/* Producto minimo viable */
/* 
Funciones
1. Inicio sesión
2. Registro de usuario
3. Buscador de proyecto
*/

/* 1. Inicio sesión / 2. Registro de usuario */

 alert("Bienvenido a la página Crowdfunding de videojuegos y comics. ¡Continuemos!");

function aperturaRegistro() {
    let registroConfir = parseInt(prompt("¿Estas registrado?... Coloque 0 (zero) si no lo esta, coloque 1 (uno) si lo esta"));
    return registroConfir;
}

aperturaRegistro();

while (isNaN(registroConfir)){
    alert("Por favor ingrese solo un número")
    aperturaRegistro();
}

if (registroConfir === 1){
    let usuario = prompt("Ingrese su usuario");
    let contrasena = prompt("Ingrese su contraseña");
    console.log(`Tu usuario es ${usuario}, y tu contraseña es ${contrasena}`);
}else {
    alert("Por favor contacte con el administrador del sitio web");
} 