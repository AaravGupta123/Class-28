class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:10
        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        var A=this.chain.bodyA.position
        var B=this.pointB
        push()
        stroke("red")
        strokeWeight(5)
        line(A.x,A.y,B.x,B.y)
        pop()
        }
    }
}
