// hittar och skriver ut koordinater för enhetens plats
import {myLocation} from "./javascript/myLocation.js";
import { getWeather } from "./javascript/getWeather.js";

let latitude, longitude

myLocation((position) => {
    const coordinates = position.coords;
    latitude = coordinates.latitude;
    longitude = coordinates.longitude;
    getWeather(latitude, longitude);
});

// tillfällig array
import { dataArray } from "./javascript/dataArray.js";
//loggar array
console.log(dataArray);




//Kör hourlyElement.js

import {runHourlyElement} from "./javascript/hourlyElement.js";
runHourlyElement();


import {imgIcons} from "./javascript/hourlyElement.js";
imgIcons();

