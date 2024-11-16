// Object - A collection of related properties and/or methods. can represent real world objects (people, products, places)

 

const person = {
  firstName : "Mahesh",
  lastName : "Kumar",
  age : 26,
  place : "India",
  isEmployed : true,
  sayHello: function (){
    console.log(`Hi I am ${person.firstName}`);
  },
}

const person2 = {
  firstName : "Nahesh",
  lastName : "Lumar",
  age : 36,
  place : "Switzerland",
  isEmployed : true,
  sayHello: () => console.log(`Hello I am ${person2.firstName}`),
}

person.sayHello();
console.log(person.age);

person2.sayHello();
console.log(`Person 2 name is ${person2.firstName}`);