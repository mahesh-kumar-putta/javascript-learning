const age = document.getElementById("age");

const btn = document.getElementById("btn");

const ans = document.getElementById("ans");

btn.onclick =  function(){
  let userAge = age.value;
  userAge = Number(userAge);
  console.log("!!!!!!!!!!")
  console.log(userAge);
  if(userAge>18)
    ans.textContent = `you are allowed to enter`;
  else
    ans.textContent = `You must be 18+ to enter`;
}