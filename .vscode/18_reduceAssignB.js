class employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
  // Member Functions or methods
  getDetails() {
    console.log(
      `Id: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`
    );
  }
}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infosys");

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

//for (const element of arrayEmps) {
// element.getDetails();
//}

console.log(
  `<< ------------------------------ STEP 01 ------------------------------ >>`
);
const empFromWipro = arrayEmps.forEach((element) => {
  if (element.emp_company == "Wipro") {
    element.getDetails();
  }
});

console.log(
  `<< ------------------------------ STEP 02 ------------------------------ >>`
);
const empFromItHr = arrayEmps.forEach((element) => {
  if (element.emp_dept == "IT" || element.emp_dept == "HR") {
    element.getDetails();
  }
});

console.log(
  `<< ------------------------------ STEP 03 ------------------------------ >>`
);
const empId = arrayEmps.forEach((element) => {
  if (element.emp_id > 50) {
    element.getDetails();
  }
});

console.log(
  `<< ------------------------------ STEP 04 ------------------------------ >>`
);
const EmpName = arrayEmps.forEach((element) => {
  if (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  ) {
    element.getDetails();
  }
});

console.log(
  `<< ------------------------------ STEP 05 ------------------------------ >>`
);
//runningTotal =0;
const averageSal = arrayEmps.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
},0);
console.log(`Average salary of all Employee => ${averageSal / arrayEmps.length}`);


console.log(
    `<< ------------------------------ STEP 06 ------------------------------ >>`
  );
  const averageSalOfDept = arrayEmps.filter((element)=>{
    return element.emp_dept =="IT";
  })
  const averageSalOfItDept = averageSalOfDept.reduce((totalRunning, element)=>{
    return totalRunning + element.emp_salary;
  }, 0);
  console.log(`Average salary of Employee from It Department => ${averageSalOfItDept/averageSalOfDept.length}`);

