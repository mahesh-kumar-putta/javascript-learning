// .reduce() = reduce the elements of an array into a single value

const prices = [1,2,3,4,5,5,6,7];

const total = prices.reduce(sum);

console.log(total);

const max = prices.reduce(maxi);

console.log(max);

const min = prices.reduce(mini);

console.log(min);

function sum(privious, next){

  return privious+next;
} 

function maxi(previous, next){
  return Math.max(previous, next);
}

function mini(previous, next){
  return Math.min(previous, next);
}