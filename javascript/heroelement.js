import { weatherIcons } from "./hourlyElement.js";
import {currentWeatherObject} from "../main.js";


export const runHeroElement = () => {
   const {
     cloudBolt,
     cloudRain,
     cloudShowersHeavy,
     cloudSunRain,
     cloudSun,
     cloud,
     snowflake,
     sun,
     tornado,
   } = weatherIcons;


    let heroinfo = document.querySelector(".hero-info");
    let weathericon = "";

   // Loopar igenom dataArray och skapar knappar 

   let hero = document.createElement('div');
   //hero.value = currentWeatherObject[i].name;
       
       if (currentWeatherObject.weathercode == 0) {
         weathericon = sun;
       } else if (currentWeatherObject.weathercode > 0 && currentWeatherObject.weathercode < 3) {
         weathericon = cloudSun;
       } else if (currentWeatherObject.weathercode == 3) {
         weathericon = cloud;
       } else if (currentWeatherObject.weathercode > 3 && currentWeatherObject.weathercode < 68) {
         weathericon = cloudRain;
       } else if (currentWeatherObject.weathercode > 79 && currentWeatherObject.weathercode < 83) {
         weathericon = cloudShowersHeavy;
       } else if (
         (currentWeatherObject.weathercode > 70 && currentWeatherObject.weathercode < 78) ||
         (currentWeatherObject.weathercode > 84 && currentWeatherObject.weathercode < 87)
       ) {
         weathericon = snowflake;
       } else if (currentHour.weathercode > 94) {
         weathericon = cloudBolt;
       }

     // Ger div inehåll från dataArray
     hero.innerHTML = `
     <div class="hero-location">
     <h1 id="location">${currentWeatherObject.location}</h1>
       <div class="hero-date">
        <span> 
        <p id="hero-day">${currentWeatherObject.name}</p>
         <p id="day-date">${parseInt(currentWeatherObject.date.day)}/${parseInt(currentWeatherObject.date.month)}</p>
      </span> 
        </div>
        </div>
         <div class="hero-current">
            <div class="hero-icon">
              <p id="hero-icon" class="wheatericon">${weathericon}</p>
               <div class="hero-temp">
                  <p id="hero-temp">${Math.round(currentWeatherObject.temp)}&deg</p> 
                  <div class="hero-feels">
                   <p> känns som <p>
                    <p id="feels">${Math.round(currentWeatherObject.apparentTemp)}&deg</p>
                  </div>
                 </div>
                </div>
             </div>
     `;

   heroinfo.append(hero); 
console.log(hero)

//hero.addEventListener("click", (event) => {
//runHourlyElement(event.target.value)
//heroinfo.innerHTML = "";

// })
}; 


