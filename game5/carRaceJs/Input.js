var mouseX = 0;
var mouseY = 0;

const KEY_LEFT_ARROW = 65; //keyboard A
const KEY_UP_ARROW = 87; // keyboard W
const KEY_RIGHT_ARROW =68 ;//keyboard D
const KEY_DOWN_ARROW = 83;// keyboard S

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

function setupInput(){
  canvas.addEventListener('mousemove', updateMousePosition);
            
  document.addEventListener('keydown',keyPressed);
  document.addEventListener('keyup',keyReleased);

}

/*****************************FUNCTION TO UPDATE THE MOUSE POSITION**********************************************/


function updateMousePosition(mouseEvent) {
    var rect = canvas.getBoundingClientRect(); 
    var root = document.documentElement; 
    mouseX = mouseEvent.clientX - rect.left - root.scrollLeft; // this will grab the clientX which is what we call t
    mouseY = mouseEvent.clientY - rect.top - root.scrollTop; // we don't need the mouse Y but we might need this value some other time so we put it here. 

   

    //Cheat to test car in any position;
    // carX = mouseX;
    // carY = mouseY;
    // carSpeedX = 4;
    // carSpeedY = -4;

}


/******************************FUNCTION DECLARATION WHEN THE WINDOWS LOAD******************************************/

function keyPressed(evt){
    //console.log("Key pressed:"+evt.keyCode);
    if(evt.keyCode == KEY_LEFT_ARROW){
        // carAng -= 0.5;
        keyHeld_TurnLeft = true;

    }
    if(evt.keyCode == KEY_RIGHT_ARROW){
        
        // carAng += 0.5;
        keyHeld_TurnRight = true;
    }

    if(evt.keyCode ==KEY_UP_ARROW){
        console.log("Key pressed:"+ evt.keyCode);
        // carSpeed += 0.5;
        keyHeld_Gas = true;
    }
    if(evt.keyCode == KEY_DOWN_ARROW){
        // carAng -= 0.5;
         keyHeld_Reverse = true;
    }
}

function keyReleased(evt){
    // console.log("Key release:"+evt.keyCode);
    if(evt.keyCode == KEY_LEFT_ARROW){
        // carAng -= 0.5;
        keyHeld_TurnLeft = false;

    }
    if(evt.keyCode == KEY_RIGHT_ARROW){
        // carAng += 0.5;
        keyHeld_TurnRight = false;
    }

    if(evt.keyCode ==KEY_UP_ARROW){
        // carSpeed += 0.5;
        keyHeld_Gas = false;
    }
    if(evt.keyCode == KEY_DOWN_ARROW){
        // carAng -= 0.5;
         keyHeld_Reverse = false;
    }
}

// const KEY_LEFT_ARROW = 65; //keyboard A
// const KEY_UP_ARROW = 87; // keyboard W
// const KEY_RIGHT_ARROW =68 ;//keyboard D
// const KEY_DOWN_ARROW = 83;// keyboard S

// var keyHeld_Gas = false;
// var keyHeld_reverse = false;
// var keyHeld_TurnLeft = false;
// var keyHeld_TurnRight = false;