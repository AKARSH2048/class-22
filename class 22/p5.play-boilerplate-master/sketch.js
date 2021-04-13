const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground, ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var ground_option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_option);
  World.add(world,ground)
  var ball_option = {
    restitution:1.5
  }
  ball = Bodies.circle(100,100,20,ball_option)
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  fill("red");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  fill("green");
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
}