noseX = 0;
noseY = 0;
difference = 0;

function preload(){


}
function setup(){

    webcam = createCapture(VIDEO);
    webcam.size(300,300);
    canvas = createCanvas(400,400);
    canvas.position(560,150);
    posenet = ml5.poseNet(webcam, modelLoaded);
    posenet.on('pose', gotPoses);

}
function draw(){

    background('#7e8580');
    text("font", noseX, noseY);
    textSize(difference);   
    fill("#00ff00");

}

function modelLoaded(){

    console.log("Posenet is not initialised--error");

}

function gotPoses(results, length){

    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x is - " + noseX);
        console.log("nose y is - " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left wrist x is --" + leftWristX);
        console.log("right wrist x is --" + rightWristX);

        difference = floor(leftWristX - rightWristX);
        console.log(difference);


    }

}