// this : reference to the object where THIS is used (the object depends on the immediate context)

// person.name is same as this.name;

const person = {
  firstName : "Mahesh",
  lastName : "Kumar",
  age : 26,
  place : "India",
  isEmployed : true,
  sayHello: function (){
    console.log(`Hi I am ${this.firstName} and I'm ${this.age} years old`);
  },
}

person.sayHello();