class Tree{
    constructor(x, y) {
      var options = {
          'friction':3,
          'density':15,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, 600,600, options);
      this.width = 600;
      this.height = 600;
      
      this.image=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };