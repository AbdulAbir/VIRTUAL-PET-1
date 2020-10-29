//Create variables here
var dog;
var foodS;
var dogImg;
var dogImg1;
var foodStock;

function preload()
{
dogImg = loadImage("dogImg.png");
dogImg1 = loadImage("dogImg1.png")
}

function setup()
{
    database=firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,300,10,10);
    dog.addImage(dogImg);
    
    dog.scale = 0.15;

    foodStock=database.ref('Food');
    foodStock.on("value",readStock);
    



    
}

function draw()
{
    background(46, 139, 87);
    if(keyWentDown(UP_ARROW))
    {
        writeStock(foodS)
        dog .addImage(dogImg1);
    }
    drawSprites();

    fill("white");
    textSize(20);
    text("Note : Press UP_ARROW Key To Feed Drago Milk!", 0,20);
    text("Remaining Food :" +foodStock ,180,200)

}

function readStock(data) { 
    foodS=data.val();
    foodStock=data.val();    
}

function writeStock(x)
{
  if (x<=0) 
  {
      x = 0;
  }else
  {
      x = x-1;
  }
  database.ref('/').update
   ({
       Food : x 
   })
}



