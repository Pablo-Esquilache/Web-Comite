/*FORMULARIO CONTACTO*/

const btnEnvio = document.getElementById('enviarCorreo')

btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    window.location.href=`mailto:pabloesquilache@gmail.com?subject=${asunto}&body=<b>Nombre%20y%20Apellido</b>%3A ${nombre}%0A<b>email</b>%3A ${email}%0A<b>Mensaje</b>%3A ${mensaje}`;
});
