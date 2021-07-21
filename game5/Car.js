

        var carPic = document.createElement("img");
        var carPicLoaded = false;
           /******************************VARIABLES FOR CAR******************************************/
           var carX = 75; //We will use this value in our arcMethod x axis
           var carY = 75;
          // var carSpeedX = 5;
            //var carSpeedY = 7;
   
           /******************************ROTATIONAL VARIABLES FOR CAR******************************************/
          var carAng = 0;
          var carSpeed =0;
          
          const GROUNDSPEED_DECAY_MULT = 0.94;
          const DRIVE_POWER = 0.5;
          const REVERSE_POWER = 0.2;
          const TURN_RATE = 0.03;


        
          function carImageLoad(){
            carPic.onload = function(){
                carPicLoaded = true;
            }

            carPic.src = "../images/car.png";
        }
          
        /****************************FUNCTION CAR RESET*************************************************/
       
        function carReset() {
            for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
                for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
                    var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                    if (trackGrid[arrayIndex] == 2) {
                        trackGrid[arrayIndex] = 0;
                        // carAng = -90 * Math.PI/180.0; //Multiply * radiance math.pi
                        carAng = -Math.PI/2;
                        carX = eachCol * TRACK_W;
                        carY = eachRow * TRACK_H;
                    }
                }
            }
          
        }

        /****************************FUNCTION CAR MOVE*************************************************/
        //Lets look at the code in the moveAll function on when does the car hit the bottom of the screen. 
        function carMove() {
            carSpeed *= GROUNDSPEED_DECAY_MULT;
            if(keyHeld_Gas){
                carSpeed += DRIVE_POWER;
            }
            if (keyHeld_Reverse){
                carSpeed -= REVERSE_POWER;

            }
            if(keyHeld_TurnLeft){
                carAng -= TURN_RATE;

            }
            if(keyHeld_TurnRight){
                carAng += TURN_RATE;
            }

            carX += Math.cos(carAng) * carSpeed;
            carY += Math.sin(carAng) * carSpeed;
            // carAng += 0.02; Makes the car spin
            
       

        }


        function carDraw(){
            
            if(carPicLoaded){
                drawBitmapCenteredWithRotation(carPic, carX, carY,carAng) ;
            }
        }
