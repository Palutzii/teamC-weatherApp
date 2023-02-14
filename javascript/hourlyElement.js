import { dataArray } from "./dataArray.js";


let hourlyWeekday = document.querySelector(".hourlyWeekday");
let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");

export const runHourlyElement = () => {
    
  
    //     // let currentTime = 24 - new Date().getHours();
    
   

            let hourlyData = dataArray[0].hourly;
            let currentTimeStamp = new Date().getHours();
            var oneDate = moment(new Date(), 'DD-MM-YYYY');
            var dayName = oneDate.format('dddd');
            console.log(currentTimeStamp)
            hourlyWeekday.innerHTML = `${dayName}`;
            
            for (let i = currentTimeStamp; i < 24; i++) {
              let currentHour = hourlyData[i];
              currentTimeStamp++
              let formattedHour = (currentTimeStamp - 1 < 10 ? '0' : '') + (currentTimeStamp - 1);
              
              hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv" style="display: flex; gap: 20px">
                <span class="hourlyElementDiv__time info">${formattedHour}.00</span>
                <div class="hourlyDayDiv" style="display: flex; gap: 20px">
                <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
                <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
                <span class="hourlyElementDiv__Weather info">${currentHour.weathercode}</span>
                <span class="hourlyElementDiv__Temp info">${currentHour.temp}</span>
                </div>
                </div>`;
            }




        }
  
    


//---------------------- NEXT DAY CODE ----------------------


// let weekdayTime = -1;
// let hourlyData = dataArray[1].hourly;

// for (let i = 0; i < hourlyData.length; i++) {
//     let currentHour = hourlyData[i];
      
//      weekdayTime++;
         
//         hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv">
//           <span class="hourlyElementDiv__time info">${weekdayTime}.00</span>
//           <div class="hourlyDayDiv">
//           <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
//           <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
//           <span class="hourlyElementDiv__Weather info">${currentHour.weathercode}</span>
//           <span class="hourlyElementDiv__Temp info">${currentHour.temp}</span>
//           </div>
//           </div>`;
      
//   }