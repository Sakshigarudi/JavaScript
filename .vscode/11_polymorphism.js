//Polymorphism is the ability to act in more than one form.
//1. compile Time Polymorphism : Method Overloading
//2. Run Time Polymorphism : Method Overriding



//1.Polymorphism with method overloading:-

class student {
    constructor(rollNo, name){
        this.rollNo = rollNo;
        this.name = name;
    }
    marks(maths, physics){
        console.log(`Maths: ${maths}, ${physics}`);
        console.log(arguments);
        console.log(typeof arguments);
        console.log(this);
        if (arguments.length==2) {
            
        }
    }
}

const jenny = new student(11, "Jenny");
console.log(jenny);
jenny.marks(89, 91);