const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(400,400);

  box1 = new Box(205,300,75,250);
  box2 = new Box(55,300,25,205);
  box3 = new Box(345,300,25,205);
  box4 = new Box(285,300,75,175);
  box5 = new Box(120,300,75,175)
  ground = new Ground(200,390,400,20);
}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  triangle(280, 135, 200, 20, 106, 135);
}
