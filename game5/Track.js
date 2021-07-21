
/******************************VARIABLES ******************************************/
       

        const TRACK_W = 40;
        const TRACK_H = 40; 
        const TRACK_GAP = 2;
        const TRACK_COLS = 20;
        const TRACK_ROWS = 15; 

     

        var trackGrid = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
                          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
                          1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                          1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,
                          1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,
                          1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,  
                          1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,
                          1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,
                          1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,
                          1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,
                          1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,  
                          1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
                          1,0,2,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,
                          1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                          1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
                         
                            ];
        // var trackGrid = new Array(TRACK_COLS * TRACK_ROWS);
        // var tracksLeft = 0;

           /****************************HELPER FUNCTION TO DO BALANCE CHECK*************************************/
           function isWallAtColRow(col,row){
            if(col >=  0 && col < TRACK_COLS &&
                row >= 0 && row < TRACK_ROWS){
                    var trackIndexUnderCoord = rowColToArrayIndex(col,row);
                    return (trackGrid[trackIndexUnderCoord] == 1);
                }else{
                    return false;
                }
            
        }


        
        /****************************FUNCTION TRACK HANDLING*************************************************/

        function carTrackHandling() {

          var carTrackCol = Math.floor(carX / TRACK_W);
          var carTrackRow = Math.floor(carY / TRACK_H);
          var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

          if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
              carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

              if (isWallAtColRow(carTrackCol,carTrackRow)) {
                  carX -= Math.cos(carAng) * carSpeed;
          carY -= Math.sin(carAng) * carSpeed;
          // carAng += 0.02; Makes the car spin
           
                carSpeed *= -0.5;
                
              }// end of track found

          }// end of valid col and row

      }// end of carTrackHandling function

      

      function rowColToArrayIndex(col, row) {
        return col + TRACK_COLS * row;

    }

    
    function drawTracks() {
      for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
          for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {

              var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

              if (trackGrid[arrayIndex] == 1) {
                  colorRect(TRACK_W * eachCol, TRACK_H * eachRow,
                      TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP, 'brown');
              } //end of is this track here
          } // end of for each col      
      } //endof for each row
  }//end of drawTracks()
