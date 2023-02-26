import {currentWeatherObject} from "../main.js";

export const runWarningElement = ()=> {


let warningInfo = document.querySelector(".warning");
warningInfo.innerHTML = "";
warningInfo.style.display = "none";

let warning = document.createElement('div'); 
warning.style.display="none";
let warningHalt = "";
let warningWind =""; 


if (currentWeatherObject.temp > -4 && currentWeatherObject.temp < 4){
warningHalt = "Varning för halt väglag";
warningInfo.style.display = "flex";
warning.style.display="block";
} 

   

if (currentWeatherObject.windspeed > 20 && currentWeatherObject.windspeed < 27){
    warningWind = "Varning för hård vind"; 
    warningInfo.style.display = "flex";
    warning.style.display="block";
} else if (currentWeatherObject.windspeed > 27 && currentWeatherObject.windspeed < 40){ 
    warningWind ="Varning för storm"; 
    warningInfo.style.display = "flex";
    warning.style.display="block";
}


warning.innerHTML= `
<div class="now-now">

</div>
<div class="now-info">
  <div class="now-warning">
    <h2 id="right-now">Just nu:</h2>
    <div class="now-two-holder">
      <div class="now-icon">
        <img
          class="weatherIcon"
          src="content/icons/triangle.svg"
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
</div>
`;
  warningInfo.append(warning);
  console.log(warning);
};
