const todayDate = new Date();
const weekday = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];

let weatherData = "";
export let dataArray = [];
export let currentWeatherObject = {};

let createCurrentWeatherObject = () => {


    let date = todayDate.getDate();
    if (date.toString().length < 2) {
    date = `0${date}`
    }
    let month = (todayDate.getMonth() + 1)
    if (month.toString().length < 2) {
    month = `0${month}`
    }
    let year = todayDate.getFullYear();
    let hour = todayDate.getHours();
    if (hour.toString().length < 2) {
    hour = `0${hour}`
    }
    let currentDateAndTimeByHour = `${year}-${month}-${date}T${hour}:00`

    currentWeatherObject = {
        temp: weatherData.current_weather.temperature,
        weathercode: weatherData.current_weather.weathercode,
        apparentTemp: (weatherData.hourly.apparent_temperature[weatherData.hourly.time.indexOf(currentDateAndTimeByHour)]),
        name: dataArray[0].name,
        date: dataArray[0].date,
        location: "Din Plats" //placeholder så länge
    }
}

let createArray = () => {
    dataArray = [];
    for (let i = 0; i < 7; i++){
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
                }
                hours.push(hour);
            }
        })

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
            },
            hourly: hours,
        }
        dataArray.push(obj);
    }
}

export async function getWeather(latitude, longitude) {
    weatherData = "";
    // const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=Europe%2FStockholm`
    const res = await fetch(url);
    const data = await res.json();
    weatherData = data;
    createArray();
    createCurrentWeatherObject();
}
