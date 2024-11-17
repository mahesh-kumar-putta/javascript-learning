// destructuring := extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// ex:1 swapping two variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

[first, second, third] = [a,b,a+b];
console.log(first);
console.log(second);
console.log(third);

// ex:2 swap two elements in an array

const colors = ["red","green","blue","amber","black"];

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors);

// ex:3 assign array elements to variables

const [firstcolor, secondcolor, thirdcolor] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

const [firstcolorr, secondcolorr, thirdcolorr, ...remaining] = colors;

console.log(firstcolorr);
console.log(secondcolorr);
console.log(thirdcolorr);
console.log(remaining);

//ex:4 extract values from object

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

const{firstName, age, job="unemployed"} = person;
console.log(firstName);
console.log(age);
console.log(job); // default value

//Destructure in function parameter
function displayPerson({firstName, age, place, job="SDE-2"}){

  console.log(`My name is ${firstName} who is ${age} yrs old and from ${place} and working as ${job}`);

}

displayPerson(person);