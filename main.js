noseX=0;
noseY=0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
}
function draw()
{
   image(video,0,0,300,300);
   fill(255,0,0);
   stroke(255,0,0);
   circle(noseX,noseY,20);
}
function take_snapshot()
{
    save('selfie.png');
}
function modelLoaded()
{
    console.log('PoseNet is Insitialized ');
}
function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}