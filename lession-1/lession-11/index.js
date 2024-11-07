//  . checked =  property that determines the checked state of an HTML checkbox or radio button Element


const subscription =  document.getElementById("subscription");

const visa =  document.getElementById("visa");

const mastercard =  document.getElementById("mastercard");

const paypal =  document.getElementById("paypal");

const mySubmit =  document.getElementById("mySubmit");

const subPara =  document.getElementById("subPara");

const cardPara =  document.getElementById("cardPara");

mySubmit.onclick = function(){
  if(subscription.checked){
    subPara.textContent = `You are subscribed`;
  } else {
    subPara.textContent = `You are not subscribed `;
  }
  if(visa.checked){
    cardPara.textContent = `You are Paying with Visa`;
  }
  else if(mastercard.checked){
    cardPara.textContent = `You are Paying with Mastercard`;
  }
  else if(paypal.checked){
    cardPara.textContent = `You are Paying with Paypal`;
  } else{
    cardPara.textContent = `You don't have any Payment mode!`;
  }
}