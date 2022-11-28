/* eslint-disable no-restricted-syntax */
import settings from "./settings";

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
import cog from "./img/cog-outline.svg";
import dots from "./img/dots-horizontal-circle-outline.svg";
import feelsLikeIcon from "./img/thermometer-lines.svg";
import humidityIcon from "./img/water-percent.svg";
import sunsetIcon from "./img/weather-sunset-down.svg";
import sunriseIcon from "./img/weather-sunset-up.svg";
import windIcon from "./img/weather-windy.svg";
import cloudinessIcon from "./img/cloud-percent-outline.svg";

let newPage = true;

const settingsContainer = document.querySelector(".settings-container");
settingsContainer.appendChild(settings);

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
const siteWrapper = document.querySelector(".site-wrapper");
siteWrapper.append(
  gradientDay,
  gradientCloud,
  gradientRain,
  gradientNight,
  gradientNightCloud
);

const gradients = document.querySelectorAll(".gradient");
const gradientsArray = [...gradients];

const currentWeatherContainer = document.querySelector(".current-weather");
const forecastContainer = document.querySelector(".forecast");

const searchIcon = document.querySelector(".search-icon");
const searchIconImage = new Image();
searchIconImage.src = magGlass;
searchIcon.appendChild(searchIconImage);

const cogIcon = document.querySelector(".cog-icon");
const cogIconImage = new Image();
cogIconImage.src = cog;
cogIcon.appendChild(cogIconImage);

const cogIconContainer = document.querySelector(".cog-icon-container");
const settingsSlide = document.querySelector(".settings");
cogIconContainer.addEventListener("click", () => {
  settingsSlide.classList.toggle("hidden");
});

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

function createMoreInfo(data) {
  const unitsToggle = document.querySelector("#units-toggle");

  const list = document.createElement("ul");

  const feelsLike = document.createElement("li");
  const feelsLikeImg = new Image();
  feelsLikeImg.src = feelsLikeIcon;
  const feelsLikeText = document.createElement("span");
  feelsLikeText.innerText = "Feels like";
  const feelsLikeValue = document.createElement("span");
  feelsLikeValue.innerText = `${Math.floor(data.main.feels_like)}°`;
  feelsLike.append(feelsLikeImg, feelsLikeText, feelsLikeValue);

  const humidity = document.createElement("li");
  const humidityImg = new Image();
  humidityImg.src = humidityIcon;
  const humidityText = document.createElement("span");
  humidityText.innerText = "Humidity";
  const humidityValue = document.createElement("span");
  humidityValue.innerText = `${data.main.humidity}%`;
  humidity.append(humidityImg, humidityText, humidityValue);

  const cloudiness = document.createElement("li");
  const cloudinessImg = new Image();
  cloudinessImg.src = cloudinessIcon;
  const cloudinessText = document.createElement("span");
  cloudinessText.innerText = "Cloudiness";
  const cloudinessValue = document.createElement("span");
  cloudinessValue.innerText = `${data.clouds.all}%`;
  cloudiness.append(cloudinessImg, cloudinessText, cloudinessValue);

  const wind = document.createElement("li");
  const windImg = new Image();
  windImg.src = windIcon;
  const windText = document.createElement("span");
  windText.innerText = "Wind";
  const windValue = document.createElement("span");
  // needs to change based on units
  windValue.innerText = `${Math.floor(
    unitsToggle.checked ? data.wind.speed * 3.6 : data.wind.speed
  )} ${unitsToggle.checked ? "km/h" : "mph"}`;
  wind.append(windImg, windText, windValue);

  const sunrise = document.createElement("li");
  const sunriseImg = new Image();
  sunriseImg.src = sunriseIcon;
  const sunriseText = document.createElement("span");
  sunriseText.innerText = "Sunrise";
  const sunriseValue = document.createElement("span");
  sunriseValue.innerText = `${data.sunrise}`;
  sunrise.append(sunriseImg, sunriseText, sunriseValue);

  const sunset = document.createElement("li");
  const sunsetImg = new Image();
  sunsetImg.src = sunsetIcon;
  const sunsetText = document.createElement("span");
  sunsetText.innerText = "Sunset";
  const sunsetValue = document.createElement("span");
  sunsetValue.innerText = `${data.sunset}`;
  sunset.append(sunsetImg, sunsetText, sunsetValue);

  list.append(feelsLike, humidity, cloudiness, wind, sunrise, sunset);

  list.classList.add("more-info-list");

  return list;
}

function renderCurrentWeather({ current }) {

  if (newPage) {
    const locationInput = document.querySelector(".location-input");
    locationInput.classList.add("post");
    newPage = false;
  }

  const currentWeatherDisplay = document.createElement("div");
  currentWeatherDisplay.classList.add("current-weather-display");

  const location = document.createElement("div");
  location.innerText = current.locationName;
  location.classList.add("current-location");

  const temp = document.createElement("div");
  temp.classList.add("current-temp");
  temp.innerText = `${Math.floor(current.main.temp)}°`;

  const moreInfoList = createMoreInfo(current);

  const moreInfo = document.createElement("button");
  moreInfo.classList.add("more-info");
  const moreInfoIcon = new Image();
  moreInfoIcon.src = dots;
  moreInfo.appendChild(moreInfoIcon);
  moreInfo.addEventListener("click", () => {
    if (moreInfoList.style.maxHeight) {
      moreInfoList.style.maxHeight = null;
    } else {
      moreInfoList.style.maxHeight = moreInfoList.scrollHeight + "px";
    }
  });

  const icon = document.createElement("div");
  icon.classList.add("current-weather-icon");
  const iconSVG = new Image();
  iconSVG.classList.add("icon");
  iconSVG.src = selectIcon(current.weather[0].icon);
  icon.append(iconSVG, moreInfo);

  const description = document.createElement("div");
  description.classList.add("current-description");
  description.innerText = current.weather[0].description;

  const background = selectBackground(current.weather[0].icon);
  if (background === gradientCloud) {
    siteWrapper.className = "site-wrapper cloud";
  } else {
    siteWrapper.className = "site-wrapper";
  }
  for (const gradient of gradientsArray) {
    if (background === gradient) {
      gradient.style.opacity = 1;
    } else {
      gradient.style.opacity = 0;
    }
  }
  currentWeatherDisplay.append(location, temp, description, icon, moreInfoList);
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
