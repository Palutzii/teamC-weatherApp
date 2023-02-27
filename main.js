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
import { searchInput } from "./javascript/search.js";
import { runWarningElement } from "./javascript/waring.js";
import { loadingScreen } from "./javascript/loadingScreens.js";
import { loadingScreenOff } from "./javascript/loadingScreens.js";

export let deviceLat, deviceLong;
export const key = "";

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
    deviceLat = latitude;
    deviceLong = longitude;
    // Test koordinater (ignorera) 52.51117679876553, 13.443010599083433

    await getWeather(latitude, longitude);

    console.log(dataArray);
    console.log(currentWeatherObject);

    // Kör loadingScreenOff och stänger loadingScreen när vi har hämtat data ------------------------------

    loadingScreenOff();

    runHeroElement();
    runWarningElement();
    runDailyElement();
  });

  //loggar array
  console.log(dataArray);
}

main();
let check = document.querySelector(".check");

check.addEventListener("change", () => {
  let hideC = document.querySelectorAll(".hideC");
  let hideF = document.querySelectorAll(".hideF");

  for (let i = 0; i < hideC.length; i++) {
    if (check.checked) {
      hideC[i].style.display = "none";
      hideF[i].style.display = "grid";
    } else if (!check.checked) {
      hideC[i].style.display = "grid";
      hideF[i].style.display = "none";
    }
  }
});
