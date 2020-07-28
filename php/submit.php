

<?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        $email_from = "'$email'";
        $email_subject = "'$name' has been sent a mail";

        $email_body = "User Name: $name. \n".
                        "User Email: $email. \n".
                            "Subject: $subject. \n".
                            "Message: $msg. \n";

        $to = "cube90solutions@gmail.com";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: $email_from \r\n";
        $headers .= "Reply-To: $email \r\n";

        if ($_POST['submit']) {
            if (mail ($to,$email_subject,$email_body,$headers,$email_from)) { 
               $success = "Message successfully sent";
            } else {
                $success = "Message Sending Failed, try again";
            }
        }
?>