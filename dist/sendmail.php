<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$phone = $_POST['phone'];
$name = $_POST['name'];
$massage  = '';

$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true; 
$mail->Username = 'support2@newshift.ru'; 
$mail->Password = 'i45xLc2ujCNwE7yQ'; 
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 
$mail->setFrom('support2@newshift.ru');
$mail->addAddress('support@newshift.ru');

// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Заявка с outstaffing';
$mail->Body = "Телефон: $phone, Имя: $name, Отправлено из outstaffing";
// Результат
if(!$mail->send()) {
 $message = 'ошибка';
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {
 $message = 'Данные отправлены!';
 echo 'ok';
}

$response = ['message' => $message];
header('Content-Type: application/json');
echo json_encode($response);
?>