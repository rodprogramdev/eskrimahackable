


        /******************************VARIABLES FOR CANVAS******************************************/
        var canvas, canvasContext; 

        window.onload = function () {
            canvas = document.getElementById('gameCanvas');
            canvasContext = canvas.getContext('2d');
           
           
            colorRect(0,0,canvas.width,canvas.height, 'black');
            colorText("LOADING IMAGES",canvas.width/2,canvas.height/2,'white');
            // trackLoadImages();
            // carImageLoad();
            loadImages()
           
            // var framesPersecond = 30;
            // setInterval(updateAll, 1000 / framesPersecond);
            // setupInput();
            // carReset();
        }

        function imageLoadingDoneSoStartGame(){
            var framesPersecond = 30;
            setInterval(updateAll, 1000 / framesPersecond);
            setupInput();
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

        // function clearScreen(){
        //     colorRect(0, 0, canvas.width, canvas.height, 'black'); // This will clear the screen
        // }

        function drawAll() {
            // clearScreen();           
           
            drawTracks();
            carDraw();

        }



