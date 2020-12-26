//Create variables here
var dog,happydog;
var database;
var foodS,foodstock;
var DogImg,HappyDogImg;

function preload()
{
  //load images here
  DogImg = loadImage("dogImg.png");
  HappyDogImg = loadImage("dogImg1.png")  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);
  dog = createSprite(250,250,50,50);
  dog.addImage(DogImg)
  dog.scale = 0.1;
}


function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappyDogImg);
  }

  drawSprites();

  textSize(24);
  fill("black");
  text("NOTE:Press UP ARROW to feed Dog",30,100);
  //add styles here

  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else {
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


