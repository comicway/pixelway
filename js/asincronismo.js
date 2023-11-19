async function cargarProyectos() {
    try {
      
      const response = await fetch('https://comicway.github.io/pixelway/proyectos.json');
      
      if (!response.ok) {
        throw new Error('No se pudo cargar la lista de proyectos');
      }

      const proyectos = await response.json();
  
      mostrarProyectos(proyectos);
    } catch (error) {
      console.error('Error al cargar proyectos:', error.message);
    }
  }
  
  function mostrarProyectos(proyectos) {
    const contenedorProyectos = document.querySelector("#proContenedor");

    proyectos.forEach(proyectos => {
  
      const tarjetaProyecto = document.createElement('div');
      tarjetaProyecto.className = 'col-6';
  
      tarjetaProyecto.innerHTML = `
      <div class="card card-color" style="margin-top: 15px;">
      <img src="./img/gris-videojuego-card.jpg" class="card-img-top" alt="">
      <div class="card-body">
        <div class="container-flex-card">
          <div class="item-grow-1">
            <img src="${proyectos.img}" width="90px" height="90px">
          </div>
          <div class="item-grow-11">
            <h5 class="card-title">${proyectos.titulo}</h5>
            <p class="card-text">${proyectos.descripcion}</p>
            <p class="card-category">${proyectos.tipo}</p>
          </div>
        </div>
        <p>Meta de donación:<span> 25.000</span> <span class="span-donacion">Falta: ${proyectos.meta}</span></p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar color-bar-progress" style="width: 75%"></div>
        </div>
        <a href="proyecto.html" class="btn color-btn-way">VER PROYECTO</a>
      </div>
    </div>
      `;
  
      contenedorProyectos.appendChild(tarjetaProyecto);

    });

    console.log('Proyectos cargados:', proyectos);
  }
  
  document.addEventListener('DOMContentLoaded', cargarProyectos);
  