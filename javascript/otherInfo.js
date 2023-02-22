import { dataArray } from "../main.js";
export const runotherInfo = (buttonValue) => {
    

let dailyPrecip = document.querySelector(".dailyprecip-info");
let dailyWindspeed = document.querySelector(".dailywindspeed-info");
let dailyHumidity = document.querySelector(".daily-humidity");
let dailyVisibility = document.querySelector(".daily-visibility");
let dailyUVIndex = document.querySelector(".daily-uvindex");
let dailyPressure = document.querySelector(".daily-pressure");
let dailyWindDirection = document.querySelector(".dominant-winddirection");


    for(let i = 0; i < dataArray.length; i++){
         if(dataArray[i].name === buttonValue){
            dailyPrecip.innerHTML = dataArray[i].daily.precipitationSum + " mm";
         }
    }
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
           dailyUVIndex.innerHTML = Math.round(dataArray[i].daily.uvIndex);
        }
   }
   
   
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let sumWind = 0;
            dataArray[i].hourly.forEach(hour => {
                sumWind += hour.windSpeed;
            })
            let avarageWind = (sumWind / 24);
            dailyWindspeed.innerHTML = Math.round(avarageWind) + " m/s";
        }
     }
     for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let degrees = dataArray[i].daily.windDirectionDom;
            if(degrees < 45 || degrees > 315){
                dailyWindDirection.innerHTML = "Nordlig Vind";
            }else if(degrees < 135){
                dailyWindDirection.innerHTML = "Östlig Vind";
            }
            else if(degrees < 225){
                dailyWindDirection.innerHTML = "Sydlig Vind";
            }
            else if(degrees < 315){
                dailyWindDirection.innerHTML = "Västlig Vind";
            }
        }
    }
     for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let sumHumidity = 0;
            dataArray[i].hourly.forEach(hour => {
                sumHumidity += hour.humidity / 100;
            })
            let avarageHumidity = (sumHumidity / 24);
            dailyHumidity.innerHTML = Math.round(avarageHumidity * 100) + "%";
        }
     }
     for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let sumVisibility = 0;
            dataArray[i].hourly.forEach(hour => {
                sumVisibility += hour.visibility / 1000;
            })
            let avarageVisibility = (sumVisibility / 24);
            dailyVisibility.innerHTML = Math.round(avarageVisibility) + " km";
        }
     }
     for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].name === buttonValue){
            let sumPressure = 0;
            dataArray[i].hourly.forEach(hour => {
                sumPressure += hour.pressure;
            })
            let avaragePressure = (sumPressure / 24);
            dailyPressure.innerHTML = Math.round(avaragePressure) + " hPa";
        }
     }
}
