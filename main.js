// hittar och skriver ut koordinater för enhetens plats
import { myLocation } from "./javascript/myLocation.js";
import { getWeather } from "./javascript/getWeather.js";

import {currentWeatherObject} from "./javascript/getWeather.js"; // Object att använda i "hero"
export { currentWeatherObject };
import { dataArray } from "./javascript/getWeather.js";
export { dataArray };
import { runHourlyElement } from "./javascript/hourlyElement.js";
import { runDailyElement } from "./javascript/dayElement.js";
import { runHeroElement } from "./javascript/heroelement.js";
async function main(){

// hittar och skriver ut koordinater för enhetens plats


let latitude, longitude;

myLocation((position) => {
  const coordinates = position.coords;
  latitude = coordinates.latitude;
  longitude = coordinates.longitude;

  getWeather(latitude, longitude);



  console.log(dataArray)
  console.log(currentWeatherObject)


  // runHourlyElement(1);

 // runHourlyElement();
 runHeroElement();

 runDailyElement();

});

// tillfällig array
import { dataArray } from "./javascript/dataArray.js";
//loggar array
console.log(dataArray);

//Kör hourlyElement.js

import { runHourlyElement } from "./javascript/hourlyElement.js";
runHourlyElement();

// import {imgIcons} from "./javascript/hourlyElement.js";
// imgIcons();

import { runDailyElement } from "./javascript/dayElement.js";
runDailyElement();