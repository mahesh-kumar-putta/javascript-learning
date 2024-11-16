// constructor : special method for defineing the properties and methods of a objects

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function (){
    console.log(`You're driving ${this.make} car`);
  };
}

const ford = new Car("Ford","Figo","2022","Black");
const bmw = new Car("BMW","BMW Model","2012","White");
const audi = new Car("Audi","Q5","2024","Red");

console.log(ford.make);
console.log(bmw.model);
console.log(audi.color);

ford.drive();
bmw.drive();
audi.drive();