const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var circle;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,500,20);
   // platform = new Ground(150, 305, 300, 170);

   circle = Bodies.circle(200,200,10);
   World.add(world, circle);

   box9 = new Pig(640,130);

    box1 = new Pig(610,200);
    box2 = new Pig(700,240);
    //pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    box3 = new Pig(650,240);
    box4 = new Pig(600,240);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Pig(680,200);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    //bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.circle,{x:200, y:200});
}

function draw(){
    background(24,128,150);
    Engine.update(engine);
    //strokeWeight(4);

ellipseMode(RADIUS);
ellipse(circle.position.x, circle.position.y, 20,20);

    box1.display();
    box2.display();
    ground.display();
   // pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
   // log3.display();

    box5.display();
    box9.display();
   // log4.display();
   // log5.display();

    //bird.display();
   // platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.circle, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.circle);
    }
}