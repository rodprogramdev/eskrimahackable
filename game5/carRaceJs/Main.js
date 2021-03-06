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

            loadLevel(levelList[levelNow]);
            // trackGrid = levelOne;
            // blueCar.reset(otherCarPic, "Machine Raider");
            // blackCar.reset(carPic, "Black Fire");
           
          
        }

        function nextLevel(){
            levelNow++;
            if(levelNow >= levelList.length){
                levelNow = 0;
            }
            loadLevel(levelList[levelNow]);
        }

        function loadLevel(whichLevel){
            trackGrid = whichLevel.slice();
            blueCar.reset(otherCarPic, "Machine Raider");
            blackCar.reset(carPic, "Black Fire");

            //trackGrid[30] = 5;
            //console.log(whichLevel[30]);
           
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



