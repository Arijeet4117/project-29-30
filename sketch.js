const World = Matter.World
const Engine = Matter.Engine
const Body = Matter.Body
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var myEngine,myWorld,g1,g2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b13,b14,b15,b16,a1,a2,a3,a4,a5,a6,a7,a8,a9,s1

function preload(){

    polyImage=loadImage("polygon.png")

}

function setup(){
    createCanvas(900,400);

    myEngine=Engine.create();
    myWorld=myEngine.world;

    g1=new Stand(390,300,250,10);
    g2=new Stand(700,200,200,10);

    b1=new Block(300,275);
    b2=new Block(330,275);
    b3=new Block(360,275);
    b4=new Block(390,275);
    b5=new Block(420,275);
    b6=new Block(450,275);
    b7=new Block(480,275);

    b8=new Block(450,235);
    b9=new Block(330,235);
    b10=new Block(360,235);
    b11=new Block(390,235);
    b12=new Block(420,235);

    b13=new Block(360,195);
    b14=new Block(390,195);
    b15=new Block(420,195);

    b16=new Block(390,155);

    a1=new Block(640,175);
    a2=new Block(670,175);
    a3=new Block(700,175);
    a4=new Block(730,175);
    a5=new Block(760,175);

    a6=new Block(670,135);
    a7=new Block(700,135);
    a8=new Block(730,135);
    
    a9=new Block(700,95);


    polygon=Bodies.circle(50,200,20);
    World.add(myWorld,polygon);

    s1=new Slingshot(polygon,{x:50,y:200})

}

function draw(){
    background("lavender")

    Engine.update(myEngine);


    g1.display();
    g2.display();

    imageMode(CENTER)
    image(polyImage,polygon.position.x,polygon.position.y,40,40);

    s1.display();

    fill("blue")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
   
    


    fill("purple")
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    a6.display();
    a7.display();
    a8.display();

    fill("pink")
    b13.display();
    b14.display();
    b15.display();
    a9.display();

    fill("red")
    b16.display();

    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})


}

function mouseReleased(){

    s1.fly();



}
