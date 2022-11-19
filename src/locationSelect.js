import fetchWeather from "./fetchWeather";
import renderWeatherDetails from "./DOM";
import { countryList } from "./country";

const locInput = document.querySelector("#loc");
const suggestionBox = document.querySelector(".suggestion-box-container");

async function findLocation() {
  const country = document.getElementById("country-select");
  const state = document.getElementById("states-select");
  const prefix = "http://api.openweathermap.org/geo/1.0/";
  const input = locInput.value;
  let middle;
  const apiKey = "&appid=921cfd876fc7bdd1768497c18dc1bf81";
  if (Number(input)) {
    if (country.value) {
      middle = `zip?zip=${input},${country.value}`;
    } else {
      middle = `zip?zip=${input}`;
    }
  } else if (state.value) {
    middle = `direct?q=${input},${state.value},${country.value}&limit=7`;
  } else if (country.value) {
    middle = `direct?q=${input},${country.value}&limit=7`;
  } else {
    middle = `direct?q=${input}&limit=7`;
  }

  const locationListRequest = await fetch(`${prefix}${middle}${apiKey}`);
  const locationList = await locationListRequest.json();
  console.log(locationList);
  return locationList;

  // 'direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  // 'zip?zip={zip code},{country code}&appid={API key}
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createOptionBox(response) {
  if (suggestionBox.firstChild) {
    suggestionBox.removeChild(suggestionBox.firstChild);
  }
  const box = document.createElement("div");
  box.classList.add("suggestion-box");
  if (!Array.isArray(response)) {
    response = [response];
  }
  if (!response.length) {
    const noResults = document.createElement('div');
    noResults.classList.add('loc-suggestion');
    noResults.innerText = 'No results';
    box.appendChild(noResults);
  } else {
  response.forEach((sug) => {
    const suggestion = document.createElement("button");
    suggestion.setAttribute("type", "button");
    suggestion.classList.add("loc-suggestion");
    suggestion.innerText = `${sug.name}, ${
      sug.state ?? countryList[sug.country]
    }`;
    suggestion.addEventListener("click", async () => {
      const weatherData = await fetchWeather(sug);
      weatherData.current.locationName = sug.name;
      console.log(weatherData);
      suggestionBox.removeChild(suggestionBox.firstChild);
      renderWeatherDetails(weatherData);
    });
    box.appendChild(suggestion);
  
  });
}

  return box;
}

async function delayAndSearch(value, wait) {
  await delay(wait);
  if (value === locInput.value) {
    const locationList = await findLocation(locInput.value);
    const optionBox = createOptionBox(locationList);
    suggestionBox.appendChild(optionBox);
  }
}

function handleSearchInput () {
  if (!locInput.value) {
    if (suggestionBox.firstChild) {
      suggestionBox.removeChild(suggestionBox.firstChild);
    }
    return;
  }
  if (locInput.value.length > 4) {
    delayAndSearch(locInput.value, 400);
  } else {
    delayAndSearch(locInput.value, 2000);
  }

}




export { findLocation, handleSearchInput };
