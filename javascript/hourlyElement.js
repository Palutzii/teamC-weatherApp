import { dataArray } from "./dataArray.js";


let hourlyWeekday = document.querySelector(".hourlyWeekday");
let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");

export const runHourlyElement = () => {
    
  

            let hourlyData = dataArray[0].hourly;
            // let currentTime = 24 - new Date().getHours();

        let currentTimeStamp = new Date().getHours();
        var oneDate = moment(new Date(), 'DD-MM-YYYY');
            
        var dayName = oneDate.format('dddd');

        

        hourlyWeekday.innerHTML = `${dayName}`;
        

            for (let i = currentTimeStamp; i < 24; i++) {
              let currentHour = hourlyData[i];
                
                currentTimeStamp++
                   
                    

                  hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv">
                    <span class="hourlyElementDiv__time info">${currentTimeStamp - 1}.00</span>
                    <div class="hourlyDayDiv">
                    <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
                    <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
                    <span class="hourlyElementDiv__Weather info">${currentHour.weathercode}</span>
                    <span class="hourlyElementDiv__Temp info">${currentHour.temp}</span>
                    </div>
                    </div>`;
                
            }



           
    
            // console.log(dayName);

    
            
            
            // let d = currentTime.getHours();

        
            
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