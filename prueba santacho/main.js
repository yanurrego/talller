

//boton corazon//
const heartIcon = document.querySelector(".like-button .heart-icon");


heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
  

});







//conexion tarjeta a modal//
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todas las tarjetas
  var tarjetas = document.querySelectorAll('.card');

  // Función para abrir el modal
  function abrirModal() {
      var modal = document.getElementById('mymodal');
      var modalInstance = bootstrap.Modal.getInstance(modal);
      if (!modalInstance) {
          modalInstance = new bootstrap.Modal(modal);
      }
      modalInstance.show();
  }

  // Función para verificar si el clic fue fuera del botón del corazón
  function clicFueraDelBotonCorazon(event) {
      var botonCorazon = event.target;
      while (botonCorazon && botonCorazon!== this) {
          botonCorazon = botonCorazon.parentElement;
      }
      return botonCorazon.id!== 'botonCorazon1'; // Ajusta esto según el ID de tu botón del corazón
  }

  // Agrega el controlador de eventos a cada tarjeta
  tarjetas.forEach(function(tarjeta) {
      tarjeta.addEventListener('click', function(event) {
          if (clicFueraDelBotonCorazon.call(this, event)) {
              abrirModal();
          }
      });
  });
});
