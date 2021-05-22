class Block{
    constructor(x,y){
        
        this.visibility=255;
        this.body=Bodies.rectangle(x,y,30,40);
        this.width=30;
        this.height=40;
        World.add(myWorld,this.body);
    }
    display(){

        if(this.body.speed>3){
            World.remove(myWorld,this.body)
            push()
            this.visibility=this.visibility-5;
            pop()
        }
        else{
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
        
        
       
    }

}