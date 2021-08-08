<?php

    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '12345';
    $dbname = 'signup_login';


    if(!$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)){

        die("failed to connect!");
    }
?>