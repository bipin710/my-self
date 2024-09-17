<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'bipinchaulagain13@gmail.com';
    $subject = 'Contact Form Submission';

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
