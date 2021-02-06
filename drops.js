class Drops{
    constructor(x,y,r){
        var options ={
            restitution : 0.001,
            friction : 0.001
        }
        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(world,this.body);
    }

    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,1240),y:random(0,1240)});
        }
    }

    display(){
var position = this.body.position;

        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
       
    }  
}
