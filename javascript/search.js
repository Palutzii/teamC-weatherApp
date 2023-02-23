import { getWeather } from "./getWeather.js";
import { dataArray } from "../main.js";
import { runDailyElement } from "./dayElement.js";
import {runHeroElement } from "./heroelement.js";
import {currentWeatherObject} from "../main.js";
export {searchInput};
export {searchBtn};

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const placesList = document.getElementById("placesList");
const searchIconHolder = document.getElementById("searchIconHolder");
const homeSun = document.getElementById("homeSun");
let searchResults = [];

searchInput.addEventListener("input", () => {
    console.log("hej")
    const places = searchInput.value;
    getPlaces(places);
})

async function getPlaces(places) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${places}`
    const res = await fetch(url);
    const data = await res.json();
    createPlacesList(data);
}

const createPlacesList = (arr) => {
    placesList.innerHTML = "";
    searchResults= [];
    searchResults = arr.results;
    console.log(searchResults);
    arr.results.forEach((location) => {
        let name = "";
        let state = "";
        let muni = "";
        let country = "";
        if ("name" in location) {
            name = `${location.name}, `;
        }
        if ("admin1" in location) {
            state = `${location.admin1}, `;
            if (state === name) {
                state = "";
            }
        }
        if ("admin2" in location) {
            muni = `${location.admin2}, `;
        }
        if ("country" in location) {
            country = `${location.country}`;
            
        }
        let place = document.createElement("li");
        let placeBtn = document.createElement("button");
        placeBtn.classList.add("place-btn");
        placeBtn.value = (location.id);
        placeBtn.innerText = name + state + muni + country;
        let flag = document.createElement("img");
        flag.classList.add("flag");
        flag.src = `https://www.countryflagicons.com/FLAT/64/${location.country_code}.png`
        placeBtn.prepend(flag);
        place.append(placeBtn);
        placesList.append(place);
        placeBtn.addEventListener("click", () => {
            getCoordinates(placeBtn.value)
        })
    })

}

async function getSearchWeather(latitude, longitude, name) {
    await getWeather(latitude, longitude);
    console.log(dataArray)
    currentWeatherObject.location = name;
    console.log(currentWeatherObject)
    runHeroElement();
    runDailyElement();

}

const getCoordinates = (id) => {
    let idAsNumber = (parseInt(id))
    searchResults.forEach((index) => {
        if (index.id === idAsNumber) {
            getSearchWeather(index.latitude, index.longitude, index.name)
        }
    })
    placesList.innerHTML = "";
    
}
let searchIsActive = false;
searchIconHolder.addEventListener("click", () => {
    if (searchIsActive === false) {
        searchInput.classList.add("is-clicked");
        homeSun.classList.add("is-covered")
        searchIsActive = true;
    }
    else if (searchIsActive === true) {
        searchInput.classList.remove("is-clicked");
        homeSun.classList.remove("is-covered")
        searchIsActive = false;
    }
})