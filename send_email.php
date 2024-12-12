
<?php
  $business_type = $_POST['business_type'];
  $full_name = $_POST['full_name'];
  $email_address = $_POST['email_address'];
  $phone_number = $_POST['phone_number'];
  $business_name = $_POST['business_name'];
  $business_address = $_POST['business_address'];
  $message = $_POST['message'];


    $to ="overtv@gmail.com";
    $subject = 'Sci-Fi Nobels v2';
    $from = $email;

    $message = '
    <html>
        <head>
            <title></title>
        </head>
        <body>
            <table>
                <tr>
                    <td><b>business_type: </b>'.$business_type.'</td>
                </tr>
                <tr>
                    <td><b>full_name: </b>'.$full_name.'</td>
                </tr>
                <tr>
                    <td><b>email_address: </b>'.$email_address.'</td>
                </tr>
                <tr>
                    <td><b>phone_number: </b>'.$phone_number.'</td>
                </tr>
                <tr>
                    <td><b>business_name: </b>'.$business_name.'</td>
                </tr>
                <tr>
                    <td><b>business_address: </b>'.$business_address.'</td>
                </tr>
                <tr>
                    <td><b>message: </b>'.$message.'</td>
                </tr>
            </table>
        </body>
    </html>
    ';
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$name.'<'.$from.'>'. "\r\n";
    if(mail($to,$subject,$message,$headers))
    {
        header('Location: /');

    }
    else
    header('Location: /');

?>