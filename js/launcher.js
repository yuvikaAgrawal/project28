class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launchers = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.launchers);
    }
    attach(body){
        this.launchers.bodyA=body
    }
    fly(){
       this.launchers.bodyA=null
    }
    display(){
        if(this.launchers.bodyA){
            var pointA = this.launchers.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
