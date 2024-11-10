//spread operator : ... allows an iterable such as array or string to be expanded into separate elements (unpack the elements)

let nums = [1,2,3,4,5,6];

console.log(nums);

let max = Math.max(nums);
console.log(max);

let maxi = Math.max(...nums);
console.log(maxi);

let name="mahesh";

let letters = [...name].join("-");

console.log(letters);

let fruits = ["apple","mango","banana"];
console.log(fruits);

// To create a shallow copy
let newFruits = [...fruits];
console.log(newFruits);

let veg = ["carrot","beans","avacado"];

// Combine two arrays
let food = [...fruits, ...veg];

console.log(food);

// Combine two arrays and add new elements
let newFood = [...fruits, ...veg, "milk", "eggs"];

console.log(newFood);