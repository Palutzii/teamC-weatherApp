import { dataArray } from "../main.js";
import { weatherIcons } from "./hourlyElement.js";
import { runHourlyElement } from "./hourlyElement.js";
import { runotherInfo } from "./otherInfo.js";
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
  let infoDiv = document.querySelector(".infoDiv");
  let timeInfo = document.querySelector(".timeInfo");
  let heroBox = document.querySelector(".hero-box");
  let otherInfo = document.querySelector(".otherinfo-div");
  infoDiv.style.display = "none";
  timeInfo.style.display = "none";
  otherInfo.style.display = "none";
  mainDiv.style.display = "block"
  let weathericon = "";
  // Loopar igenom dataArray och skapar knappar
  for (let i = 0; i < dataArray.length; i++) {
    //skapar knappar
    let button = document.createElement("button");
    button.value = dataArray[i].name;
    if (dataArray[i].daily.weathercode == 0) {
      weathericon = sun;
    } else if (
      dataArray[i].daily.weathercode > 0 &&
      dataArray[i].daily.weathercode < 3
    ) {
      weathericon = cloudSun;
    } else if (dataArray[i].daily.weathercode == 3) {
      weathericon = cloud;
    } else if (
      dataArray[i].daily.weathercode > 3 &&
      dataArray[i].daily.weathercode < 68
    ) {
      weathericon = cloudRain;
    } else if (
      dataArray[i].daily.weathercode > 79 &&
      dataArray[i].daily.weathercode < 83
    ) {
      weathericon = cloudShowersHeavy;
    } else if (
      (dataArray[i].daily.weathercode > 70 &&
        dataArray[i].daily.weathercode < 78) ||
      (dataArray[i].daily.weathercode > 84 &&
        dataArray[i].daily.weathercode < 87)
    ) {
      weathericon = snowflake;
    } else if (currentHour.weathercode > 94) {
      weathericon = cloudBolt;
    }
    // Ger knappar inehåll från dataArray
    button.innerHTML = `
        <div class="dayBtn">
          <h2>${dataArray[i].name}</h2> <h3>${parseInt(
      dataArray[i].date.day,
      10
    )}/${parseInt(dataArray[i].date.month, 10)}</h3>
        </div>
        <div>
          <div>${weathericon}</div><div> <h3>${Math.round(
      dataArray[i].daily.tempMax)}&deg</h3>  <h3>${Math.round(dataArray[i].daily.tempMin)}&deg</h3>
        </div>
      `;
    mainDiv.append(button);
    let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
    let otherInfoDiv = document.querySelector(".otherinfo-div");
    console.log(button)
    button.addEventListener("click", () => {
      runHourlyElement(button.value);
      runotherInfo(button.value);
      otherInfoDiv.style.display = "block";
      hourlyDivWrapper.style.display = "block";
      mainDiv.innerHTML = "";
      heroBox.innerHTML = "";
      infoDiv.style.display = "inherit";
      timeInfo.style.display = "inherit";
      // otherInfo.style.display = "inherit";
    });
  }
  // Fetches hero-info
  let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
  let otherInfoDiv = document.querySelector(".otherinfo-div");
  let heroinfo = document.querySelector(".hero-info");

  // Gives hero-info value from dataArray
  heroinfo.value = dataArray[0].name;
  //
  heroinfo.addEventListener("click", () => {
    runHourlyElement(heroinfo.value);
    runotherInfo(heroinfo.value);
    otherInfoDiv.style.display = "block";
    hourlyDivWrapper.style.display = "block";
    mainDiv.innerHTML = "";
    heroBox.innerHTML = "";
    infoDiv.style.display = "inherit";
    timeInfo.style.display = "inherit";
  });

};
