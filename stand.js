class Stand{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.ground=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.ground);
    }
    display(){

        fill("brown")
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }

}