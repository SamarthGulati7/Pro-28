class Mango{
  constructor(x,y,r){
    var options ={
      restitution: 0.3,
      isStatic:true,
      friction:1    
    }  

    this.r=r; 

    this.image=loadImage("mango.png");
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
  }

  display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
}