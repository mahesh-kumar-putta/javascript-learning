// .map() = accepts a callback and applies that function to each element of an array, then return a new array

// map method returns something whereas forEach won't

const nums = [1,2,3,4,5];
let ans = nums.map(square);
ans.forEach(display);
ans.map(display);


console.log(nums);

function square(element, index, array){
  return Math.pow(element, 2);
}

function display(element){
  console.log(element);
}