import { dataArray } from "../main.js";
import { weatherIcons } from "./hourlyElement.js";
import { runHourlyElement } from "./hourlyElement.js";
import { runotherInfo } from "./otherInfo.js";
import { currentWeatherObject } from "../main.js";

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

  // Fetches elements from html
  let mainDiv = document.querySelector(".main-daydiv");
  let infoDiv = document.querySelector(".infoDiv");
  let timeInfo = document.querySelector(".timeInfo");
  let heroBox = document.querySelector(".hero-box");
  let otherInfo = document.querySelector(".otherinfo-div");

  mainDiv.style.display = "block";
  let weathericon = "";

  // Loops thrue dataArray
  for (let i = 0; i < dataArray.length; i++) {
    //creates buttons
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
    // Gives button content from dataArray
    button.innerHTML = `
        <div class="dayBtn">
          <h2>${dataArray[i].name}</h2> <h3>${parseInt(
      dataArray[i].date.day,
      10
    )}/${parseInt(dataArray[i].date.month, 10)}</h3>
        </div>
        <div>
          <div>${weathericon}</div><div> <h3 class="tempMax tempCF">${Math.round(
      dataArray[i].daily.tempMax
    )}&deg</h3>  <h3 class="tempMax tempCF">${Math.round(
      dataArray[i].daily.tempMin
    )}&deg</h3>
        </div>
      `;
    mainDiv.append(button);

    // Fetches elements from html
    let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
    let otherInfoDiv = document.querySelector(".otherinfo-div");

    // Eventlistener for buttons
    button.addEventListener("click", () => {
      runHourlyElement(button.value);
      runotherInfo(button.value);
      otherInfoDiv.style.display = "block";
      hourlyDivWrapper.style.display = "block";
      mainDiv.style.display = "none";
      heroBox.style.display = "none";
      infoDiv.style.display = "inherit";
      timeInfo.style.display = "inherit";
    });
  }
  // Fetches elements from html
  let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
  let otherInfoDiv = document.querySelector(".otherinfo-div");
  let heroinfo = document.querySelector(".hero-info");

  // Gives hero-info value from dataArray
  heroinfo.value = dataArray[0].name;

  // Eventlistener for hero
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

  // TOGGLE FUNKTION MELLAN C OCH F ------------------------------------------------------------

  let button = document.querySelectorAll("button");

  for (let i = 0; i < button.length; i++) {
    console.log(button[i]);
    let temperature = button[i].querySelectorAll(".tempCF");
    let check = document.querySelector(".check");

    check.addEventListener("change", function () {
      for (let j = 0; j < temperature.length; j++) {
        dataArray[i].daily = { temp: parseFloat(temperature[j].innerHTML) };
        if (check.checked) {
          temperature[j].innerHTML = `${Math.round(
            (dataArray[i].daily.temp * 9) / 5 + 32
          )}&deg`;
        } else {
          temperature[j].innerHTML = `${Math.round(
            ((dataArray[i].daily.temp - 32) * 5) / 9
          )}&deg`;
        }
      }
    });
  }
  // TOGGLE FUNKTION MELLAN C OCH F SLUT ----------------------------------------------------------
};
