// let radius = window.prompt(`Enter radius`);

// radius = Number(radius);

// //let Pi = 3.14159;

// // A variable which can't be changed

const PI = 3.14159;

// PI = 252;

// let circum = 2*PI*radius;
// console.log(circum);

document.getElementById("Btn").onclick = function(){
  let radius = document.getElementById("radius").value;
  radius = Number(radius);
  let circum = 2*PI*radius;
  document.getElementById("ans").textContent = `Circumference is ${circum} cm.`;
}