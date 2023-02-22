import { dataArray } from "../main.js";
export const runotherInfo = (buttonValue) => {
    

let dailyPrecip = document.querySelector(".dailyprecip-info");
let dailyWindspeed = document.querySelector(".dailywindspeed-info");


    for(let i = 0; i < dataArray.length; i++){
         if(dataArray[i].name === buttonValue){
            dailyPrecip.innerHTML = dataArray[i].daily.precipitationSum + " mm";
            console.log(dailyPrecip.innerHTML)
            break;
         }
    }
    
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let sumWind = 0;
            dataArray[i].hourly.forEach(hour => {
                sumWind += hour.windSpeed;
            })
            let avrageWind = (sumWind / 24);
            dailyWindspeed.innerHTML = Math.round(avrageWind) + " m/s";
        }
     }
 
}
