// function declaration : a resuable block of code that performs a specified task
// function expression : a way to define a function as value or variable

function hello(){
  console.log(`Hello world!`);
}

const helloworld = function(){
  console.log(`Hello world from expression`);
}

hello();
helloworld();

setTimeout(helloworld, 3000);

const nums = [1,2,3,4,5,6];

const squarefun = function(element){
  return element*element;
}

const square = nums.map(squarefun);
console.log(square);

const odd = nums.filter(function(element){
  return element%2!=0;
})
console.log(odd);

