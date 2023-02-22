import { dataArray } from "../main.js";
import { currentWeatherObject } from "../main.js";

export const weatherIcons = {
  cloudBolt: `<img class="weatherIcon" src="content/icons/cloud-bolt.svg" alt="cloudBolt">`,
  cloudRain: `<img class="weatherIcon"  src="content/icons/cloud-rain.svg" alt="cloudBolt">`,
  cloudShowersHeavy: `<img class="weatherIcon"  src="content/icons/cloud-showers-heavy.svg" alt="cloudBolt">`,
  cloudSunRain: `<img class="weatherIcon"  src="content/icons/cloud-sun-rain.svg" alt="cloudBolt">`,
  cloudSun: `<img class="weatherIcon"  src="content/icons/cloud-sun.svg" alt="cloudBolt">`,
  cloud: `<img class="weatherIcon"  src="content/icons/cloud.svg" alt="cloudBolt">`,
  snowflake: `<img class="weatherIcon"  src="content/icons/snowflake.svg" alt="cloudBolt">`,
  sun: `<img class="weatherIcon"  src="content/icons/sun.svg" alt="cloudBolt">`,
  tornado: `<img class="weatherIcon"  src="content/icons/tornado.svg" alt="cloudBolt">`,
};

export const runHourlyElement = (buttonValue) => {
  let hourlyWeekday = document.querySelector(".hourlyWeekday");
  let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");

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

  let weathericon = "";
  let hourlyData = null;

  // Find the corresponding hourly data for the button clicked
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].name === buttonValue) {
      hourlyData = dataArray[i].hourly;
      break;
    }
  }

  // If no corresponding hourly data found, return
  if (!hourlyData) {
    return;
  }

  hourlyWeekday.innerHTML = `${buttonValue}`;

  hourlyWeatherDiv.innerHTML = "";

  let weekdayTime = -1;

  for (let i = 0; i < hourlyData.length; i++) {
    let currentHour = hourlyData[i];
    weekdayTime++;

    if (buttonValue == dataArray[0].name) {
      let currentTimeStamp = new Date().getHours();

      if (weekdayTime < currentTimeStamp) {
        continue;
      }
    }

    // Add a leading zero to the hour value if it's less than 10
    let formattedHour = (weekdayTime < 10 ? "0" : "") + weekdayTime;

    currentHour.temp = Math.round(currentHour.temp);
    currentHour.windSpeed = Math.round(currentHour.windSpeed);

    if (currentHour.weathercode == 0) {
      weathericon = sun;
    } else if (currentHour.weathercode > 0 && currentHour.weathercode < 3) {
      weathericon = cloudSun;
    } else if (currentHour.weathercode == 3) {
      weathericon = cloud;
    } else if (currentHour.weathercode > 3 && currentHour.weathercode < 68) {
      weathericon = cloudRain;
    } else if (currentHour.weathercode > 79 && currentHour.weathercode < 83) {
      weathericon = cloudShowersHeavy;
    } else if (
      (currentHour.weathercode > 70 && currentHour.weathercode < 78) ||
      (currentHour.weathercode > 84 && currentHour.weathercode < 87)
    ) {
      weathericon = snowflake;
    } else if (currentHour.weathercode > 94) {
      weathericon = cloudBolt;
    }

    let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");

    hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv" >
        <span class="hourlyElementDiv__time info">${formattedHour}.00</span>
        <div class="hourlyDayDiv" >
            <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
            <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
            <div class="logo-wrapper">${weathericon}</div>
            <span class="hourlyElementDiv__Temp info">${currentHour.temp}&deg</span>
        </div>
    </div>`;

    // TOGGLE FUNKTION MELLAN C OCH F ------------------------------------------------------------

    hourlyWeatherDiv = document.querySelectorAll(".hourlyWeatherDiv");



    for (let i = 0; i < hourlyWeatherDiv.length; i++) {
      let temperature = hourlyWeatherDiv[i].querySelectorAll(
        ".hourlyElementDiv__Temp"
      );
      let check = document.querySelector(".check");

      check.addEventListener("change", function () {
        for (let j = 0; j < temperature.length; j++) {
          let currentHour = { temp: parseFloat(temperature[j].innerHTML) };
          if (check.checked) {
            temperature[j].innerHTML = `${Math.round(
              (currentHour.temp * 9) / 5 + 32
            )}&deg`;
          } else if (!check.checked) {
            temperature[j].innerHTML = `${Math.round(
              ((currentHour.temp - 32) * 5) / 9
            )}&deg`;
          }
        }
      });
    }

    // TOGGLE FUNKTION MELLAN C OCH F SLUT --------------------------------------------------------
  }

  //ANNAS KOD
  let breadNav = document.querySelector("#breadNav");
  let breadNavContent = document.createElement("div");
  let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
  let otherInfoDiv = document.querySelector(".otherinfo-div");
  let mainDiv = document.querySelector(".main-daydiv");
  let infoDiv = document.querySelector(".infoDiv");
  let timeInfo = document.querySelector(".timeInfo");
  let heroBox = document.querySelector(".hero-box");

  breadNavContent.innerHTML = `
      <div>
        <div id="home" class="breadNavHome">
        <img src="content/icons/house.svg" alt="home">
          <h3>${currentWeatherObject.location}</h3>
        </div>
        <span>/</span>
        <div><h3>${buttonValue}</h3></div>
      </div>`;
  breadNav.append(breadNavContent);

  let homeDiv = document.querySelector("#home");
  homeDiv.addEventListener("click", () => {
    console.log("hej")
    otherInfoDiv.style.display = "none";
    hourlyDivWrapper.style.display = "none";
    mainDiv.style.display = "inherit";
    heroBox.style.display = "flex";
    infoDiv.style.display = "none";
    timeInfo.style.display = "none";
    breadNavContent.innerHTML = "";
  });


};
