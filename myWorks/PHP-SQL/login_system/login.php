<?php


session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST"){

    //something was posted

    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];

    if(!empty($user_name) && !empty($user_password) && !is_numeric($user_name)){

        //read from database
        $query = "SELECT * FROM users WHERE user_name = '$user_name' limit 1";

        $result = mysqli_query($con, $query);

        if($result){

            if($result && mysqli_num_rows($result) > 0){ 

                $user_data = mysqli_fetch_assoc($result);
                
                if($user_data['user_password'] === $user_password){
                    
                    $_SESSION['user_id'] = $user_data['user_id'];
                    header("Location: index.php");
                    die;
                }
            }
        }
        echo "Please enter some valid information!";
    } 
    else{
        echo "Please enter some valid information!";
    }
}




?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="box">
        <div class="login-head">Login</div>
        <form action="" method="post">
            <input id="text" type="text" name="user_name"> <br><br>
            <input id="text" type="text" name="user_password"> <br><br>

            <input id="button" type="submit" value="Login"><br><br>

            <a href="signup.php">Signup</a>
        </form>
    
    
    </div>
</body>
</html>