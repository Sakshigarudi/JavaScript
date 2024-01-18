class student {
  //Data member or properties
  id;
  name;
  city;
  marks;
  //Constructor
  constructor(id, name, city, marks) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.marks = marks;
  }
  // Member functions or methods
  getDetails() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`
    );
  }
}
const info = new student(11, "Sakshi", "Pune", 80);
console.table(info);
info.getDetails();

const omkar = new student(12, "Omkar", "Pune", 80);
console.table(omkar);
omkar.getDetails();

const anu = new student(10, "Anushka", "Jintur", 90);
const anku = new student(10, "Ankita", "Pune", 70);

console.log(`---- Traversing array of object ----`);
const arrayStudents = [info, omkar, anu, anku];
for (const element of arrayStudents) {
  console.log(element);
  element.getDetails();
}

console.log(`WAP to log the details of students having marks greater than equal 80`); 
for (const student of arrayStudents) {
    if (student.marks>=80) {
        student.getDetails();
    }
}

class user{

}

////Instance of operator 
console.log(omkar instanceof student);
console.log(anu instanceof user);