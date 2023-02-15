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
          <h2>${dataArray[i].name}</h2> <h3>${dataArray[i].date.day}/${dataArray[i].date.month}</h3>
        </div>
        <div>
          <h3>${dataArray[i].daily.weathercode}</h3><div> <h3>${dataArray[i].daily.tempMax}</h3>  <h3>${dataArray[i].daily.tempMin}</h3>
        </div>
      `;
    mainDiv.append(button);
  }
};
