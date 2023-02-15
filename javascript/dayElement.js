import { dataArray } from "./dataArray.js";
export const runDailyElement = () => {
    // Hämtar main-div
    let mainDiv = document.querySelector(".main-daydiv");
    // Loopar igenom dataArray och skapar knappar 
    for (let i = 0; i < dataArray.length; i++) {
        //skapar knappar
      let button = document.createElement('button');
      // Ger knappar inehåll från dataArray
      button.innerHTML = `
        <div class="dayBtn">
          <h2>${dataArray[i].name} ${dataArray[i].date.day}/${dataArray[i].date.month}</h2>
        </div>
        <div>
          <div>${dataArray[i].daily.weathercode}</div><div> ${dataArray[i].daily.tempMax} ${dataArray[i].daily.tempMin}</div>
        </div>
      `;
      mainDiv.append(button);
    }
};
