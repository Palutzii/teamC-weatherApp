import { dataArray } from "./dataArray.js";

export const weatherIcons = {
  cloudBolt: `<img style="width: 30px" src="content/icons/cloud-bolt.svg" alt="cloudBolt">`,
  cloudRain: `<img style="width: 30px" src="content/icons/cloud-rain.svg" alt="cloudBolt">`,
  cloudShowersHeavy: `<img style="width: 30px" src="content/icons/cloud-showers-heavy.svg" alt="cloudBolt">`,
  cloudSunRain: `<img style="width: 30px" src="content/icons/cloud-sun-rain.svg" alt="cloudBolt">`,
  cloudSun: `<img style="width: 30px" src="content/icons/cloud-sun.svg" alt="cloudBolt">`,
  cloud: `<img style="width: 30px" src="content/icons/cloud.svg" alt="cloudBolt">`,
  snowflake: `<img style="width: 30px" src="content/icons/snowflake.svg" alt="cloudBolt">`,
  sun: `<img style="width: 25px" src="content/icons/sun.svg" alt="cloudBolt">`,
  tornado: `<img style="width: 30px" src="content/icons/tornado.svg" alt="cloudBolt">`,
};






let hourlyWeekday = document.querySelector(".hourlyWeekday");
let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");

export const runHourlyElement = () => {
  const {
    cloudBolt,
    cloudRain,
    cloudShowersHeavy,
    cloudSunRain,
    cloudSun,
    cloud,
    snowflake,
    sun,
    tornado,
  } = weatherIcons;

  // let currentTime = 24 - new Date().getHours();

  let weathericon = "";
  let hourlyData = dataArray[0].hourly;
  let currentTimeStamp = new Date().getHours();
  var oneDate = moment(new Date(), "DD-MM-YYYY");
  var dayName = oneDate.format("dddd");
  console.log(currentTimeStamp);
  hourlyWeekday.innerHTML = `${dataArray[0].name}`;

  for (let i = currentTimeStamp; i < 24; i++) {
    let currentHour = hourlyData[i];
    currentTimeStamp++;
    let formattedHour =
      (currentTimeStamp - 1 < 10 ? "0" : "") + (currentTimeStamp - 1);

    if (currentHour.weathercode == 0) {
      weathericon = sun;
    } else if (currentHour.weathercode > 0 && currentHour.weathercode < 3) {
      weathericon = cloudSun;
    } else if (currentHour.weathercode == 3) {
      weathericon = cloud;
    } else if (currentHour.weathercode > 3 && currentHour.weathercode < 68) {
      weathericon = cloudRain;
    } else if (currentHour.weathercode > 79 && currentHour.weathercode < 83) {
      weathericon = cloudShowersHeavy;
    } else if (
      (currentHour.weathercode > 70 && currentHour.weathercode < 78) ||
      (currentHour.weathercode > 84 && currentHour.weathercode < 87)
    ) {
      weathericon = snowflake;
    } else if (currentHour.weathercode > 94) {
      weathericon = cloudBolt;
    }

    hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv" style="display: flex; gap: 20px">
        <span class="hourlyElementDiv__time info">${formattedHour}.00</span>
        <div class="hourlyDayDiv" style="display: flex; gap: 20px">
            <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
            <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
            ${weathericon}
            <span class="hourlyElementDiv__Temp info">${currentHour.temp}&deg</span>
        </div>
    </div>`;
  }
};




//---------------------- NEXT DAY CODE -------------------------------

// let hourlyData = dataArray[1].hourly;
// let weekdayTime = -1;

// for (let i = 0; i < hourlyData.length; i++) {
//     let currentHour = hourlyData[i];
//     weekdayTime++;

//     // Add a leading zero to the hour value if it's less than 10
//     let formattedHour = (weekdayTime < 10 ? '0' : '') + weekdayTime;

//     if (currentHour.weathercode == 0) {
//         weathericon = sun;
//     }
//     else if (currentHour.weathercode > 0 && currentHour.weathercode < 3) {
//         weathericon = cloudSun;
//     }
//     else if (currentHour.weathercode == 3) {
//         weathericon = cloud;
//     }
//     else if (currentHour.weathercode > 3 && currentHour.weathercode < 68) {
//         weathericon = cloudRain
//     }
//     else if (currentHour.weathercode > 79 && currentHour.weathercode < 83) {
//         weathericon = cloudShowersHeavy
//     }
//     else if ((currentHour.weathercode > 70 && currentHour.weathercode < 78) || currentHour.weathercode > 84 && currentHour.weathercode < 87) {
//         weathericon = snowflake
//     }
//     else if (currentHour.weathercode > 94) {
//         weathericon = cloudBolt
//     }

//     hourlyWeatherDiv.innerHTML += `<div class="hourlyElementDiv" style="display: flex; gap: 20px">
//         <span class="hourlyElementDiv__time info">${formattedHour}.00</span>
//         <div class="hourlyDayDiv" style="display: flex; gap: 20px">
//             <span class="hourlyElementDiv__Wind info">${currentHour.windSpeed}</span>
//             <span class="hourlyElementDiv__Rain info">${currentHour.rain}</span>
//             ${weathericon}
//             <span class="hourlyElementDiv__Temp info">${currentHour.temp}&deg</span>
//         </div>
//     </div>`;
// }

// Celsius to Fahrenheit----------------------

// let celsiusToFahren = "";

// celsiusToFahren = Math.round(currentHour.temp * 1.8 + 32);
