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

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

//for (const element of arrayEmployees) {
// element.getDetails();
//}

console.log(
  `<<---------------------------------- Step 1 ---------------------------------->>`
);

const employeeFromTcs = arrayEmployees.filter((element) => {
  return element.emp_company == `TCS`;
});

employeeFromTcs.forEach((element) => {
  console.log(
    `Employee Name : ${element.emp_name}, and Company name : ${element.emp_company}`
  );
});

console.log(
  `<<---------------------------------- Step 2 ---------------------------------->>`
);

const avgSalaryEmp = arrayEmployees.filter((element) => {
    return element.emp_company == "Wipro";
  });
  let countOfEmp = avgSalaryEmp.length;
  
  let count = 0;
  avgSalaryEmp.forEach((element) => {
    count = element.emp_salary + count;
  });
  
  let avgSalary = count / countOfEmp;
  console.log(`Average salary of employee from company wipro: ${avgSalary}`);

  console.log(
    `<<---------------------------------- Step 3 ---------------------------------->>`
  );

  const avgSalaryOfEmployee = arrayEmployees.filter((element) => {
    return element.emp_company == "Wipro"|| element.emp_company =="Infosys";
  });
  let countOfEmployee = avgSalaryOfEmployee.length;
  
  let empCount = 0;
  avgSalaryOfEmployee.forEach((element) => {
    empCount = element.emp_salary + empCount;
  });
  
  let avgSalaryOfEmp = empCount / countOfEmployee;
  console.log(`Average salary of employee from company wipro and Infosys : ${avgSalaryOfEmp}`);

  


