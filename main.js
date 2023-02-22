import { myLocation } from "./javascript/myLocation.js";
import { getWeather } from "./javascript/getWeather.js";
import { currentWeatherObject } from "./javascript/getWeather.js"; // Object att använda i "hero"
export { currentWeatherObject };
import { dataArray } from "./javascript/getWeather.js";
export { dataArray };
import { runHourlyElement } from "./javascript/hourlyElement.js";
import { runDailyElement } from "./javascript/dayElement.js";
import { runotherInfo } from "./javascript/otherInfo.js";
import { runHeroElement } from "./javascript/heroelement.js";
import { loadingScreen } from "./javascript/loadingScreens.js";
import { loadingScreenOff } from "./javascript/loadingScreens.js";

async function main() {
  let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
  let otherInfoDiv = document.querySelector(".otherinfo-div");
  let mainDayDiv = document.querySelector(".main-daydiv");
  mainDayDiv.style.display = "none";
  otherInfoDiv.style.display = "none";
  hourlyDivWrapper.style.display = "none";



  
  // Kör loading screen innan vi hämtar data ------------------------------

  loadingScreen();

  // hittar och skriver ut koordinater för enhetens plats

  let latitude, longitude;

  myLocation(async function (position) {
    const coordinates = position.coords;
    latitude = coordinates.latitude;
    longitude = coordinates.longitude;
    await getWeather(latitude, longitude);

    // console.log(dataArray);
    // console.log(currentWeatherObject);

    // console.log(dataArray)





    for (let i = 0; i < dataArray.length; i++) {
      for (let j = 0; j < dataArray[i].hourly.length; j++) {
        let check = document.querySelector(".check");
        check.addEventListener("change", function () {
          if (check.checked) {
        dataArray[i].hourly[j].temp = dataArray[i].hourly[j].temp * 1.8 + 32;
          } else  {
            dataArray[i].hourly[j].temp = (dataArray[i].hourly[j].temp - 32) / 1.8;
          }
        });
      }
    }
    // Kör loadingScreenOff och stänger loadingScreen när vi har hämtat data ------------------------------
    
    loadingScreenOff();
    let check = document.querySelector(".check");
    check.addEventListener("change", function () {
      if (check.checked) {
        currentWeatherObject.temp = currentWeatherObject.temp * 1.8 + 32;
      } else {
        currentWeatherObject.temp = (currentWeatherObject.temp - 32) / 1.8;
      }


    });
    
    runHeroElement();
    runDailyElement();
   
  });

  //loggar array
}

main();
