//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  dogImage=loadImage("dogImg.png");
  bgImage = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(200,200,50,50);
  //dog.addImage("",dogImage);
  database=firebase.database;
  //foodStock=database.ref('food');
 //foodStock.on("value",readStock);
}


function draw() {  
 // background(46, 139, 87)
  drawSprites();
  //add styles here

}



