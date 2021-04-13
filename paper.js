class Paper {
  constructor(x, y, radius){
    var paperOptions = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    }
    this.body = Bodies.circle(x, y, radius, [paperOptions]);
    this.radius = radius;

    World.add(world,this.body);
  }

  show(){
    var cords = this.body.position;

    ellipseMode(RADIUS);
    fill(255);
    circle(cords.x, cords.y, this.radius);
  }
}