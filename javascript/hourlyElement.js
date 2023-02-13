export const runHourlyElement = () => {

    
    // let hourlyElement = document.querySelector(".hourlyElement");
    
    let hourlyWeatherDiv = document.querySelector(".hourlyWeatherDiv");
    
    
    hourlyWeatherDiv.innerHTML = `<div class="hourlyElementDiv">
    <span class="hourlyElementDiv__time">14.00</span>
    <div>
    <span class="hourlyElementDiv__Wind">5.4</span>
    <span class="hourlyElementDiv__Rain">22</span>
    <span class="hourlyElementDiv__Weather">IKON</span>
    <span class="hourlyElementDiv__Temp">23&deg</span>
    </div>
    </div>`;
    
    
}
    
    
    
    // ${hourlyElement.time}
    // ${hourlyElement.wind}
    // ${hourlyElement.rain}
    // ${hourlyElement.Weather}
    // ${hourlyElement.temp}