<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
    <div class="login">
        <div class="login__container">
        <!-- <form action="" method="POST">
            <label for="username">
               USERNAME 
               <input type="text" placeholder="username" id="username">
            </label>
            
            <label for="password">PASSWORD
            <input type="text" placeholder="password" id="password">
            </label>
           
            <a href="student.php">LOGIN</a>
        </form> -->

        <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form> 
        </div>
        
    </div>
    </header>
</body>
</html>