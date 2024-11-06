
let randomNum = Math.random();

console.log(randomNum);

// random num between 0 and 5

randomNum = Math.floor(Math.random()*6);
console.log(randomNum);

// random num between 1 and 6

randomNum = Math.floor(Math.random()*6)+1;
console.log(randomNum);

const min = 50;

const max = 100;

randomNum = Math.floor(Math.random() * (max-min))+min;

console.log(randomNum);
