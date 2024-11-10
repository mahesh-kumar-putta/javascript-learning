let fruits = ["apple", "orange", "banana"];


//Add element at the end
fruits.push("Kiwi");

//Remove element at the end
fruits.pop();

//Adds element at the beginning
fruits.unshift("Mango");

//Removes element from beginning
fruits.shift();

console.log(fruits.length);

console.log(fruits);

for(let fruit of fruits){
  console.log(fruit);
}