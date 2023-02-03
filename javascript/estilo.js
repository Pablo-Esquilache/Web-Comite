/*FORMULARIO CONTACTO*/

// const btnEnvio = document.getElementById('enviarCorreo')

// btnEnvio.addEventListener('click', function(e) {
//     e.preventDefault();
//     const nombre = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const asunto = document.getElementById("asunto").value;
//     const mensaje = document.getElementById("mensaje").value;
//     window.location.href=`mailto:pabloesquilache@gmail.com?subject=${asunto}&body=Nombre%20y%20Apellido%3A ${nombre}%0Aemail%3A ${email}%0AMensaje%3A ${mensaje}`;
// });

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_kym0z0o";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar";
      btn.value = "Mensaje enviado!";
      form.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
