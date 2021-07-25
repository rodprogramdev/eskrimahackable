var carPic = document.createElement("img");
// var carPicLoaded = false;
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");
var gasPic = document.createElement("img");

var picsToLoad = 0; //set automatically based on imageList in loadImages

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
 // console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar,fileName){
    // picsToLoad++;
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "carRaceImages/"+ fileName; //+ ".png"
}


// function carImageLoad() {
// //   carPic.onload = countLoadedImagesAndLaunchIfReady;
// //     // carPicLoaded = true;
// //     carPic.src = "../images/car8.png";
//     beginLoadingImage(carPic, "../images/car8.png");
//     beginLoadingImage(roadPic, "../images/track_road.png");
//     beginLoadingImage(wallPic, "../images/track_wall.png");

// }

// function trackLoadImages() {
//     beginLoadingImage(roadPic, "../images/track_road.png");
//     beginLoadingImage(wallPic, "../images/track_wall.png");

// //     roadPic.onload = countLoadedImagesAndLaunchIfReady;
// //     wallPic.onload = countLoadedImagesAndLaunchIfReady;
// //   roadPic.src = "../images/track_road.png";
// //   wallPic.src = "../images/track_wall.png";
// }

function loadImages() {
    // var dataSet ={varName: carPic, theFile: "player1car.png"}
    // dataSet.varName
    // dataSet.theFile

    var imageList = [
        // examples: 1,2,3
        // false,true,true
        // "stuff","stuff"
        // {varName: carPic, theFile:"../images/car8.png"},
        // {varName: roadPic, theFile:"../images/track_road.png"},
        // {varName: wallPic, theFile:"../images/track_wall.png"}
        // {varName: carPic, theFile:"carRaceImages/blackCar.png"},
        // {varName: roadPic, theFile:"carRaceImages/track_road.png"},
        // {varName: wallPic, theFile:"carRaceImages/track_wall.png"}
        {varName: carPic, theFile:"blackCar.png"},
        {varName: roadPic, theFile:"track_road.png"},
        {varName: wallPic, theFile:"track_wall2.png"},
        {varName: goalPic, theFile:"track_goal.png"},
        {varName: gasPic, theFile:"gasStation.png"},
        {varName: treePic, theFile:"track_trees.png"}

    ];

//     var goalPic = document.createElement("img");
// var treePic = document.createElement("img");

        picsToLoad = imageList.length;
    // imageList[0].theFile
    for(var i=0; i<imageList.length; i++){
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
    // beginLoadingImage(carPic, "../images/car8.png");
    // beginLoadingImage(roadPic, "../images/track_road.png");
    // beginLoadingImage(wallPic, "../images/track_wall.png");

//   carImageLoad();
//   trackLoadImages();
}
