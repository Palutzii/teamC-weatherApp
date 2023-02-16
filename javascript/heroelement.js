import {currentWeatherObject} from "./javascript/getWeather.js";
import { dataArray } from "../main.js";
import { weatherIcons} from "./hourlyElement.js";
import { runHourlyElement } from "./hourlyElement.js";



 document.qetElementById("location").innerhtml= location;
 document.qetElementById("hero-day").innerhtml= name;
 document.qetElementById("day-date").innerhtml= date;
 document.qetElementById("hero-icon").innerhtml= weathercode;
 document.qetElementById("hero-temp").innerhtml= temp;
 document.qetElementById("feels").innerhtml= apparentTemp;

class hero
 let hero = document.createElement('div');
  hero.value = dataArray[0].name;


export const runDailyElement = () => {
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
  // Hämtar main-div
  let heroinfo = document.querySelector(".hero-info");
  let infoDiv=document.querySelector(".infoDiv");
  let timeInfo=document.querySelector(".timeInfo");
  infoDiv.style.display="none";
  timeInfo.style.display="none";
  let weathericon="";
    // Loopar igenom dataArray och skapar knappar 
    
    let hero = document.createElement('div');
    hero.value = dataArray[0].name;
        
        if (dataArray[i].hourly.weathercode == 0) {
          weathericon = sun;
        } else if (dataArray[i].hourly.weathercode > 0 && dataArray[i].hourly.weathercode < 3) {
          weathericon = cloudSun;
        } else if (dataArray[i].hourly.weathercode == 3) {
          weathericon = cloud;
        } else if (dataArray[i].hourly.weathercode > 3 && dataArray[i].hourly.weathercode < 68) {
          weathericon = cloudRain;
        } else if (dataArray[i].hourly.weathercode > 79 && dataArray[i].hourly.weathercode < 83) {
          weathericon = cloudShowersHeavy;
        } else if (
          (dataArray[i].hourly.weathercode > 70 && dataArray[i].hourly.weathercode < 78) ||
          (dataArray[i].hourly.weathercode > 84 && dataArray[i].hourly.weathercode < 87)
        ) {
          weathericon = snowflake;
        } else if (currentHour.weathercode > 94) {
          weathericon = cloudBolt;
        }

      // Ger knappar inehåll från dataArray
      hero.innerHTML = `
      <div class ="hero-location">
      <p>${location}</p>
      </div>
        <div class="hero-date">
          <p>${dataArray[i].name}</p> <p>${parseInt(dataArray[i].date.day,10)}/${parseInt(dataArray[i].date.month,10)}</p>
        </div>
        <div class="hero-icon">
          <p>${weathericon}</p> <div class="hero-temp"> <p>${dataArray[i].hourly.apparentTemp}</p>  <p>${dataArray[i].hourly.apperenttemp}</p>
        </div>
      `;

     >

   

    heroinfo.append(div); 
console.log(div)

hero.addEventListener("click", (event) => {
runHourlyElement(event.target.value)
mainDiv.innerHTML = "";
infoDiv.style.display="inherit";
timeInfo.style.display="inherit";
  })
}}