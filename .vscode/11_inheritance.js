class MotherCat {
    constructor(eyeColor, totalLegs){
        this.eyeColor = eyeColor;
        this.totalLegs = totalLegs;
    }
    meowing(){
        console.log(`Cat is meowing`);
        console.log(`Eye color: ${this.eyeColor} and Total legs is: ${this.totalLegs}`);
    }
}

class BabyCat extends MotherCat {
    constructor(bodyColor, name, colorOfEye, legs){
        super(colorOfEye, legs);
        this.bodyColor = bodyColor;
        this.name = name;
    }
    meowing(){   //Method overriding which is Rumtime Polymorphism.
        console.log(`baby Cat is meowing and asking for milk`);
        console.log(`Eye color: ${this.eyeColor} and Total legs is: ${this.totalLegs}`);
        console.log(`Baby color: ${this.bodyColor} and Total legs is: ${this.name}`);
    }
}
const kitty = new BabyCat("Brown", "kitty", 'Grey', 4);
console.log(kitty);
kitty.meowing();