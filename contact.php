<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['Email'];
$subject= $_POST['Subject'];
$message= $_POST['Messagee'];

$to = "omobayode93@gmail.com";
$subject = "Message From Contact Form";

$txt = " Name = ". $name . "\r\n Email = " . $email . "\r\n Subject =" . $subject . "\r\n Message =" . $message;
$headers = "From: noreply@tuntoy.com" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:contact-us.html");
?>