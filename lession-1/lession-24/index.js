const temperatureBtn = document.getElementById("temp");

const fahrenheit = document.getElementById("fahrenheit");

const celcius = document.getElementById("celcius");

const result = document.getElementById("result");

let temp ;

function convert(){
  
  if(fahrenheit.checked){
      temp = temperatureBtn.value;
      let finalTemp = temp*(1.8)+32;
      result.textContent = `${temp} in Celcius is equals to ${finalTemp} in Fahrenheit`;
  } else if (celcius.checked){
      temp = temperatureBtn.value;
      let finalTemp = temp*(5/9)-32;
      result.textContent = `${temp} in Fahrenheit is equals to ${finalTemp} in Celcius`;

  } else{
    result.textContent = `Please select some convertion type`;

  }

}

