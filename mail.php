<?php
if(isset($_POST['email'])) {
 
    // Edita las líneas siguientes con tus datos de correo electrónico
    $email_to = "pabloesquilache@gmail.com";
    $email_subject = "Formulario de contacto de tu sitio web";
 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $asunto = $_POST['asunto'];
 
    // Crea el mensaje
    $email_message = "Detalles del formulario de contacto:\n\n";
    $email_message .= "Nombre: " . $name . "\n";
    $email_message .= "Correo electrónico: " . $email . "\n";
    $email_asunto = " " . $asunto . "\n";
    $email_message .= "Mensaje: " . $message . "\n";
 
    // Encabezados adicionales
    $headers = 'De: '.$email."\r\n".
    'Responder a: '.$email."\r\n".
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
 
    // Redirige a la página de agradecimiento
    header('Location: index.html');
}
?>
