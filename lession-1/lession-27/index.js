// rest operator : (...rest) allow a function work with a variable number of args by handling them into an Array

// Spread : Expands an array into separate Element
// Rest : Bundles separate elements into one element

let food1 = "abc";
let food2 = "xsd";
let food3 = "uyg";
let food4 = "iuh";
let food5 = "oiuh";

showFood(food1, food2, food3, food4, food5);

function showFood(...food){
  console.log(food);
  console.log(...food);
}
