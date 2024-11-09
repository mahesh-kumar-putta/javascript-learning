
const min =1;
const max=100;

const ans = Math.floor(Math.random()*(max-min+1))+min;

console.log(ans);

let entNumb = window.prompt(`Enter your number`);
entNumb = Number (entNumb);
let isAMatch = false;

while(!isAMatch){
  if(ans<entNumb){
    entNumb = window.prompt(`Entered number is higher, Enter a lower number`);
    entNumb = Number (entNumb);
  } else if(ans > entNumb){
    entNumb = window.prompt(`Entered number is lower, Enter a higher number`);
    entNumb = Number (entNumb);
  } else {
    window.alert(`Yeyy!, It's a match`);
    entNumb = Number (entNumb);
    isAMatch = true;
  }  
}
console.log(`Out of loop and matched number is ${entNumb}`);
