import { myLocation } from "./javascript/myLocation.js";
import { getWeather } from "./javascript/getWeather.js";
import { dataArray } from "./javascript/getWeather.js";
export {dataArray};
import { runHourlyElement } from "./javascript/hourlyElement.js";
import { runDailyElement } from "./javascript/dayElement.js";
async function main(){

// hittar och skriver ut koordinater för enhetens plats

let latitude, longitude;

myLocation(async function(position) {
  const coordinates = position.coords;
  latitude = coordinates.latitude;
  longitude = coordinates.longitude;
  await getWeather(latitude, longitude);

  console.log(dataArray)

 // runHourlyElement();
  runDailyElement();
});

//loggar array
console.log(dataArray);


//Kör hourlyElement.js



// import {imgIcons} from "./javascript/hourlyElement.js";
// imgIcons();



}

main();