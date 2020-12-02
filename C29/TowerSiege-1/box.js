class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.2,
          'density':0.5,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      this.width = 40;
      this.height = 50;
      //this.ran=Math.round(random(200,255));
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("lightgreen");
      
      //fill(0,0,this.ran);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  