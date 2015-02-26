
<?php

    $from= $_POST["email"]; // sender
    $name= $_POST["name"];
    $message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail("khantahmina@gmail.com",$name,$message,"From: $from\n");
    
?>