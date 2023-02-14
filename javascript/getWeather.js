export async function getWeather(latitude, longitude) {
    let weatherData = "";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`
    const res = await fetch(url);
    const data = await res.json();
    weatherData = data;
    console.log(weatherData)
}