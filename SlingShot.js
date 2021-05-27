class SlingShot
{
constructor(bodya,point)
{
    var options=
    {
    bodyA : bodya,
    pointB : point,
    length:10,
    stiffness:0.04
    }
    this.sling1=loadImage("sling1.png")
    this.sling2=loadImage("sling2.png")
    this.sling3=loadImage("sling3.png")
    this.sling=Constraint.create(options);
    this.pointB=point;
    World.add(world,this.sling);
}
display()
{
    image(this.sling1,200,20);
    image(this.sling2,170,20);

    if(this.sling.bodyA)
    {
        var pos1=this.sling.bodyA.position;
        var pos2=this.pointB;
        push();
        stroke(48,22,8);
        if(pos1.x<200)
        {
            strokeWeight(2);
            line(pos1.x-20,pos1.y,pos2.x-10,pos2.y);
            line(pos1.x-20,pos1.y,pos2.x+30,pos2.y-3);
            image(this.sling3,pos1.x-30,pos1.y-10,15,30);
        }
     else
       {
             strokeWeight(4);
            line(pos1.x+20,pos1.y,pos2.x-10,pos2.y);
            line(pos1.x+20,pos1.y,pos2.x+30,pos2.y-3);
             image(this.sling3,pos1.x+20,pos1.y-10,15,30);
}
    
        pop();
    }
   
}
attach(body)
{
  this.sling.bodyA=body;
}
fly()
{
   this.sling.bodyA=null;
 }

}
