import getAndDisplayWeather from './fetchWeather';
import { countryList } from './country';

const locInput = document.querySelector('#loc');
const suggestionBox = document.querySelector('.suggestion-box-container');

async function findLocation() {
  const country = document.getElementById('country-select');
  const state = document.getElementById('states-select');
  const prefix = 'https://api.openweathermap.org/geo/1.0/';
  const input = locInput.value;
  let middle;
  const apiKey = '&appid=921cfd876fc7bdd1768497c18dc1bf81';
  let countryCode;
  if (country.value) {
    const shownVal = country.value;
    countryCode = document.querySelector(
      `#countries option[value='${shownVal}']`
    ).dataset.value;
  }
  if (Number(input)) {
    if (country.value) {
      middle = `zip?zip=${input},${countryCode}`;
    } else {
      middle = `zip?zip=${input}`;
    }
  } else if (state.value) {
    middle = `direct?q=${input},${state.value},${countryCode}&limit=7`;
  } else if (country.value) {
    middle = `direct?q=${input},${countryCode}&limit=7`;
  } else {
    middle = `direct?q=${input}&limit=7`;
  }

  const locationListRequest = await fetch(`${prefix}${middle}${apiKey}`);
  const locationList = await locationListRequest.json();
  return locationList;
}

function delay(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createOptionBox(response) {
  if (suggestionBox.firstChild) {
    suggestionBox.removeChild(suggestionBox.firstChild);
  }
  const box = document.createElement('div');
  box.classList.add('suggestion-box');

  // zip response is not an array
  if (!Array.isArray(response)) {
    // eslint-disable-next-line no-param-reassign
    response = [response];
  }
  if (!response.length) {
    const noResults = document.createElement('div');
    noResults.classList.add('loc-suggestion');
    noResults.innerText = 'No results';
    box.appendChild(noResults);
  } else {
    response.forEach((sug) => {
      const suggestion = document.createElement('button');
      suggestion.setAttribute('type', 'button');
      suggestion.classList.add('loc-suggestion');
      suggestion.innerText = `${sug.name}, ${
        sug.state ?? countryList[sug.country]
      }`;
      suggestion.addEventListener('click', async () => {
        suggestionBox.removeChild(suggestionBox.firstChild);
        locInput.value = '';
        localStorage.setItem('location', JSON.stringify(sug));
        getAndDisplayWeather(sug);
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

function handleSearchInput() {
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
