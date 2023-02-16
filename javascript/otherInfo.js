import { dataArray } from "../main.js";

let dailyPrecip = document.querySelector("#daily-precip");
let dailyWindspeed = document.querySelector("#daily-windspeed");

// function getDailyWindspeed(){
//     for(let i = 0; i < dataArray.length; i++){
//         dailyWindspeed += dataArray[i].hourly.windSpeed / 24;
//     }
// }
//getDailyWindspeed()

function getDailyPrecip(){
    for(let i = 0; i < dataArray.length; i++){
         dailyPrecip = dataArray[i].daily.precipitationSum;
    }
}
getDailyPrecip();







function renderOtherInfo(){

}