import { dataArray } from "../main.js";
export const runotherInfo = (buttonValue) => {
    

let dailyPrecip = document.querySelector(".dailyprecip-info");
let dailyWindspeed = document.querySelector(".dailywindspeed-info");


    for(let i = 0; i < dataArray.length; i++){
         if(dataArray[i].name === buttonValue){
            dailyPrecip.textcontent = dataArray[i].daily.precipitationSum + " mm";
            break;
         }
    }
      
 
     for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            dailyWindspeed.textContent += dataArray[i].hourly.windSpeed / 24 + " m/s";
        }
     }
 
}
