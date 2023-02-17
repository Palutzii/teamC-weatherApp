import { myLocation } from "./javascript/myLocation.js";
import { getWeather } from "./javascript/getWeather.js";
import {currentWeatherObject} from "./javascript/getWeather.js"; // Object att använda i "hero"
export { currentWeatherObject };
import { dataArray } from "./javascript/getWeather.js";
export { dataArray };
import { runHourlyElement } from "./javascript/hourlyElement.js";
import { runDailyElement } from "./javascript/dayElement.js";
import { runotherInfo } from "./javascript/otherInfo.js";
import {runHeroElement } from "./javascript/heroelement.js";
import {searchInput} from "./javascript/search.js"
async function main(){
  let hourlyDivWrapper = document.querySelector(".hourlyDivWrapper");
  let otherInfoDiv = document.querySelector(".otherinfo-div");
  let mainDayDiv = document.querySelector(".main-daydiv");
  mainDayDiv.style.display = "none";
  otherInfoDiv.style.display = "none";
  hourlyDivWrapper.style.display = "none";

// hittar och skriver ut koordinater för enhetens plats

let latitude, longitude;

myLocation(async function(position) {
  const coordinates = position.coords;
  latitude = coordinates.latitude;
  longitude = coordinates.longitude;
  await getWeather(latitude, longitude);

  console.log(dataArray)
  console.log(currentWeatherObject)


  // runHourlyElement(1);

 // runHourlyElement();
runHeroElement();
 runDailyElement();
});

//loggar array
console.log(dataArray);


//Kör hourlyElement.js



// import {imgIcons} from "./javascript/hourlyElement.js";
// imgIcons();



}

main();