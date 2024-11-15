// .filter() = creates a new array by filtering out elements

let nums = [1,2,3,4,5,6,7,8,9];

function isEven(element){
  return element%2===0;
}


let evevNums = nums.filter(isEven);
console.log(evevNums);
