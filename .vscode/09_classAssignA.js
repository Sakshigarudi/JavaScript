
console.log(`================ Step 1 ================>>>`);
class vehicle {
  company;
  model;
  color;
  year;
  vhehicleNo;

  constructor(company, model, color, year, vhehicleNo) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.year = year;
    this.vhehicleNo = vhehicleNo;
  }
  getDetails() {
    console.log(`Company => ${this.company}, Model => ${this.model}, Color => ${this.color}, Year => ${this.year}, Vehicle No. => ${this.vhehicleNo}`);

  }
}
 const firstVehicle = new vehicle ("TATA", "Nexon", "Black", 2017, "MH22SW2387");
 console.log(firstVehicle);

 const secondVehicle = new vehicle("TATA", "Harrier", "White", 2018, "MH22WE3823");
 console.log(secondVehicle);

 const thirdVehicle = new vehicle ("Mahindra", "Thar", "Black", 2010, "UK04AG4432");
 console.log(thirdVehicle);

 const fourthVehicle = new vehicle("TATA", "Altroz", "Blue", 2020, "UP80FQ0707");
 console.log(fourthVehicle);

 const fifthVehicle = new vehicle("Mahindra", "Scorpio", "Grey", 2002, "UP80FQ0707");
 console.log(fifthVehicle);

 console.log(`================ Step 2 ================>>>`);
 
