const todayDate = new Date();
const weekday = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];

let weatherData = "";
let dataArray = [];

let createArray = () => {
    for (let i = 0; i < 7; i++){

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
        }
        dataArray.push(obj);
        console.log(dataArray);
    }
}

export async function getWeather(latitude, longitude) {
    weatherData = "";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`
    const res = await fetch(url);
    const data = await res.json();
    weatherData = data;
    console.log(weatherData)
    createArray();
}
