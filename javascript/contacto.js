
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
      setTimeout(() => {
        btn.value = "Enviar";
        form.reset();
      }, 1000);
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
