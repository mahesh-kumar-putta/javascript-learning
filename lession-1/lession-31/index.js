// forEach() - method used to iterate over the elements of an array and apply a specified function (call back) to each element
// array.forEach(callback)

let nums = [1,2,3,5,5,6];

function display(element){
  console.log(element);
}

function double(element, index, array){
  array[index] = element*2;
}

//nums.forEach(display);

nums.forEach(double);
//console.log(doubled);
nums.forEach(display);

let fruits = ["apple","orange","banana"];

function upper(element, index, array){
  array[index] = element.toUpperCase();
}
fruits.forEach(upper);
fruits.forEach(display);