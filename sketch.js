var track ,trackimg;
function preload(){
  //pre-load images
  trackimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackimg);

}

function draw() {
  background("yellow");
  drawSprites;
 
}
