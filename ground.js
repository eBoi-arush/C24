class Block {
  constructor(x, y, width, height){
		var blockOptions = {
			isStatic: true  
		}
		this.body = Bodies.rectangle(x, y, width, height, blockOptions)
		this.width = width;
		this.height = height;

		World.add(world, this.body);
  }

  show(){
    var cords = this.body.position;

		rectMode(CENTER);
		fill(0);
		rect(cords.x, cords.y, this.width, this.height);
  }
}