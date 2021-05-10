class Slingshot
{
  constructor(bA,bB)
  {
    var options =
    {
       bodyA: bA,
       pointB: bB,
       stiffness:0.04,
       length:10
    }
    this.pointB = bB
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
  }
  display()
  {
      strokeWeight(2)
      line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
        this.pointB.x,this.pointB.y)
  }
}