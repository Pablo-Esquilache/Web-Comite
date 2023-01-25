/*FORMULARIO CONTACTO*/

// const $formulario = document.querySelector('#formulario')
// const $envioMail = document.querySelector('#envioDeMail')

// $formulario.addEventListener('submit', enviarEmail)

// function enviarEmail (event) {
//     event.preventDefault()
//     const formulario = new FormData(this)
//     $envioMail.setAttribute('href',"mailto:@pabloesquilache@gmail.com?subjet=${formulario.get('asunto')} ${formulario.get('nombre')}&body=${formulario.get('email')} ${fomulario.get('mensaje')}");
    
//     $envioMail.click()
// }

const btnEnvio = document.getElementById('enviarCorreo')

btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    window.location.href=`mailto:pabloesquilache@gmail.com?subject=${asunto}&body=Nombre%20y%20Apellido%3A${nombre}%0Aemail%3A${email}%0AMensaje%3A${mensaje}`;
});
