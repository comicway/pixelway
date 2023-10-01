/* Producto minimo viable */
/* 
Funciones
1. Inicio sesión
2. Registro de usuario
3. Buscador de proyecto
4. Realizar donación
*/

/* 1. Inicio sesión / 2. Registro de usuario */  

alert("Bienvenido a la página Crowdfunding de videojuegos y comics. ¡Continuemos!");

let registroConfir;

function aperturaRegistro() {
    registroConfir = parseInt(prompt("¿Estas registrado?... Coloque 0 (zero) si no lo esta, coloque 1 (uno) si lo esta"));
    return registroConfir;
}

aperturaRegistro();

while (isNaN(registroConfir)){
    alert("Por favor ingrese solo un número");
    aperturaRegistro();
}

if (registroConfir === 1){
    let usuario = prompt("Ingrese su usuario");
    let contrasena = prompt("Ingrese su contraseña");
    console.log(`Tu usuario es ${usuario}, y tu contraseña es ${contrasena}`);
}else {
    alert("Por favor contacte con el administrador del sitio web");
} 

/* 3. Buscador de proyecto */

let buscaProyecto = prompt("¿En cuál proyecto estas interesado?").toLowerCase();

function siExiste(nombredelproyecto) {
    
    const proyectos = ["fifa 23","mario kart 8","zelda","gta", "final fantasy"];
    
    let existeProyecto = proyectos.includes(nombredelproyecto);

    if (existeProyecto){
        alert("El proyecto existe por favor deje una donación");
    } else {
        alert("El proyecto no existe por favor vuelva a intentar");
    }

    return existeProyecto;
} 

/* 4. Realizar donación */

let existeProyecto = siExiste(buscaProyecto);

if (existeProyecto) {
    let donacion = parseInt(prompt("¿De cuanto va hacer su donación a este proyecto"));
}

console.log(existeProyecto);