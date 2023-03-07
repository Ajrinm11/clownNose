NoseX = 0;
NoseY= 0;

function preload()
{
    clown = loadImage("https://i.postimg.cc/C1nDJzYr/Clown.png");
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model loaded! :)");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY= results[0].pose.nose.y;
        console.log("nose x = "+ NoseX);
        console.log("nose y = "+ NoseY);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    fill(255, 36, 36);
    stroke(255, 36, 36);              
    //circle(NoseX, NoseY, 20);
    image(clown, NoseX-145, NoseY-60, 35, 35);
}

function take_snapshot()
{
    save('myFilterImage.png');
}