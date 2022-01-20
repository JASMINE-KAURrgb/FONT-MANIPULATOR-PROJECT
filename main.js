var nose_x=0;
var nose_y=0;
var difference=0;
var rightwrist_x=0;
var leftwrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
function draw(){
    background("purple");
    document.getElementById("text_size").innerHTML="Size of the text will be = "+difference+"pixels";
    textSize(difference);
    fill('deeppink');
    stroke('black');
    text("Be Kind",nose_x,nose_y);

}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = "+nose_x+"nose y = "+nose_y);
        leftwrist_x=results[0].pose.leftWrist.x;
        rightwrist_x=results[0].pose.rightWrist.x;
        difference=floor(leftwrist_x-rightwrist_x);
        console.log("leftwrist x= "+leftwrist_x+"rightwrist x= "+rightwrist_x+"difference = "+difference);
    }
}