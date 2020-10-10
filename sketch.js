var mr,fr;






function setup() {
  createCanvas(1200,600);
mr=createSprite(100,500,50,50);
mr.shapeColor="green"
fr=createSprite(100,100,50,50);
fr.shapeColor="green"
//fr.velocityY=2;
//mr.velocityY=-2;  
}

function draw() {
  background(0,0,0);  
 mr.x=World.mouseX;
 mr.y=World.mouseY;
  
if(mr.x-fr.x<mr.width/2+fr.width/2
  &&fr.x-mr.x<fr.width/2+fr.width/2
  &&fr.y-mr.y<mr.height/2+fr.height/2
  &&mr.y-fr.y<fr.height/2+mr.height/2){
fr.shapeColor="red"
mr.shapeColor="red"
//mr.velocityY=-1*mr.velocityY;
//fr.velocityY=-1*fr.velocityY;


}
else{
  fr.shapeColor="green"
mr.shapeColor="green"
}

console.log(mr.x-fr.x);




  drawSprites();
}