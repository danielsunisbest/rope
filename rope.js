class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		con = Matter.Constraint.create({
			pointA:{x:200,y:20},
			bodyB:ball, 
			pointB:{x:0,y:0}, 
			length:100, 
			stiffness:0.1 
		   });
		   World.add(world,con)
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		strokeWeight(2);
		line (con.pointA.x,con.pointA.y,bob.position.x,bob.position.y)
		
	}

}