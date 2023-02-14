import { dataArray } from "./dataArray.js";
export const runDailyElements = () => {

let firstBtn = document.querySelector("firstBtn");
let secondBtn = document.querySelector("secondBtn");
let thirdBtn = document.querySelector("thirdBtn");
let fourthBtn = document.querySelector("fourthBtn");
let fifthBtn = document.querySelector("fifthBtn");
let sixthBtn = document.querySelector("sixthBtn");
let seventhBtn = document.querySelector("seventhBtn");
let dayBtn= document.querySelectorAll("button");

console.log(dataArray);

const dailyName = dataArray[0].name;
const dailyDate = dataArray[0].date;
const dailyData = dataArray[0].daily.tempMax;


console.log(dailyDate);
console.log(dailyName);
console.log(dailyData);

let date = new Date();
let currentDay = date.getDate() 
let currentMonth =date.getMonth();
let currentDate = currentDay + "/" + currentMonth;
console.log(currentDate);

};