song_1 ="";
song_2 =""; 

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song_2 = loadSound("music.mp3");
    song_1 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses );
}
function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist = "+leftWristX+"left wrist y"+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist x:-"+ rightWristX+"rightWrist y:-"+ rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}
function play() {
    song_1.play();
    song_1.setVolume();
    song_1.rate();
}