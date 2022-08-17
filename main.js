left_wrist_x= 0;
left_wrist_y= 0;

right_wrist_x= 0;
right_wrist_y= 0;

score_left_wrist=0;
score_right_wrist=0;
function setup()
{
    canvas= createCanvas(600, 500);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

song = "";
song2 = "";

function preload()
{
  song=loadSound("Ruth-B-Dandelions-vmlboxcom.mp3");
  song2=loadSound("Positions---Ariana-Grande(musicdownload.cc) (1)")
}
function play()
{
  song.play();
  song.sound(1);
  song.rate(1);
  song2.play();
  song2.sound(1);
  song2.rate(1);
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    if(score_left_wrist>0.2)
    {
        song2.play();
        song2.sound(1);
        song2.rate(1);
        
    }
    
    if(score_right_wrist>0.2)
    {
        song.play();
        song.sound(1);
        song.rate(1);
        
    }
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("LeftWrist_x = " +left_wrist_x+ " LeftWrist_y = "+left_wrist_y);

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("RightWrist_x = " +right_wrist_x+ " RightWrist_y = "+right_wrist_y);

        score_left_wrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+score_left_wrist);
    }


}