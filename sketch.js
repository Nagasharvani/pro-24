
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var sand;
var stone;
var rubber;
var ground;
var world,engine;



function setup()
 {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	var options_ground={
		isStatic:true
	}
	ground=Bodies.rectangle(width/2,390,1200,20,options_ground);
	World.add(world,ground);

	var options_hammer={
		"friction":1,
		"density" :2,
		"restitution":0.5
	}
	hammer = Bodies.rectangle(300,200,30,70,options_hammer);
	World.add(world,hammer);
	//console.log(stone);

	var options_rubber={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 
		
	}
	
	rubber= Bodies.rectangle(300,200,50,50,options_rubber);
	World.add(world,rubber);

	var options_stone={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 ,	
		"mass":3
	}

	stone=Bodies.rectangle(300,200,50,50,options_stone);
	World.add(world,stone);

	var options_sand={
		"friction":2,
		"density":3 ,
		"restitution":0 ,	
		"mass":1
	}
	
	sand=Bodies.circle(200, 300, 10, options_sand, 30) ;
	World.add(world,sand)

	var options_iron={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 ,	
		"mass":4
	}

	iron=Bodies.rectangle(300,200,50,50,options_iron);
	World.add(world,iron);


}


function draw() 
{
  
  background("green");
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  
  rectMode(CENTER);
  rect(hammer.position.x,hammer.position.y,30,100);
 //=World.mouseY;
 // World.mouseX; 

  ellipseMode(RADIUS);
ellipse(rubber.position.x,rubber.position.y,20,20);

rectMode(CENTER);
  rect(stone.position.x,stone.position.y,30,30);

  ellipseMode(RADIUS);
  ellipse(sand.position.x,sand.position.y,3,3);

  rectMode(CENTER);
  rect(iron.position.x,iron.position.y,25,30);


  
  drawSprites();
 
}



