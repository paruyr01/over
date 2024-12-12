<?php
$recaptchaSecretKey = '6Ldv5gEqAAAAB_kImMdcA_S58B21Abm45KclSKC'; // Replace with your secret key
$recaptchaResponse = $_POST['recaptchaResponse']; // Get the reCAPTCHA response token from the form

$data = [
    'secret' => $recaptchaSecretKey,
    'response' => $recaptchaResponse
];

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ],
];
$context  = stream_context_create($options);
$verify = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);

$captcha = json_decode($verify);

if ($captcha->success) {
    // reCAPTCHA verified successfully
    // Proceed with your form processing logic here
    // For example, save the form data to a database
} else {
    // reCAPTCHA verification failed
    // Redirect back to the form page with an error message or handle the failure as needed
    header('Location: /'); // Example redirect
    exit;
}
