const carritoExpres = document.querySelector("#recompensas");
const btnApoyar = document.querySelector("#btnQuieroApoyar");


carritoExpres.remove();

function recompensaActiva() {
    const aquiRecompensas = document.querySelector("#recompensasAgregado");
    
    
    aquiRecompensas.appendChild(carritoExpres);
    btnApoyar.remove();
    
    // valores de los checkboxs

    const checkboxMaterial = document.querySelector("#material");
    const checkboxEspecial = document.querySelector("#especial");
    const checkboxFigura = document.querySelector("#figura");
    
    function checkMaterial() {
        const valorMaterial = checkboxMaterial.checked;
        const carrito = document.querySelector("#carrito");
        const elementoLi = document.querySelector(".recompensa-material");

        let precioMaterial = 30;
        
        function agregarRecompensa(nombre, precioMaterial) {
            const li = document.createElement('li');
            li.className = 'list-group-item recompensa-material';
            li.innerHTML = `${nombre} <span>${precioMaterial}$USD</span>`;
            carrito.appendChild(li);
        };

        const eliminarLista = () => elementoLi && elementoLi.remove();

        if (valorMaterial) {
            agregarRecompensa('Juego + Materiales POP', precioMaterial);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sigue agregano items XD",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            eliminarLista();
        };

        return precioMaterial;
    };

    function checkEspecial() {
        const valorEspecial = checkboxEspecial.checked;
        const carrito = document.querySelector("#carrito");
        const elementoLi = document.querySelector(".recompensa-especial");

        let precioEspecial = 40;
        
        function agregarRecompensa(nombre, precioEspecial) {
            const li = document.createElement('li');
            li.className = 'list-group-item recompensa-especial';
            li.innerHTML = `${nombre} <span>${precioEspecial}$USD</span>`;
            carrito.appendChild(li);
        };

        const eliminarLista = () => elementoLi && elementoLi.remove();

        if (valorEspecial) {
            agregarRecompensa('Juego edición especial', precioEspecial);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sigue agregano items XD",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            eliminarLista();  
        };

        return precioEspecial;
    };

    function checkFigura() {
        const valorFigura = checkboxFigura.checked;
        const carrito = document.querySelector("#carrito");
        const elementoLi = document.querySelector(".recompensa-figura");

        let precioFigura = 60;
        
        function agregarRecompensa(nombre, precioFigura) {
            const li = document.createElement('li');
            li.className = 'list-group-item recompensa-figura';
            li.innerHTML = `${nombre} <span>${precioFigura}$USD</span>`;
            carrito.appendChild(li);
        };

        const eliminarLista = () => elementoLi && elementoLi.remove();

        if (valorFigura) {
            agregarRecompensa('Juego + Figura de acción', precioFigura);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sigue agregano items XD",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            //precioFigura = 0;
            eliminarLista();
        };

        return precioFigura;
    };

    checkboxMaterial.addEventListener("change", checkMaterial);
    checkboxEspecial.addEventListener("change", checkEspecial);
    checkboxFigura.addEventListener("change", checkFigura);

    function calcularResultado() {

        let resultado = checkFigura() + checkEspecial() + checkMaterial();

        return resultado;
        
    };

    const totalRecompensa = document.querySelector("#totalReco");

    totalRecompensa.innerHTML = `Total: <span>${calcularResultado()}$USD</span>`;

};

btnApoyar.addEventListener("click", recompensaActiva);

// Uso de temporizadores y asincronia

const numPatrocinadores = document.querySelector("#nPatro");
const faltan = document.querySelector(".span-donacion");

let patro = 16;
let faltaCantidad = 5000;

setInterval(() => {
    numPatrocinadores.innerHTML = ++patro;
    faltan.innerHTML = `Faltan: ${--faltaCantidad}`;
}, 3000);

