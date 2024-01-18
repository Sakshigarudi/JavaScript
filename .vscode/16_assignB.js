//console.log(`<---------------------------------- Step 1 ---------------------------------->`);
class employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id =emp_id;
        this.emp_name =emp_name;
        this.emp_dept =emp_dept;
        this.emp_salary =emp_salary;
        this.emp_company =emp_company;
    } 
        // Member Functions or methods
    getDetails(){
       console.log(`Id: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);

    }
}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infosys");
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

//for (const element of arrayEmployees) {
// element.getDetails();
//}

console.log(`<---------------------------------- Step 1 ---------------------------------->`);
for (const element of arrayEmployees) {
    if (element.emp_company=='TCS') {
        console.log( `The employee name : ${element.emp_name} and Company Name : ${element.emp_company}`);
    } 
 }

 console.log(`<---------------------------------- Step 2 ---------------------------------->`);
 for (const element of arrayEmployees) {
    if (element.emp_dept=='Finance') {
        console.log( `The employee name : ${element.emp_name} and Company Name : ${element.emp_dept}`);
    } 
 }

 console.log(`<---------------------------------- Step 3 ---------------------------------->`);
 for (const element of arrayEmployees) {
    if (element.emp_name.startsWith(`R`)) {
        element.getDetails();
    } 
 }

 console.log(`<---------------------------------- Step 4 ---------------------------------->`);
 for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
        console.log( `The employee name : ${element.emp_name}, Company Name : ${element.emp_company} and salary : ${element.emp_salary}`);
    }
}

console.log(`<---------------------------------- Step 5 ---------------------------------->`);
for (const element of arrayEmployees) {
   if (element.emp_salary>50000 && element.emp_dept>=`IT`) {
       element.getDetails();
   }
}

console.log(`<---------------------------------- Step 6 ---------------------------------->`);
for (const element of arrayEmployees) {
   if (element.emp_company==`Infosys`) {
       element.getDetails();
   }
}