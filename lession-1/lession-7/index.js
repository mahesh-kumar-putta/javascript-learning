
let counter = 0;
document.getElementById("increase").onclick = function(){
  counter++;
  document.getElementById("counter").textContent = counter;
}

document.getElementById("reset").onclick = function(){
  counter = 0;
  document.getElementById("counter").textContent = counter;
}

document.getElementById("decrease").onclick = function(){
  counter--;
  document.getElementById("counter").textContent = counter;
}