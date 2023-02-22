import {currentWeatherObject} from "../main.js";

export const runWarningElement = ()=> {


let warningInfo = document.querySelector(".warning");

let warning = document.createElement('div'); 
warning.style.display="none";
let warningHalt = "";
let warningWind =""; 


if (currentWeatherObject.temp > -4 && currentWeatherObject.temp < 4){
warningHalt = "halt väglag";
warning.style.display="block";
} 

   

if (currentWeatherObject.windspeed > 20 && currentWeatherObject.windspeed < 27){
    warningWind = "hård vind"; 
    warning.style.display="block";
} else if (currentWeatherObject.windspeed > 27 && currentWeatherObject.windspeed < 40){ 
    warningWind ="storm "; 
    warning.style.display="block";
}


warning.innerHTML= `
<div class="now-now">

</div>
<div class="now-info">
<div class="now-warning">
<h2 id="right-now">varning:</h2>
  <div class="now-icon">
    <img
      class="weatherIcon"
      src="content/icons/"
      alt=""
      id="varning-icon"
    />
  </div>
  <div class="now-message">
    <p id="message">${warningHalt}</p>
    <p id="message">${warningWind}</p>

  </div>
</div>
</div>
`;
warningInfo.append(warning); 
console.log(warning)
}; 