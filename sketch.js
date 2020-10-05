const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var explorer;
var edges;

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  explorer = new Explorer(75, 100, 50, 50);
  lava = new Lava(800, 775, 1600, 50);
  platform1 = new Platform(100, 200, 75, 10);
  platform2 = new Platform(300, 175, 75, 10);
  platform3 = new Platform(325, 700, 75, 10);
  platform4 = new Platform(400, 400, 75, 10);
  platform5 = new Platform(500, 500, 75, 10);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  explorer.display();
  lava.display();
  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();
  platform5.display();
}