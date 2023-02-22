import {currentWeatherObject} from "../main.js";

export const runWarningElement = ()=> {


let warningInfo = document.querySelector(".warning");

let warning = document.createElement('div');
let warningHalt = "";
let warningWind =""; 


if (currentWeatherObject.temp > 0 && currentWeatherObject.temp < 5){
warningHalt = "halt väglag";
}

   

if (currentWeatherObject.windspeed > 20 && currentWeatherObject.windspeed < 27){
    warningWind = "hård vind"; 
} else if (currentWeatherObject.windspeed > 27 && currentWeatherObject.windspeed < 40){ 
    warningWind ="storm "; 
}


warning.innerHTML = `
<div class="now-now">
<h2 id="right-now">Warning:</h2>
</div>
<div class="now-info">
<div class="now-warning">
  <div class="now-icon">
    <img
      class="weatherIcon"
      src="content/icons/tornado.svg"
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