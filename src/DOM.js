/* eslint-disable no-restricted-syntax */
import sun from "./img/sun.svg";
import clearNight from "./img/clear-night.svg";
import partialClouds from "./img/partial-clouds.svg";
import partialCloudsNight from "./img/cloudy-night.svg";
import cloud from "./img/cloud.svg";
import brokenCloud from "./img/broken-clouds.svg";
import rain from "./img/clouds-rain.svg";
import sunRain from "./img/sun-rain.svg";
import thunder from "./img/thunder.svg";
import snow from "./img/snow.svg";
import mist from "./img/mist.svg";
import magGlass from "./img/magnify.svg";

const gradientDay = document.createElement("div");
gradientDay.classList.add("gradient", "day");
const gradientCloud = document.createElement("div");
gradientCloud.classList.add("gradient", "cloud");
const gradientRain = document.createElement("div");
gradientRain.classList.add("gradient", "rain");
const gradientNight = document.createElement("div");
gradientNight.classList.add("gradient", "night");
const gradientNightCloud = document.createElement("div");
gradientNightCloud.classList.add("gradient", "night-cloud");
document.body.append(
  gradientDay,
  gradientCloud,
  gradientRain,
  gradientNight,
  gradientNightCloud
);

const gradients = document.querySelectorAll(".gradient");
const gradientsArray = [...gradients];
console.log(gradientsArray);

const currentWeatherContainer = document.querySelector(".current-weather");
const forecastContainer = document.querySelector(".forecast");

const searchIcon = document.querySelector(".search-icon");
const searchIconImage = new Image();
searchIconImage.src = magGlass;
searchIcon.appendChild(searchIconImage);

function selectIcon(code) {
  let source;
  switch (code) {
    case "01d":
      source = sun;
      break;
    case "01n":
      source = clearNight;
      break;
    case "02d":
      source = partialClouds;
      break;
    case "02n":
      source = partialCloudsNight;
      break;
    case "03d":
    case "03n":
      source = cloud;
      break;
    case "04d":
    case "04n":
      source = brokenCloud;
      break;
    case "09d":
    case "09n":
    case "10n":
      source = rain;
      break;
    case "10d":
      source = sunRain;
      break;
    case "11d":
    case "11n":
      source = thunder;
      break;
    case "13d":
    case "13n":
      source = snow;
      break;
    case "50d":
    case "50n":
      source = mist;
      break;
    default:
      source = sun;
      break;
  }
  return source;
}

function selectBackground(code) {
  let bg;
  switch (code) {
    case "01d":
    case "02d":
      bg = gradientDay;
      break;
    case "01n":
      bg = gradientNight;
      break;
    case "03d":
    case "04d":
    case "13d":
    case "50d":
      bg = gradientCloud;
      break;
    case "02n":
    case "03n":
    case "04n":
    case "13n":
    case "50n":
      bg = gradientNightCloud;
      break;
    case "09d":
    case "09n":
    case "10n":
    case "10d":
    case "11d":
    case "11n":
      bg = gradientRain;
      break;
    default:
      bg = "";
  }
  return bg;
}

function clearPage() {
  if (currentWeatherContainer.firstChild) {
    currentWeatherContainer.removeChild(currentWeatherContainer.firstChild);
  }
  if (forecastContainer.firstChild) {
    forecastContainer.removeChild(forecastContainer.firstChild);
  }
}

function renderCurrentWeather({ current }) {
  const currentWeatherDisplay = document.createElement("div");
  currentWeatherDisplay.classList.add("current-weather-display");

  const location = document.createElement("div");
  location.innerText = current.locationName;
  location.classList.add("current-location");

  const temp = document.createElement("div");
  temp.classList.add("current-temp");
  temp.innerText = `${Math.floor(current.main.temp)}°`;

  const icon = document.createElement("div");
  icon.classList.add("current-weather-icon");
  const iconSVG = new Image();
  iconSVG.classList.add("icon");
  iconSVG.src = selectIcon(current.weather[0].icon);
  icon.appendChild(iconSVG);

  const description = document.createElement("div");
  description.classList.add("current-description");
  description.innerText = current.weather[0].description;

  const background = selectBackground(current.weather[0].icon);
  if (background === gradientCloud) {
    document.body.className = "cloud";
  } else {
    document.body.className = "";
  }
  for (const gradient of gradientsArray) {
    if (background === gradient) {
      gradient.style.opacity = 1;
    } else {
      gradient.style.opacity = 0;
    }
  }
  currentWeatherDisplay.append(location, temp, description, icon);
  return currentWeatherDisplay;
}

function renderForecast({ forecast }) {
  const forecastDisplay = document.createElement("div");
  forecastDisplay.classList.add("forecast-display");
  for (const day in forecast) {
    if (Object.prototype.hasOwnProperty.call(forecast, day)) {
      const dayDisplay = document.createElement("div");
      dayDisplay.classList.add("day-display");

      const dayTitle = document.createElement("div");
      dayTitle.classList.add("day-title");
      dayTitle.innerText = day;
      dayDisplay.appendChild(dayTitle);

      const icon = document.createElement("div");
      icon.classList.add("day-icon");
      const iconSVG = new Image();
      iconSVG.classList.add("icon");
      iconSVG.src = selectIcon(forecast[day].icon);
      icon.appendChild(iconSVG);

      const lowHigh = document.createElement("div");
      lowHigh.classList.add("low-high");
      const low = document.createElement("span");
      const high = document.createElement("span");
      low.innerText = `L: ${forecast[day].low}°`;
      high.innerText = `H: ${forecast[day].high}°`;
      lowHigh.append(low, high);

      dayDisplay.append(dayTitle, icon, lowHigh);

      forecastDisplay.appendChild(dayDisplay);
    }
  }
  return forecastDisplay;
}

export default function renderWeatherDetails(info) {
  clearPage();
  currentWeatherContainer.appendChild(renderCurrentWeather(info));
  forecastContainer.appendChild(renderForecast(info));
}
