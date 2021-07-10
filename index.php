<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackable</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">  -->
   
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="styles/style.css">
</head>

<body onload="typeWriter()">
    <audio autoplay>
        <source src="mixkit-keyboard-typing-1386.wav" type="audio/wav">
  Your browser does not support the audio tag.
    </audio>
    <header class="header">
        <div class="header__container">
        <audio autoplay>
            <source src="mixkit-keyboard-typing-1386.wav" type="audio/wav">
        </audio>
            <div class="header__nav">
                <ul class="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="start.html">Story</a></li>
                    <li><a href="Arnisador/arnisador.html">Challenges</a></li>
                    
                </ul>
            </div>
            
            <div class="x3rima">
               
                
            </div>

            <!-- <div class="header__login">
                <ul>
                    <li>REGISTER</li>
                    <li><a href="login.php">LOGIN</a></li>
                </ul>

            </div> -->


            <div class="header__heading">
                <h1 class="header__heading--1" id="demo"></h1>
              
            </div>


            <p>IAmHiddenInPlainSite!!!</p>

           
            
        </div>

    </header>


    <script>
        var i = 0;
        var txt = 'Welcome to my HACKABLE SITE! Do try to look for the FLAG!'; /* The text */
        var speed = 150; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    </script>

</body>

</html>