        var canvas, canvasContext; 
        
        var blackCar = new carClass();
        var blueCar = new carClass();

        window.onload = function () {
            canvas = document.getElementById('gameCanvas');
            canvasContext = canvas.getContext('2d');
           
            colorRect(0,0,canvas.width,canvas.height, 'black');
            colorText("LOADING IMAGES",canvas.width/2,canvas.height/2,'white');
           
            loadImages();
        }

        function imageLoadingDoneSoStartGame(){
            var framesPersecond = 30;
            setInterval(updateAll, 1000 / framesPersecond);
            
            setupInput();
            blueCar.reset(otherCarPic);
            blackCar.reset(carPic);
           
          
        }
        
        function updateAll() {
            moveAll();
            drawAll();
        }

        function moveAll() {
            blackCar.move();
            blueCar.move();
        }


        function drawAll() {
            drawTracks();
            blackCar.draw();
            blueCar.draw();
           
           
        }



