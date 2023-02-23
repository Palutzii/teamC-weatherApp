const todayDate = new Date();
const weekday = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];

let weatherData = "";
let reverseData = "";
let timezoneData = "";
let filteredReverseData = [];
export let dataArray = [];
export let currentWeatherObject = {};
import { deviceLat } from "../main.js";
import { deviceLong } from "../main.js";
import { key } from "../main.js";

let createCurrentWeatherObject = () => {
  let date = todayDate.getDate();
  if (date.toString().length < 2) {
    date = `0${date}`;
  }
  let month = todayDate.getMonth() + 1;
  if (month.toString().length < 2) {
    month = `0${month}`;
  }
  let year = todayDate.getFullYear();
  let hour = todayDate.getHours();
  if (hour.toString().length < 2) {
    hour = `0${hour}`;
  }
  let currentDateAndTimeByHour = `${year}-${month}-${date}T${hour}:00`;

  let locationName = "";
  if (filteredReverseData.length === 0) {
    locationName = "Din plats";
  } else {
    locationName = filteredReverseData[0].long_name;
  }

  currentWeatherObject = {
    temp: weatherData.current_weather.temperature,
    weathercode: weatherData.current_weather.weathercode,
    apparentTemp:
      weatherData.hourly.apparent_temperature[
        weatherData.hourly.time.indexOf(currentDateAndTimeByHour)
      ],
    windspeed:
      weatherData.hourly.windspeed_10m[
        weatherData.hourly.time.indexOf(currentDateAndTimeByHour)
      ],
    name: dataArray[0].name,
    date: dataArray[0].date,
    location: locationName,
  };
};

let createArray = () => {
  dataArray = [];
  for (let i = 0; i < 7; i++) {
    let date = weatherData.daily.time[i];
    let hours = [];

    weatherData.hourly.time.forEach((element, index) => {
      if (element.substr(0, 10) === date) {
        let hour = {
          apparentTemp: weatherData.hourly.apparent_temperature[index],
          rain: weatherData.hourly.rain[index],
          temp: weatherData.hourly.temperature_2m[index],
          weathercode: weatherData.hourly.weathercode[index],
          windDirection: weatherData.hourly.winddirection_10m[index],
          windSpeed: weatherData.hourly.windspeed_10m[index],
          pressure: weatherData.hourly.pressure_msl[index],
          humidity: weatherData.hourly.relativehumidity_2m[index],
          visibility: weatherData.hourly.visibility[index],
        };
        hours.push(hour);
      }
    });

    let day = weatherData.daily.time[i].substr(8, 2);
    let month = weatherData.daily.time[i].substr(5, 2);
    let year = weatherData.daily.time[i].substr(0, 4);

    let obj = {
      name: weekday[todayDate.getDay() + i],
      date: {
        day: day,
        month: month,
        year: year,
      },
      daily: {
        precipitationSum: weatherData.daily.precipitation_sum[i], // nederbörd
        tempMax: weatherData.daily.temperature_2m_max[i],
        tempMin: weatherData.daily.temperature_2m_min[i],
        weathercode: weatherData.daily.weathercode[i], //väderkod för dagen (ikon)
        uvIndex: weatherData.daily.uv_index_max[i],
        windDirectionDom: weatherData.daily.winddirection_10m_dominant[i],
      },
      hourly: hours,
    };
    dataArray.push(obj);
  }
};

export async function getWeather(latitude, longitude) {
    let timezone = "Europe/Stockholm";
    reverseData = "";
    filteredReverseData = [];
    if (key !== "") {
        
        const urlReverse = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
        const res2 = await fetch(urlReverse);
        const data2 = await res2.json();
        reverseData = data2;
        console.log(reverseData)
        reverseData.results.forEach((res) => {
            res.address_components.forEach((comp) => {
                if (!comp.types.includes("sublocality_level_4") && !comp.types.includes("sublocality_level_4") && !comp.types.includes("sublocality_level_3")){
                    comp.types.forEach((type) =>{
                        if (type === "sublocality"){
                            filteredReverseData.push(comp)
                        }
                    })
                }
            })
            res.address_components.forEach((comp) => {
                comp.types.forEach((type) =>{
                    if (type === "locality"){
                        filteredReverseData.push(comp)
                    }
                })
            })
        })

        const urlTimeZone = `https://maps.googleapis.com/maps/api/timezone/json?location=${deviceLat},${deviceLong}&timestamp=0&key=${key}`
        const res3 = await fetch(urlTimeZone);
        const data3 = await res3.json();
        timezoneData = data3;
        timezone = data3.timeZoneId;
    }
    weatherData = "";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,visibility,temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=uv_index_max,winddirection_10m_dominant,temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=${timezone}`
    const res = await fetch(url);
    const data = await res.json();
    weatherData = data;


  createArray();
  createCurrentWeatherObject();
}
