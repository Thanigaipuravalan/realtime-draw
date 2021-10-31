function preload() {
}

function setup() {
    canvas=createCanvas(600, 500);
    video=createCapture(VIDEO)
    video.size(550,500);
    canvas.position(700,100);
    posenet=ml5.poseNet(video.modelLoaded);
    posenet.on("pose",gotposes)
}

function draw() {
    background("#ff4500");
}

function modelLoaded() {
    console.log(modelLoaded)
}

function gotposes(result) {
    console.log(results)
}