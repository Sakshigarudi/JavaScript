function Student(id, name, marks) {
  this.id = id;
  this.name = name;
  this.marks = marks;
  this.display = function () {
    console.log(`ID: ${this.id}, Name: ${this.name}, Marks:${this.marks}`);
  };
}
const sakshi = new Student(11, "Sakshi", 90);
console.table(sakshi);

const info = new Student(12, "Omkar", 80);
console.log(info);
console.table(info);
info.display();
sakshi.display();

const elon = new Student(33, "Elon", 60);

Student.prototype.country = "India";
console.log(elon.name);
console.log(elon.country);
console.log(info.country);
console.log(sakshi.country);
