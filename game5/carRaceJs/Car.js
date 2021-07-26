/******************************VARIABLES FOR CAR******************************************/
// var carSpeedX = 5;
//var carSpeedY = 7;

/******************************ROTATIONAL VARIABLES FOR CAR******************************************/

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

/******************************CLASS TO CREATE INSTANCES******************************************/

// function carClass() {
//   this.x = 75; //We will use this value in our arcMethod x axis
//   this.y = 75;
//   this.ang = 0;
//   this.speed = 0;

  var carX = 75; //We will use this value in our arcMethod x axis
  var carY = 75;
  var carAng = 0;
  var carSpeed = 0;

  /****************************FUNCTION CAR RESET*************************************************/

   function carReset() {
     for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
       for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
         var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
         if (trackGrid[arrayIndex] == 2) {
           trackGrid[arrayIndex] = 0;
           // carAng = -90 * Math.PI/180.0; //Multiply * radiance math.pi
           carAng = -Math.PI / 2;
           carX = eachCol * TRACK_W;
           carY = eachRow * TRACK_H;
         }
       }
     }
   }

  
  // this.reset() = function() {
  //   for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
  //     for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
  //       var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
  //       if (trackGrid[arrayIndex] == 2) {
  //         trackGrid[arrayIndex] = 0;
  //         // carAng = -90 * Math.PI/180.0; //Multiply * radiance math.pi
  //         carAng = -Math.PI / 2;
  //         this.x = eachCol * TRACK_W;
  //         this.y= eachRow * TRACK_H;
  //       } //end of player start if
  //     } // end of col for
  //   }// endo frow for
  // }// end of carReset function

  /****************************FUNCTION CAR MOVE*************************************************/
  //Lets look at the code in the moveAll function on when does the car hit the bottom of the screen.
  function carMove() {
     carSpeed *= GROUNDSPEED_DECAY_MULT;
     if (keyHeld_Gas) {
       carSpeed += DRIVE_POWER;
     }
     if (keyHeld_Reverse) {
       carSpeed -= REVERSE_POWER;
     }
     if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
       if (keyHeld_TurnLeft) {
         carAng -= TURN_RATE;
       }
       if (keyHeld_TurnRight) {
         carAng += TURN_RATE;
       }
     }
     carX += Math.cos(carAng) * carSpeed;
     carY += Math.sin(carAng) * carSpeed;
   //carAng += 0.02; //Makes the car spin
   }
  // this.move= function() {
  //   this.speed *= GROUNDSPEED_DECAY_MULT;
  //   if (keyHeld_Gas) {
  //     this.speed += DRIVE_POWER;
  //   }
  //   if (keyHeld_Reverse) {
  //     this.speed -= REVERSE_POWER;
  //   }
  //   if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
  //     if (keyHeld_TurnLeft) {
  //       this.ang -= TURN_RATE;
  //     }
  //     if (keyHeld_TurnRight) {
  //       carAng += TURN_RATE;
  //     }
  //   }
  //   carX += Math.cos(carAng) * carSpeed;
  //   carY += Math.sin(carAng) * carSpeed;
  //   // carAng += 0.02; Makes the car spin
  // }

 function carDraw() {
   drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
    if(carPicLoaded){
     drawBitmapCenteredWithRotation(carPic, carX, carY,carAng) ;
    }
 }
  // this.draw= function() {
  //   drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
  //   // // if(carPicLoaded){
  //   //     drawBitmapCenteredWithRotation(carPic, carX, carY,carAng) ;
  //   // }
  // }

