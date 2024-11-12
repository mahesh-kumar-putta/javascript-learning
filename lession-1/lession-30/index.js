// Callbacks : A function that is passed as an argument to another function
// used to handle asynchronous operation
//      - Reading a file, Network request, DB interaction
// Its like telling - Hey, once you're done, call me

// step -1, prints hello and bye
//hello();
//bye();


// function hello(){
//   console.log(`Hello`);
// }

// function bye(){
//   console.log(`Bye`);
// }

// step-2, prints bye and then hello

// function hello(){
//   setTimeout(function(){
//     console.log(`Hello`);
//   },3000);
// }

// function bye(){
//   console.log(`Bye`);
// }

// step-3  using callback
hello(bye)
function hello(callback){
  console.log(`Hello`);
  callback();
}

function bye(){
  console.log(`Bye`);
}

sum(displayResult, 6,7);

function sum(callback, x, y){
  let result = x+y;
  callback(result);
}

function displayResult(result){
  console.log(result);
}