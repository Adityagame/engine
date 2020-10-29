const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine , world;
var object,ground,ball;
function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
object=Bodies.rectangle(200,300,100,50);
World.add(world,object);
var groundpro={
  isStatic:true 
}
ground=Bodies.rectangle(400,350,800,30,groundpro);
World.add(world,ground);
var ballpro={
  restitution:0.8
}
ball=Bodies.circle(100,200,20,ballpro);
World.add(world,ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER)
rect(object.position.x,object.position.y,100,50);
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,30);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20);
}