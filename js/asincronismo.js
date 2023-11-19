async function cargarProductos() {
    try {
      
      const response = await fetch('proyectos.json');
      
      if (!response.ok) {
        throw new Error('No se pudo cargar la lista de productos');
      }

      const proyectos = await response.json();
  
      mostrarProductos(proyectos);
    } catch (error) {
      console.error('Error al cargar productos:', error.message);
    }
  }
  
  function mostrarProductos(proyectos) {
    console.log('Proyectos cargados:', proyectos);
  }
  
  document.addEventListener('DOMContentLoaded', cargarProductos);
  