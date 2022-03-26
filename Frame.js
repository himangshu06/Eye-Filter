noseX = 0;
noseY = 0;
function preload(){
 eyes = loadImage('eyes.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNET = ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intilized");
}

function draw(){
image(video,0,0,300,300);
image(eyes,noseX,noseY-55,75,75);
}

function gotPoses(results){
     if(results.length > 0){
          console.log(results);
          noseX = results[0].pose.nose.x-30;
          noseY = results[0].pose.nose.y+10;
          console.log("noseX = "+noseX);
            console.log("noseY = "+noseY);
        }
         }

function takesnapshot(){
    save("Filter.png");
}



    

