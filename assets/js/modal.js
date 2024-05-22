document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById("myModal");

    // Obtener el enlace que abre el modal
    var link = document.getElementById("openModalLink");

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en el enlace, abre el modal y carga el contenido
    link.onclick = function(event) {
        event.preventDefault(); // Evita que el enlace navegue
        fetch('modal.html') // Cargar el contenido del archivo externo
            .then(response => response.text())
            .then(data => {
                document.getElementById('modal-body').innerHTML = data; // Insertar el contenido en el modal
                modal.style.display = "block"; // Mostrar el modal
            })
            .catch(error => console.error('Error al cargar el contenido del modal:', error));
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, cierra el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
