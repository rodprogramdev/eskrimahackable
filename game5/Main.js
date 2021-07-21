


        /******************************VARIABLES FOR CANVAS******************************************/
        var canvas, canvasContext; 

        window.onload = function () {
            canvas = document.getElementById('gameCanvas');
            canvasContext = canvas.getContext('2d');
            var framesPersecond = 30;
            setInterval(updateAll, 1000 / framesPersecond);
           
            setupInput();
            
            carImageLoad();
           
            carReset();
        }


        /******************************FUNCTION DECLARATION FOR UPDATING THE MOVEMENT OF THE CAR******************************************/

        function updateAll() {
            moveAll();
            drawAll();
        }

        function moveAll() {
            carMove();
            carTrackHandling();
           
        }

        /******************************GENERAL FUNCTION DECLARATION FOR DRAWING ON THE CANVASS******************************************/

        function clearScreen(){
            colorRect(0, 0, canvas.width, canvas.height, 'black'); // This will clear the screen
        }

        function drawAll() {
            clearScreen();           
            carDraw();
            drawTracks();

        }



