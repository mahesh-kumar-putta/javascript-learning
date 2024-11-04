
//let name = window.prompt(`Enter your name`);

//console.log(`entered username is ${name}`);

let username ;

document.getElementById("mybtn").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(`entered username is ****** ${username}`);
  document.getElementById("myH1").textContent = `Hello ${username}`;
}