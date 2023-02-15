import { dataArray } from "../main.js";
import { weatherIcons} from "./hourlyElement.js";
import { runHourlyElement } from "./hourlyElement.js";
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
  let mainDiv = document.querySelector(".main-daydiv");
  let weathericon="";
    // Loopar igenom dataArray och skapar knappar 
    for (let i = 0; i < dataArray.length; i++) {
        //skapar knappar
        let button = document.createElement('button');
        button.value = dataArray[i].name;
        if (dataArray[i].daily.weathercode == 0) {
          weathericon = sun;
        } else if (dataArray[i].daily.weathercode > 0 && dataArray[i].daily.weathercode < 3) {
          weathericon = cloudSun;
        } else if (dataArray[i].daily.weathercode == 3) {
          weathericon = cloud;
        } else if (dataArray[i].daily.weathercode > 3 && dataArray[i].daily.weathercode < 68) {
          weathericon = cloudRain;
        } else if (dataArray[i].daily.weathercode > 79 && dataArray[i].daily.weathercode < 83) {
          weathericon = cloudShowersHeavy;
        } else if (
          (dataArray[i].daily.weathercode > 70 && dataArray[i].daily.weathercode < 78) ||
          (dataArray[i].daily.weathercode > 84 && dataArray[i].daily.weathercode < 87)
        ) {
          weathericon = snowflake;
        } else if (currentHour.weathercode > 94) {
          weathericon = cloudBolt;
        }
      // Ger knappar inehåll från dataArray
      button.innerHTML = `
        <div class="dayBtn">
          <h2>${dataArray[i].name}</h2> <h3>${dataArray[i].date.day}/${dataArray[i].date.month}</h3>
        </div>
        <div>
          <h3>${weathericon}</h3><div> <h3>${dataArray[i].daily.tempMax}</h3>  <h3>${dataArray[i].daily.tempMin}</h3>
        </div>
      `;
    mainDiv.append(button); 
console.log(button)

button.addEventListener("click", (event) => {
runHourlyElement(event.target.value)
console.log(event.target.value)
  })
}}