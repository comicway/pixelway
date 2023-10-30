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

    function calcularResultado() {
        
        const valorMaterial = checkboxMaterial.checked;
        const valorEspecial = checkboxEspecial.checked;
        const valorFigura = checkboxFigura.checked;

        const carrito = document.querySelector("#carrito");

        let total = 0;
        
        function agregarRecompensa(nombre, precio) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${nombre} <span>${precio}$USD</span>`;
            carrito.appendChild(li);
            total += precio;

        };
        
        if (valorMaterial) {
            agregarRecompensa('Juego + Materiales POP', 30);
        } else {
            carrito.removeChild(li);
        };
        
        if (valorEspecial) {
            agregarRecompensa('Juego edición especial', 40);
        } else {
            carrito.removeChild(li); 
        };
        
        if (valorFigura) {
            agregarRecompensa('Juego + Figura de acción', 60);
        } else {
            carrito.removeChild(li);            
        };

        return total;
    };

    checkboxMaterial.addEventListener("change", calcularResultado);
    checkboxEspecial.addEventListener("change", calcularResultado);
    checkboxFigura.addEventListener("change", calcularResultado);

    const totalRecompensa = document.querySelector("#totalReco");

    totalRecompensa.innerHTML = `Total: <span>${calcularResultado()}$USD</span>`;

    // console.log(calcularResultado());
};

btnApoyar.addEventListener("click", recompensaActiva);

