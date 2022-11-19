/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderWeatherDetails)
/* harmony export */ });
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./src/settings.js");
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sun.svg */ "./src/img/sun.svg");
/* harmony import */ var _img_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/clear-night.svg */ "./src/img/clear-night.svg");
/* harmony import */ var _img_partial_clouds_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/partial-clouds.svg */ "./src/img/partial-clouds.svg");
/* harmony import */ var _img_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cloudy-night.svg */ "./src/img/cloudy-night.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cloud.svg */ "./src/img/cloud.svg");
/* harmony import */ var _img_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/broken-clouds.svg */ "./src/img/broken-clouds.svg");
/* harmony import */ var _img_clouds_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/clouds-rain.svg */ "./src/img/clouds-rain.svg");
/* harmony import */ var _img_sun_rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/sun-rain.svg */ "./src/img/sun-rain.svg");
/* harmony import */ var _img_thunder_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/thunder.svg */ "./src/img/thunder.svg");
/* harmony import */ var _img_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/snow.svg */ "./src/img/snow.svg");
/* harmony import */ var _img_mist_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/mist.svg */ "./src/img/mist.svg");
/* harmony import */ var _img_magnify_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/magnify.svg */ "./src/img/magnify.svg");
/* harmony import */ var _img_cog_outline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/cog-outline.svg */ "./src/img/cog-outline.svg");
/* eslint-disable no-restricted-syntax */














const settingsContainer = document.querySelector('.settings-container');
settingsContainer.appendChild(_settings_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
document.body.append(gradientDay, gradientCloud, gradientRain, gradientNight, gradientNightCloud);
const gradients = document.querySelectorAll(".gradient");
const gradientsArray = [...gradients];
const currentWeatherContainer = document.querySelector(".current-weather");
const forecastContainer = document.querySelector(".forecast");
const searchIcon = document.querySelector(".search-icon");
const searchIconImage = new Image();
searchIconImage.src = _img_magnify_svg__WEBPACK_IMPORTED_MODULE_12__;
searchIcon.appendChild(searchIconImage);
const cogIcon = document.querySelector(".cog-icon");
const cogIconImage = new Image();
cogIconImage.src = _img_cog_outline_svg__WEBPACK_IMPORTED_MODULE_13__;
cogIcon.appendChild(cogIconImage);
const cogIconContainer = document.querySelector('.cog-icon-container');
const settingsSlide = document.querySelector('.settings');
cogIconContainer.addEventListener('click', () => {
  settingsSlide.classList.toggle('hidden');
});
function selectIcon(code) {
  let source;
  switch (code) {
    case "01d":
      source = _img_sun_svg__WEBPACK_IMPORTED_MODULE_1__;
      break;
    case "01n":
      source = _img_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case "02d":
      source = _img_partial_clouds_svg__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case "02n":
      source = _img_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_4__;
      break;
    case "03d":
    case "03n":
      source = _img_cloud_svg__WEBPACK_IMPORTED_MODULE_5__;
      break;
    case "04d":
    case "04n":
      source = _img_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_6__;
      break;
    case "09d":
    case "09n":
    case "10n":
      source = _img_clouds_rain_svg__WEBPACK_IMPORTED_MODULE_7__;
      break;
    case "10d":
      source = _img_sun_rain_svg__WEBPACK_IMPORTED_MODULE_8__;
      break;
    case "11d":
    case "11n":
      source = _img_thunder_svg__WEBPACK_IMPORTED_MODULE_9__;
      break;
    case "13d":
    case "13n":
      source = _img_snow_svg__WEBPACK_IMPORTED_MODULE_10__;
      break;
    case "50d":
    case "50n":
      source = _img_mist_svg__WEBPACK_IMPORTED_MODULE_11__;
      break;
    default:
      source = _img_sun_svg__WEBPACK_IMPORTED_MODULE_1__;
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
function renderCurrentWeather(_ref) {
  let {
    current
  } = _ref;
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
function renderForecast(_ref2) {
  let {
    forecast
  } = _ref2;
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
function renderWeatherDetails(info) {
  clearPage();
  currentWeatherContainer.appendChild(renderCurrentWeather(info));
  forecastContainer.appendChild(renderForecast(info));
}

/***/ }),

/***/ "./src/country.js":
/*!************************!*\
  !*** ./src/country.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryList": () => (/* binding */ countryList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countrySelectInput = document.createElement('li');
const countrySelectLabel = document.createElement("label");
const countrySelect = document.createElement("input");
const countries = document.createElement("datalist");
countrySelectLabel.setAttribute("for", "country-select");
countrySelectLabel.innerText = 'Country';
countrySelect.setAttribute("type", "text");
countrySelect.setAttribute("name", "country-select");
countrySelect.setAttribute("id", "country-select");
countrySelect.setAttribute("list", "countries");
countries.setAttribute("id", "countries");
countrySelectInput.append(countrySelectLabel, countrySelect, countries);
const countryList = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas (the)",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia (Plurinational State of)",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory (the)",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands (the)",
  CF: "Central African Republic (the)",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands (the)",
  CO: "Colombia",
  KM: "Comoros (the)",
  CD: "Congo (the Democratic Republic of the)",
  CG: "Congo (the)",
  CK: "Cook Islands (the)",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic (the)",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands (the) [Malvinas]",
  FO: "Faroe Islands (the)",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories (the)",
  GA: "Gabon",
  GM: "Gambia (the)",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See (the)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran (Islamic Republic of)",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea (the Democratic People's Republic of)",
  KR: "Korea (the Republic of)",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic (the)",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands (the)",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia (Federated States of)",
  MD: "Moldova (the Republic of)",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands (the)",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger (the)",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands (the)",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines (the)",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Republic of North Macedonia",
  RO: "Romania",
  RU: "Russian Federation (the)",
  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan (the)",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands (the)",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates (the)",
  GB: "United Kingdom of Great Britain and Northern Ireland (the)",
  UM: "United States Minor Outlying Islands (the)",
  US: "United States of America (the)",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela (Bolivarian Republic of)",
  VN: "Viet Nam",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "Åland Islands"
};

// eslint-disable-next-line no-restricted-syntax
for (const country in countryList) {
  if (Object.prototype.hasOwnProperty.call(countryList, country)) {
    const opt = document.createElement("option");
    opt.setAttribute("value", country);
    opt.innerText = countryList[country];
    countries.appendChild(opt);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countrySelectInput);

/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ retrieveWeatherData)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */

async function retrieveWeatherData(_ref) {
  let {
    lat,
    lon
  } = _ref;
  // const fetchPrefix = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  const data = {};
  const fetchPrefix = "https://api.openweathermap.org/data/2.5/";
  const middle = `lat=${lat}&lon=${lon}`;
  const fetchSuffix = "&appid=921cfd876fc7bdd1768497c18dc1bf81&units=imperial";
  const currentWeather = await fetch(`${fetchPrefix}/weather?${middle}${fetchSuffix}`);
  const fiveDayWeather = await fetch(`${fetchPrefix}/forecast?${middle}${fetchSuffix}`);
  data.current = await currentWeather.json();
  data.fiveDay = await fiveDayWeather.json();
  data.forecast = analyzeForecast(data.fiveDay);
  return data;
}
function findMostCommon(array) {
  let highestCount = 0;
  let mostCommon;
  for (const item of array) {
    let count = 0;
    for (const otherItem of array) {
      if (item === otherItem) {
        count += 1;
      }
    }
    if (count > highestCount) {
      highestCount = count;
      mostCommon = item;
    }
  }
  return mostCommon;
}
function translateDay(num) {
  let day;
  switch (num) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "no day";
  }
  return day;
}
function analyzeForecast(data) {
  const array = data.list;
  const arrayOfDays = array.reduce((a, b) => {
    if (a.length) {
      const lastDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(a[a.length - 1][0].dt_txt);
      const thisDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(b.dt_txt);
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(lastDate, thisDate)) {
        a[a.length - 1].push(b);
      } else {
        a.push([b]);
      }
    } else {
      a.push([b]);
    }
    return a;
  }, []);
  const fiveDayForecast = {};
  for (const day of arrayOfDays) {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(day[0].dt_txt))) {
      continue;
    }
    let dayOfWeek;
    let minTemp;
    let maxTemp;
    const description = [];
    const icon = [];
    for (const threeHour of day) {
      if (!dayOfWeek) {
        dayOfWeek = translateDay((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(threeHour.dt_txt)));
      }
      if (!minTemp || threeHour.main.temp_min < minTemp) {
        minTemp = Math.floor(threeHour.main.temp_min);
      }
      if (!maxTemp || threeHour.main.temp_max > maxTemp) {
        maxTemp = Math.floor(threeHour.main.temp_max);
      }
      if (threeHour.weather[0].icon.includes("d")) {
        description.push(threeHour.weather[0].description);
        icon.push(threeHour.weather[0].icon);
      }
    }
    fiveDayForecast[dayOfWeek] = {
      high: maxTemp,
      low: minTemp,
      description: findMostCommon(description),
      icon: findMostCommon(icon)
    };
  }
  return fiveDayForecast;
}

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _locationSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationSelect */ "./src/locationSelect.js");

const locInput = document.querySelector("#loc");
function init() {
  locInput.addEventListener("input", () => {
    (0,_locationSelect__WEBPACK_IMPORTED_MODULE_0__.handleSearchInput)();
  });
}
;

/***/ }),

/***/ "./src/locationSelect.js":
/*!*******************************!*\
  !*** ./src/locationSelect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findLocation": () => (/* binding */ findLocation),
/* harmony export */   "handleSearchInput": () => (/* binding */ handleSearchInput)
/* harmony export */ });
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ "./src/fetchWeather.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country */ "./src/country.js");



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
  return new Promise(resolve => setTimeout(resolve, ms));
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
    response.forEach(sug => {
      const suggestion = document.createElement("button");
      suggestion.setAttribute("type", "button");
      suggestion.classList.add("loc-suggestion");
      suggestion.innerText = `${sug.name}, ${sug.state ?? _country__WEBPACK_IMPORTED_MODULE_2__.countryList[sug.country]}`;
      suggestion.addEventListener("click", async () => {
        const weatherData = await (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(sug);
        weatherData.current.locationName = sug.name;
        console.log(weatherData);
        suggestionBox.removeChild(suggestionBox.firstChild);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
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


/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _country_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.js */ "./src/country.js");
/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.js */ "./src/states.js");
/* harmony import */ var _img_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/close-circle-outline.svg */ "./src/img/close-circle-outline.svg");



const countryInputField = [..._country_js__WEBPACK_IMPORTED_MODULE_0__["default"].children][1];
const stateInputField = [..._states_js__WEBPACK_IMPORTED_MODULE_1__["default"].children][1];
function addClearButton(element) {
  const closeIconImage = new Image();
  closeIconImage.src = _img_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.classList.add('clear-button');
  btn.appendChild(closeIconImage);
  const inputField = [...element.children][1];
  btn.addEventListener('click', () => {
    if (element === _country_js__WEBPACK_IMPORTED_MODULE_0__["default"] && inputField.value === 'US') {
      inputField.value = '';
      stateInputField.value = '';
      _states_js__WEBPACK_IMPORTED_MODULE_1__["default"].classList.add('no-display');
    }
  });
  element.appendChild(btn);
}
const settingsForm = document.createElement('form');
settingsForm.classList.add('settings-form');
const advancedSearch = document.createElement('div');
advancedSearch.classList.add('advanced-search');
const advancedSearchTitle = document.createElement('h5');
advancedSearchTitle.innerText = 'Advanced Search';
const advancedSearchList = document.createElement('ul');
advancedSearchList.append(_country_js__WEBPACK_IMPORTED_MODULE_0__["default"], _states_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
countryInputField.addEventListener('input', () => {
  if (countryInputField.value === 'US') {
    _states_js__WEBPACK_IMPORTED_MODULE_1__["default"].classList.remove('no-display');
  } else {
    stateInputField.value = '';
    _states_js__WEBPACK_IMPORTED_MODULE_1__["default"].classList.add('no-display');
  }
});
addClearButton(_country_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
addClearButton(_states_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
advancedSearch.append(advancedSearchTitle, advancedSearchList);
settingsForm.append(advancedSearch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsForm);

/***/ }),

/***/ "./src/states.js":
/*!***********************!*\
  !*** ./src/states.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const statesSelectInput = document.createElement('li');
statesSelectInput.classList.add('no-display');
const statesSelectLabel = document.createElement("label");
const statesSelect = document.createElement("input");
const states = document.createElement("datalist");
statesSelectLabel.setAttribute("for", "states-select");
statesSelectLabel.innerText = 'State';
statesSelect.setAttribute("type", "text");
statesSelect.setAttribute("name", "states-select");
statesSelect.setAttribute("id", "states-select");
statesSelect.setAttribute("list", "states");
states.setAttribute("id", "states");
statesSelectInput.append(statesSelectLabel, statesSelect, states);
const statesList = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
};

// eslint-disable-next-line no-restricted-syntax
for (const state in statesList) {
  if (Object.prototype.hasOwnProperty.call(statesList, state)) {
    const opt = document.createElement("option");
    opt.setAttribute("value", state);
    opt.innerText = statesList[state];
    states.appendChild(opt);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statesSelectInput);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}; */\n\n:root {\n  --settings-width: min(420px, 100vw);\n  --settings-height: min(900px, 100vh);\n\n  --background: #282a36;\n  --start-screen-bg: #6273a4f8;\n  --subtle: #6272a4;\n  --pink: #ff79c6;\n  --green: #50fa7b;\n  --yellow: #f1fa8c;\n  --blue: #8be9fd;\n  --plain: #f8f8f2;\n\n  --day-sky1: #4687d8;\n  --day-sky2: #7fafde;\n\n  --cloud1: #f5f5f7;\n  --cloud2: #a1b5c7;\n  --cloud-font: #3b3b3b;\n\n  --rain1: #51606b;\n  --rain2: #97999d;\n\n  --night1: #0b192b;\n  --night2: #013a60;\n  --night-cloud: hsl(204, 24%, 30%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  /* background-color: var(--background); */\n  background-color: #013a6000;\n  color: var(--plain);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5vh;\n  overflow: hidden;\n}\n\n.gradient {\n  position: absolute;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.gradient.day {\n  opacity: 1;\n  background-image: linear-gradient(var(--day-sky1), var(--day-sky2));\n}\n\n.gradient.cloud {\n  background-image: linear-gradient(var(--cloud1), var(--cloud2));\n}\n\nbody.cloud {\n  color: var(--cloud-font);\n}\n\n.gradient.rain {\n  background-image: linear-gradient(var(--rain1), var(--rain2));\n}\n\n.gradient.night {\n  background-image: linear-gradient(var(--night1), var(--night2));\n}\n\n.gradient.night-cloud {\n  background-image: linear-gradient(var(--night1), var(--night-cloud), var(--night2));\n\n}\n\n.location-input {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  list-style: none;\n}\n\n#loc {\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  /* width: 150px; */\n  width: 100%;\n  border-radius: 20px;\n  padding: 4px 8px;\n  font-size: 90%;\n  background-color: rgb(232, 240, 254);\n  /* position: relative; */\n}\n\n#loc:focus {\n  outline: 1px solid lightblue;\n}\n\n.loc-input-field {\n  position: relative;\n  min-width: 30px;\n  /* min-width: max-content; */\n  container-type: inline-size;\n  transition: all 0.3s;\n  opacity: 0.3;\n}\n\n.loc-input-field:hover,\n.loc-input-field:has(#loc:focus) {\n  min-width: 150px;\n  opacity: 1;\n}\n\n.loc-input-field:hover .suggestion-box-container,\n.loc-input-field:has(#loc:focus) .suggestion-box-container {\n  display: block;\n}\n\n\n.search-icon {\n  background-color: rgb(232, 240, 254);\n  position: absolute;\n  height: 18px;\n  right: 5px;\n  top: 4px;\n}\n\n.search-icon img {\n  height: 100%;\n  width: 100%;\n}\n\n@container (max-width: 20px) {\n  .search-icon {\n    position: absolute;\n    background-color: white;\n    width: 30px;\n    height: 1.2rem;\n    top:0;\n    right:0;\n    left:0;\n    bottom: 0;\n    border-radius: 20px;\n  }\n\n}\n\n.country-input {\n  display: none;\n  visibility: hidden;\n  width: 100%;\n}\n\n.suggestion-box-container {\n  position: relative;\n  display: none;\n}\n\n.suggestion-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width:200px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.loc-suggestion {\n  width: 100%;\n  background-color: white;\n  color: black;\n  padding: 5px 8px;\n  appearance: none;\n  border: none;\n  text-align: left;\n}\n\n.loc-suggestion:focus {\n  outline: none;\n  background-color: hsl(210, 59%, 90%);\n  border-left: 3px solid var(--day-sky2);\n}\n\n.loc-suggestion:hover {\n  background-color: hsl(210, 59%, 90%);\n}\n\n.current-weather .current-weather-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.current-location {\n  font-size: 1.5rem;\n  font-weight: 200;\n  padding: 0;\n  margin: 0;\n}\n\n.current-temp {\n  font-size: 4rem;\n  font-weight: 100;\n  margin-right: -10px;\n}\n\n.current-description {\n  font-size: 1rem;\n  font-weight: 200;\n}\n\n.current-weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  height: 200px;\n}\n\n.icon {\n  height: 80%;\n}\n\n.forecast-display {\n  display: flex;\n  gap: 10px;\n}\n\n.day-display {\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  width: 15vw;\n  align-items: center;\n}\n\n.day-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n}\n\n.low-high {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 200;\n}\n\n@media only screen and (max-width: 600px) {\n  .forecast-display {\n    flex-direction: column;\n    width: 80vw;\n    gap: 0;\n  }\n\n  .day-display {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 20% 45% 35%;\n    border-bottom: 0.5px solid var(--day-sky1);\n    padding: 8px 0px;\n  }\n\n  .day-icon {\n    height: 30px;\n  }\n\n  .low-high {\n    flex-direction: row;\n    gap: 16px;\n  }\n}\n\n.settings {\n  position: absolute;\n  right:0;\n  top: 0;\n  background-color: rgba(232, 240, 254, 0.95);\n  width: var(--settings-width);\n  height: var(--settings-height);\n  transition: 0.3s;\n  color: var(--cloud-font)\n}\n\n.settings.hidden {\n  translate: var(--settings-width);\n}\n\n.cog-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  margin-top: 8px;\n  width: 25px;\n  height: 30px;\n  background-color: rgb(232, 240, 254);\n  opacity: 0.3;\n  border-radius: 20px 0px 0px 20px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.settings.hidden .cog-icon-container {\n  translate: -25px;\n}\n\n.cog-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.settings-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.settings-container input {\n\n}\n\n.settings-container li {\n  display: grid;\n  grid-template: 1fr auto / 1fr 20px;\n}\n\n.settings-container li label {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.settings-container li input {\n  grid-area: 2 / 1 / 3 / 2;\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  border-radius: 10px;\n  width: 100px;\n  padding: 4px 6px;\n  cursor: pointer;\n}\n\n.settings-container li input:focus {\n  outline: 1px solid lightblue;\n}\n\n.settings-container li button {\n  grid-area: 2 / 2 / 3 / 4;\n  appearance: none;\n  border: none;\n  background-color: #ffffff00;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 8px;\n  opacity: 0.5;\n}\n\n.settings-container li button:hover {\n  opacity: 1;\n}\n\n\n\n.settings-container .no-display {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}; */\n\n:root {\n  --settings-width: min(420px, 100vw);\n  --settings-height: min(900px, 100vh);\n\n  --background: #282a36;\n  --start-screen-bg: #6273a4f8;\n  --subtle: #6272a4;\n  --pink: #ff79c6;\n  --green: #50fa7b;\n  --yellow: #f1fa8c;\n  --blue: #8be9fd;\n  --plain: #f8f8f2;\n\n  --day-sky1: #4687d8;\n  --day-sky2: #7fafde;\n\n  --cloud1: #f5f5f7;\n  --cloud2: #a1b5c7;\n  --cloud-font: #3b3b3b;\n\n  --rain1: #51606b;\n  --rain2: #97999d;\n\n  --night1: #0b192b;\n  --night2: #013a60;\n  --night-cloud: hsl(204, 24%, 30%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  /* background-color: var(--background); */\n  background-color: #013a6000;\n  color: var(--plain);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5vh;\n  overflow: hidden;\n}\n\n.gradient {\n  position: absolute;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.gradient.day {\n  opacity: 1;\n  background-image: linear-gradient(var(--day-sky1), var(--day-sky2));\n}\n\n.gradient.cloud {\n  background-image: linear-gradient(var(--cloud1), var(--cloud2));\n}\n\nbody.cloud {\n  color: var(--cloud-font);\n}\n\n.gradient.rain {\n  background-image: linear-gradient(var(--rain1), var(--rain2));\n}\n\n.gradient.night {\n  background-image: linear-gradient(var(--night1), var(--night2));\n}\n\n.gradient.night-cloud {\n  background-image: linear-gradient(var(--night1), var(--night-cloud), var(--night2));\n\n}\n\n.location-input {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  list-style: none;\n}\n\n#loc {\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  /* width: 150px; */\n  width: 100%;\n  border-radius: 20px;\n  padding: 4px 8px;\n  font-size: 90%;\n  background-color: rgb(232, 240, 254);\n  /* position: relative; */\n}\n\n#loc:focus {\n  outline: 1px solid lightblue;\n}\n\n.loc-input-field {\n  position: relative;\n  min-width: 30px;\n  /* min-width: max-content; */\n  container-type: inline-size;\n  transition: all 0.3s;\n  opacity: 0.3;\n}\n\n.loc-input-field:hover,\n.loc-input-field:has(#loc:focus) {\n  min-width: 150px;\n  opacity: 1;\n}\n\n.loc-input-field:hover .suggestion-box-container,\n.loc-input-field:has(#loc:focus) .suggestion-box-container {\n  display: block;\n}\n\n\n.search-icon {\n  background-color: rgb(232, 240, 254);\n  position: absolute;\n  height: 18px;\n  right: 5px;\n  top: 4px;\n}\n\n.search-icon img {\n  height: 100%;\n  width: 100%;\n}\n\n@container (max-width: 20px) {\n  .search-icon {\n    position: absolute;\n    background-color: white;\n    width: 30px;\n    height: 1.2rem;\n    top:0;\n    right:0;\n    left:0;\n    bottom: 0;\n    border-radius: 20px;\n  }\n\n}\n\n.country-input {\n  display: none;\n  visibility: hidden;\n  width: 100%;\n}\n\n.suggestion-box-container {\n  position: relative;\n  display: none;\n}\n\n.suggestion-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width:200px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.loc-suggestion {\n  width: 100%;\n  background-color: white;\n  color: black;\n  padding: 5px 8px;\n  appearance: none;\n  border: none;\n  text-align: left;\n}\n\n.loc-suggestion:focus {\n  outline: none;\n  background-color: hsl(210, 59%, 90%);\n  border-left: 3px solid var(--day-sky2);\n}\n\n.loc-suggestion:hover {\n  background-color: hsl(210, 59%, 90%);\n}\n\n.current-weather .current-weather-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.current-location {\n  font-size: 1.5rem;\n  font-weight: 200;\n  padding: 0;\n  margin: 0;\n}\n\n.current-temp {\n  font-size: 4rem;\n  font-weight: 100;\n  margin-right: -10px;\n}\n\n.current-description {\n  font-size: 1rem;\n  font-weight: 200;\n}\n\n.current-weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  height: 200px;\n}\n\n.icon {\n  height: 80%;\n}\n\n.forecast-display {\n  display: flex;\n  gap: 10px;\n}\n\n.day-display {\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  width: 15vw;\n  align-items: center;\n}\n\n.day-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n}\n\n.low-high {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 200;\n}\n\n@media only screen and (max-width: 600px) {\n  .forecast-display {\n    flex-direction: column;\n    width: 80vw;\n    gap: 0;\n  }\n\n  .day-display {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 20% 45% 35%;\n    border-bottom: 0.5px solid var(--day-sky1);\n    padding: 8px 0px;\n  }\n\n  .day-icon {\n    height: 30px;\n  }\n\n  .low-high {\n    flex-direction: row;\n    gap: 16px;\n  }\n}\n\n.settings {\n  position: absolute;\n  right:0;\n  top: 0;\n  background-color: rgba(232, 240, 254, 0.95);\n  width: var(--settings-width);\n  height: var(--settings-height);\n  transition: 0.3s;\n  color: var(--cloud-font)\n}\n\n.settings.hidden {\n  translate: var(--settings-width);\n}\n\n.cog-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  margin-top: 8px;\n  width: 25px;\n  height: 30px;\n  background-color: rgb(232, 240, 254);\n  opacity: 0.3;\n  border-radius: 20px 0px 0px 20px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.settings.hidden .cog-icon-container {\n  translate: -25px;\n}\n\n.cog-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.settings-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.settings-container input {\n\n}\n\n.settings-container li {\n  display: grid;\n  grid-template: 1fr auto / 1fr 20px;\n}\n\n.settings-container li label {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.settings-container li input {\n  grid-area: 2 / 1 / 3 / 2;\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  border-radius: 10px;\n  width: 100px;\n  padding: 4px 6px;\n  cursor: pointer;\n}\n\n.settings-container li input:focus {\n  outline: 1px solid lightblue;\n}\n\n.settings-container li button {\n  grid-area: 2 / 2 / 3 / 4;\n  appearance: none;\n  border: none;\n  background-color: #ffffff00;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 8px;\n  opacity: 0.5;\n}\n\n.settings-container li button:hover {\n  opacity: 1;\n}\n\n\n\n.settings-container .no-display {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/broken-clouds.svg":
/*!***********************************!*\
  !*** ./src/img/broken-clouds.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ed1cc80ba81a9103278.svg";

/***/ }),

/***/ "./src/img/clear-night.svg":
/*!*********************************!*\
  !*** ./src/img/clear-night.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "656a744711a6351f0a8c.svg";

/***/ }),

/***/ "./src/img/close-circle-outline.svg":
/*!******************************************!*\
  !*** ./src/img/close-circle-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bbf47780fb42aed09bf.svg";

/***/ }),

/***/ "./src/img/cloud.svg":
/*!***************************!*\
  !*** ./src/img/cloud.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2d54ace29a241821ca2.svg";

/***/ }),

/***/ "./src/img/clouds-rain.svg":
/*!*********************************!*\
  !*** ./src/img/clouds-rain.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4236146a569e571de9d4.svg";

/***/ }),

/***/ "./src/img/cloudy-night.svg":
/*!**********************************!*\
  !*** ./src/img/cloudy-night.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "373b64e00c8e97d53956.svg";

/***/ }),

/***/ "./src/img/cog-outline.svg":
/*!*********************************!*\
  !*** ./src/img/cog-outline.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57d3ca9af2612ee72754.svg";

/***/ }),

/***/ "./src/img/magnify.svg":
/*!*****************************!*\
  !*** ./src/img/magnify.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ }),

/***/ "./src/img/mist.svg":
/*!**************************!*\
  !*** ./src/img/mist.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d13cb46b4a87e72d6462.svg";

/***/ }),

/***/ "./src/img/partial-clouds.svg":
/*!************************************!*\
  !*** ./src/img/partial-clouds.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "175b8c755aee790dd3cd.svg";

/***/ }),

/***/ "./src/img/snow.svg":
/*!**************************!*\
  !*** ./src/img/snow.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f874183851743b9f661.svg";

/***/ }),

/***/ "./src/img/sun-rain.svg":
/*!******************************!*\
  !*** ./src/img/sun-rain.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b242f83ed3d8fa5d97a.svg";

/***/ }),

/***/ "./src/img/sun.svg":
/*!*************************!*\
  !*** ./src/img/sun.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "428ee93bd340561e9f42.svg";

/***/ }),

/***/ "./src/img/thunder.svg":
/*!*****************************!*\
  !*** ./src/img/thunder.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b18dbc676493a9cea59.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");


(0,_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUUxQmpELGlEQUFJLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb3VudHJ5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uU2VsZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0YXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzLmpzJztcbmltcG9ydCBzdW4gZnJvbSBcIi4vaW1nL3N1bi5zdmdcIjtcbmltcG9ydCBjbGVhck5pZ2h0IGZyb20gXCIuL2ltZy9jbGVhci1uaWdodC5zdmdcIjtcbmltcG9ydCBwYXJ0aWFsQ2xvdWRzIGZyb20gXCIuL2ltZy9wYXJ0aWFsLWNsb3Vkcy5zdmdcIjtcbmltcG9ydCBwYXJ0aWFsQ2xvdWRzTmlnaHQgZnJvbSBcIi4vaW1nL2Nsb3VkeS1uaWdodC5zdmdcIjtcbmltcG9ydCBjbG91ZCBmcm9tIFwiLi9pbWcvY2xvdWQuc3ZnXCI7XG5pbXBvcnQgYnJva2VuQ2xvdWQgZnJvbSBcIi4vaW1nL2Jyb2tlbi1jbG91ZHMuc3ZnXCI7XG5pbXBvcnQgcmFpbiBmcm9tIFwiLi9pbWcvY2xvdWRzLXJhaW4uc3ZnXCI7XG5pbXBvcnQgc3VuUmFpbiBmcm9tIFwiLi9pbWcvc3VuLXJhaW4uc3ZnXCI7XG5pbXBvcnQgdGh1bmRlciBmcm9tIFwiLi9pbWcvdGh1bmRlci5zdmdcIjtcbmltcG9ydCBzbm93IGZyb20gXCIuL2ltZy9zbm93LnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vaW1nL21pc3Quc3ZnXCI7XG5cbmltcG9ydCBtYWdHbGFzcyBmcm9tIFwiLi9pbWcvbWFnbmlmeS5zdmdcIjtcbmltcG9ydCBjb2cgZnJvbSBcIi4vaW1nL2NvZy1vdXRsaW5lLnN2Z1wiO1xuXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1jb250YWluZXInKTtcbnNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcblxuY29uc3QgZ3JhZGllbnREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZ3JhZGllbnREYXkuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50XCIsIFwiZGF5XCIpO1xuY29uc3QgZ3JhZGllbnRDbG91ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmFkaWVudENsb3VkLmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudFwiLCBcImNsb3VkXCIpO1xuY29uc3QgZ3JhZGllbnRSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmdyYWRpZW50UmFpbi5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnRcIiwgXCJyYWluXCIpO1xuY29uc3QgZ3JhZGllbnROaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmFkaWVudE5pZ2h0LmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudFwiLCBcIm5pZ2h0XCIpO1xuY29uc3QgZ3JhZGllbnROaWdodENsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmdyYWRpZW50TmlnaHRDbG91ZC5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnRcIiwgXCJuaWdodC1jbG91ZFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICBncmFkaWVudERheSxcbiAgZ3JhZGllbnRDbG91ZCxcbiAgZ3JhZGllbnRSYWluLFxuICBncmFkaWVudE5pZ2h0LFxuICBncmFkaWVudE5pZ2h0Q2xvdWRcbik7XG5cbmNvbnN0IGdyYWRpZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JhZGllbnRcIik7XG5jb25zdCBncmFkaWVudHNBcnJheSA9IFsuLi5ncmFkaWVudHNdO1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyXCIpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvblwiKTtcbmNvbnN0IHNlYXJjaEljb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuc2VhcmNoSWNvbkltYWdlLnNyYyA9IG1hZ0dsYXNzO1xuc2VhcmNoSWNvbi5hcHBlbmRDaGlsZChzZWFyY2hJY29uSW1hZ2UpO1xuXG5jb25zdCBjb2dJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2ctaWNvblwiKTtcbmNvbnN0IGNvZ0ljb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuY29nSWNvbkltYWdlLnNyYyA9IGNvZztcbmNvZ0ljb24uYXBwZW5kQ2hpbGQoY29nSWNvbkltYWdlKTtcblxuY29uc3QgY29nSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2ctaWNvbi1jb250YWluZXInKTtcbmNvbnN0IHNldHRpbmdzU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MnKTtcbmNvZ0ljb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNldHRpbmdzU2xpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KVxuXG5mdW5jdGlvbiBzZWxlY3RJY29uKGNvZGUpIHtcbiAgbGV0IHNvdXJjZTtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBcIjAxZFwiOlxuICAgICAgc291cmNlID0gc3VuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAxblwiOlxuICAgICAgc291cmNlID0gY2xlYXJOaWdodDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIwMmRcIjpcbiAgICAgIHNvdXJjZSA9IHBhcnRpYWxDbG91ZHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDJuXCI6XG4gICAgICBzb3VyY2UgPSBwYXJ0aWFsQ2xvdWRzTmlnaHQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDNkXCI6XG4gICAgY2FzZSBcIjAzblwiOlxuICAgICAgc291cmNlID0gY2xvdWQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDRkXCI6XG4gICAgY2FzZSBcIjA0blwiOlxuICAgICAgc291cmNlID0gYnJva2VuQ2xvdWQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDlkXCI6XG4gICAgY2FzZSBcIjA5blwiOlxuICAgIGNhc2UgXCIxMG5cIjpcbiAgICAgIHNvdXJjZSA9IHJhaW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTBkXCI6XG4gICAgICBzb3VyY2UgPSBzdW5SYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjExZFwiOlxuICAgIGNhc2UgXCIxMW5cIjpcbiAgICAgIHNvdXJjZSA9IHRodW5kZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTNkXCI6XG4gICAgY2FzZSBcIjEzblwiOlxuICAgICAgc291cmNlID0gc25vdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI1MGRcIjpcbiAgICBjYXNlIFwiNTBuXCI6XG4gICAgICBzb3VyY2UgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHNvdXJjZSA9IHN1bjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEJhY2tncm91bmQoY29kZSkge1xuICBsZXQgYmc7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgXCIwMWRcIjpcbiAgICBjYXNlIFwiMDJkXCI6XG4gICAgICBiZyA9IGdyYWRpZW50RGF5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAxblwiOlxuICAgICAgYmcgPSBncmFkaWVudE5pZ2h0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAzZFwiOlxuICAgIGNhc2UgXCIwNGRcIjpcbiAgICBjYXNlIFwiMTNkXCI6XG4gICAgY2FzZSBcIjUwZFwiOlxuICAgICAgYmcgPSBncmFkaWVudENsb3VkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAyblwiOlxuICAgIGNhc2UgXCIwM25cIjpcbiAgICBjYXNlIFwiMDRuXCI6XG4gICAgY2FzZSBcIjEzblwiOlxuICAgIGNhc2UgXCI1MG5cIjpcbiAgICAgIGJnID0gZ3JhZGllbnROaWdodENsb3VkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjA5ZFwiOlxuICAgIGNhc2UgXCIwOW5cIjpcbiAgICBjYXNlIFwiMTBuXCI6XG4gICAgY2FzZSBcIjEwZFwiOlxuICAgIGNhc2UgXCIxMWRcIjpcbiAgICBjYXNlIFwiMTFuXCI6XG4gICAgICBiZyA9IGdyYWRpZW50UmFpbjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiZyA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIGJnO1xufVxuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gIGlmIChjdXJyZW50V2VhdGhlckNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudFdlYXRoZXJDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgaWYgKGZvcmVjYXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JlY2FzdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih7IGN1cnJlbnQgfSkge1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gY3VycmVudC5sb2NhdGlvbk5hbWU7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWxvY2F0aW9uXCIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXBcIik7XG4gIHRlbXAuaW5uZXJUZXh0ID0gYCR7TWF0aC5mbG9vcihjdXJyZW50Lm1haW4udGVtcCl9wrBgO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXdlYXRoZXItaWNvblwiKTtcbiAgY29uc3QgaWNvblNWRyA9IG5ldyBJbWFnZSgpO1xuICBpY29uU1ZHLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBpY29uU1ZHLnNyYyA9IHNlbGVjdEljb24oY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuICBpY29uLmFwcGVuZENoaWxkKGljb25TVkcpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBiYWNrZ3JvdW5kID0gc2VsZWN0QmFja2dyb3VuZChjdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gIGlmIChiYWNrZ3JvdW5kID09PSBncmFkaWVudENsb3VkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcImNsb3VkXCI7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xuICB9XG4gIGZvciAoY29uc3QgZ3JhZGllbnQgb2YgZ3JhZGllbnRzQXJyYXkpIHtcbiAgICBpZiAoYmFja2dyb3VuZCA9PT0gZ3JhZGllbnQpIHtcbiAgICAgIGdyYWRpZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmFkaWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZChsb2NhdGlvbiwgdGVtcCwgZGVzY3JpcHRpb24sIGljb24pO1xuICByZXR1cm4gY3VycmVudFdlYXRoZXJEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdCh7IGZvcmVjYXN0IH0pIHtcbiAgY29uc3QgZm9yZWNhc3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9yZWNhc3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kaXNwbGF5XCIpO1xuICBmb3IgKGNvbnN0IGRheSBpbiBmb3JlY2FzdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9yZWNhc3QsIGRheSkpIHtcbiAgICAgIGNvbnN0IGRheURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGF5LWRpc3BsYXlcIik7XG5cbiAgICAgIGNvbnN0IGRheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkYXktdGl0bGVcIik7XG4gICAgICBkYXlUaXRsZS5pbm5lclRleHQgPSBkYXk7XG4gICAgICBkYXlEaXNwbGF5LmFwcGVuZENoaWxkKGRheVRpdGxlKTtcblxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXktaWNvblwiKTtcbiAgICAgIGNvbnN0IGljb25TVkcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGljb25TVkcuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICBpY29uU1ZHLnNyYyA9IHNlbGVjdEljb24oZm9yZWNhc3RbZGF5XS5pY29uKTtcbiAgICAgIGljb24uYXBwZW5kQ2hpbGQoaWNvblNWRyk7XG5cbiAgICAgIGNvbnN0IGxvd0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG93SGlnaC5jbGFzc0xpc3QuYWRkKFwibG93LWhpZ2hcIik7XG4gICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxvdy5pbm5lclRleHQgPSBgTDogJHtmb3JlY2FzdFtkYXldLmxvd33CsGA7XG4gICAgICBoaWdoLmlubmVyVGV4dCA9IGBIOiAke2ZvcmVjYXN0W2RheV0uaGlnaH3CsGA7XG4gICAgICBsb3dIaWdoLmFwcGVuZChsb3csIGhpZ2gpO1xuXG4gICAgICBkYXlEaXNwbGF5LmFwcGVuZChkYXlUaXRsZSwgaWNvbiwgbG93SGlnaCk7XG5cbiAgICAgIGZvcmVjYXN0RGlzcGxheS5hcHBlbmRDaGlsZChkYXlEaXNwbGF5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcmVjYXN0RGlzcGxheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyV2VhdGhlckRldGFpbHMoaW5mbykge1xuICBjbGVhclBhZ2UoKTtcbiAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQ3VycmVudFdlYXRoZXIoaW5mbykpO1xuICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJGb3JlY2FzdChpbmZvKSk7XG59XG4iLCJjb25zdCBjb3VudHJ5U2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgY291bnRyeVNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGNvdW50cmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbmNvdW50cnlTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb3VudHJ5LXNlbGVjdFwiKTtcbmNvdW50cnlTZWxlY3RMYWJlbC5pbm5lclRleHQgPSAnQ291bnRyeSc7XG5jb3VudHJ5U2VsZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuY291bnRyeVNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY291bnRyeS1zZWxlY3RcIik7XG5jb3VudHJ5U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY291bnRyeS1zZWxlY3RcIik7XG5jb3VudHJ5U2VsZWN0LnNldEF0dHJpYnV0ZShcImxpc3RcIiwgXCJjb3VudHJpZXNcIik7XG5jb3VudHJpZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3VudHJpZXNcIik7XG5jb3VudHJ5U2VsZWN0SW5wdXQuYXBwZW5kKGNvdW50cnlTZWxlY3RMYWJlbCwgY291bnRyeVNlbGVjdCwgY291bnRyaWVzKTtcblxuZXhwb3J0IGNvbnN0IGNvdW50cnlMaXN0ID0ge1xuICBBRjogXCJBZmdoYW5pc3RhblwiLFxuICBBTDogXCJBbGJhbmlhXCIsXG4gIERaOiBcIkFsZ2VyaWFcIixcbiAgQVM6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgQUQ6IFwiQW5kb3JyYVwiLFxuICBBTzogXCJBbmdvbGFcIixcbiAgQUk6IFwiQW5ndWlsbGFcIixcbiAgQVE6IFwiQW50YXJjdGljYVwiLFxuICBBRzogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXG4gIEFSOiBcIkFyZ2VudGluYVwiLFxuICBBTTogXCJBcm1lbmlhXCIsXG4gIEFXOiBcIkFydWJhXCIsXG4gIEFVOiBcIkF1c3RyYWxpYVwiLFxuICBBVDogXCJBdXN0cmlhXCIsXG4gIEFaOiBcIkF6ZXJiYWlqYW5cIixcbiAgQlM6IFwiQmFoYW1hcyAodGhlKVwiLFxuICBCSDogXCJCYWhyYWluXCIsXG4gIEJEOiBcIkJhbmdsYWRlc2hcIixcbiAgQkI6IFwiQmFyYmFkb3NcIixcbiAgQlk6IFwiQmVsYXJ1c1wiLFxuICBCRTogXCJCZWxnaXVtXCIsXG4gIEJaOiBcIkJlbGl6ZVwiLFxuICBCSjogXCJCZW5pblwiLFxuICBCTTogXCJCZXJtdWRhXCIsXG4gIEJUOiBcIkJodXRhblwiLFxuICBCTzogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwiLFxuICBCUTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFxuICBCQTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXG4gIEJXOiBcIkJvdHN3YW5hXCIsXG4gIEJWOiBcIkJvdXZldCBJc2xhbmRcIixcbiAgQlI6IFwiQnJhemlsXCIsXG4gIElPOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeSAodGhlKVwiLFxuICBCTjogXCJCcnVuZWkgRGFydXNzYWxhbVwiLFxuICBCRzogXCJCdWxnYXJpYVwiLFxuICBCRjogXCJCdXJraW5hIEZhc29cIixcbiAgQkk6IFwiQnVydW5kaVwiLFxuICBDVjogXCJDYWJvIFZlcmRlXCIsXG4gIEtIOiBcIkNhbWJvZGlhXCIsXG4gIENNOiBcIkNhbWVyb29uXCIsXG4gIENBOiBcIkNhbmFkYVwiLFxuICBLWTogXCJDYXltYW4gSXNsYW5kcyAodGhlKVwiLFxuICBDRjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSlcIixcbiAgVEQ6IFwiQ2hhZFwiLFxuICBDTDogXCJDaGlsZVwiLFxuICBDTjogXCJDaGluYVwiLFxuICBDWDogXCJDaHJpc3RtYXMgSXNsYW5kXCIsXG4gIENDOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzICh0aGUpXCIsXG4gIENPOiBcIkNvbG9tYmlhXCIsXG4gIEtNOiBcIkNvbW9yb3MgKHRoZSlcIixcbiAgQ0Q6IFwiQ29uZ28gKHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIixcbiAgQ0c6IFwiQ29uZ28gKHRoZSlcIixcbiAgQ0s6IFwiQ29vayBJc2xhbmRzICh0aGUpXCIsXG4gIENSOiBcIkNvc3RhIFJpY2FcIixcbiAgSFI6IFwiQ3JvYXRpYVwiLFxuICBDVTogXCJDdWJhXCIsXG4gIENXOiBcIkN1cmHDp2FvXCIsXG4gIENZOiBcIkN5cHJ1c1wiLFxuICBDWjogXCJDemVjaGlhXCIsXG4gIENJOiBcIkPDtHRlIGQnSXZvaXJlXCIsXG4gIERLOiBcIkRlbm1hcmtcIixcbiAgREo6IFwiRGppYm91dGlcIixcbiAgRE06IFwiRG9taW5pY2FcIixcbiAgRE86IFwiRG9taW5pY2FuIFJlcHVibGljICh0aGUpXCIsXG4gIEVDOiBcIkVjdWFkb3JcIixcbiAgRUc6IFwiRWd5cHRcIixcbiAgU1Y6IFwiRWwgU2FsdmFkb3JcIixcbiAgR1E6IFwiRXF1YXRvcmlhbCBHdWluZWFcIixcbiAgRVI6IFwiRXJpdHJlYVwiLFxuICBFRTogXCJFc3RvbmlhXCIsXG4gIFNaOiBcIkVzd2F0aW5pXCIsXG4gIEVUOiBcIkV0aGlvcGlhXCIsXG4gIEZLOiBcIkZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXVwiLFxuICBGTzogXCJGYXJvZSBJc2xhbmRzICh0aGUpXCIsXG4gIEZKOiBcIkZpamlcIixcbiAgRkk6IFwiRmlubGFuZFwiLFxuICBGUjogXCJGcmFuY2VcIixcbiAgR0Y6IFwiRnJlbmNoIEd1aWFuYVwiLFxuICBQRjogXCJGcmVuY2ggUG9seW5lc2lhXCIsXG4gIFRGOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcyAodGhlKVwiLFxuICBHQTogXCJHYWJvblwiLFxuICBHTTogXCJHYW1iaWEgKHRoZSlcIixcbiAgR0U6IFwiR2VvcmdpYVwiLFxuICBERTogXCJHZXJtYW55XCIsXG4gIEdIOiBcIkdoYW5hXCIsXG4gIEdJOiBcIkdpYnJhbHRhclwiLFxuICBHUjogXCJHcmVlY2VcIixcbiAgR0w6IFwiR3JlZW5sYW5kXCIsXG4gIEdEOiBcIkdyZW5hZGFcIixcbiAgR1A6IFwiR3VhZGVsb3VwZVwiLFxuICBHVTogXCJHdWFtXCIsXG4gIEdUOiBcIkd1YXRlbWFsYVwiLFxuICBHRzogXCJHdWVybnNleVwiLFxuICBHTjogXCJHdWluZWFcIixcbiAgR1c6IFwiR3VpbmVhLUJpc3NhdVwiLFxuICBHWTogXCJHdXlhbmFcIixcbiAgSFQ6IFwiSGFpdGlcIixcbiAgSE06IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsXG4gIFZBOiBcIkhvbHkgU2VlICh0aGUpXCIsXG4gIEhOOiBcIkhvbmR1cmFzXCIsXG4gIEhLOiBcIkhvbmcgS29uZ1wiLFxuICBIVTogXCJIdW5nYXJ5XCIsXG4gIElTOiBcIkljZWxhbmRcIixcbiAgSU46IFwiSW5kaWFcIixcbiAgSUQ6IFwiSW5kb25lc2lhXCIsXG4gIElSOiBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsXG4gIElROiBcIklyYXFcIixcbiAgSUU6IFwiSXJlbGFuZFwiLFxuICBJTTogXCJJc2xlIG9mIE1hblwiLFxuICBJTDogXCJJc3JhZWxcIixcbiAgSVQ6IFwiSXRhbHlcIixcbiAgSk06IFwiSmFtYWljYVwiLFxuICBKUDogXCJKYXBhblwiLFxuICBKRTogXCJKZXJzZXlcIixcbiAgSk86IFwiSm9yZGFuXCIsXG4gIEtaOiBcIkthemFraHN0YW5cIixcbiAgS0U6IFwiS2VueWFcIixcbiAgS0k6IFwiS2lyaWJhdGlcIixcbiAgS1A6IFwiS29yZWEgKHRoZSBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwiLFxuICBLUjogXCJLb3JlYSAodGhlIFJlcHVibGljIG9mKVwiLFxuICBLVzogXCJLdXdhaXRcIixcbiAgS0c6IFwiS3lyZ3l6c3RhblwiLFxuICBMQTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYyAodGhlKVwiLFxuICBMVjogXCJMYXR2aWFcIixcbiAgTEI6IFwiTGViYW5vblwiLFxuICBMUzogXCJMZXNvdGhvXCIsXG4gIExSOiBcIkxpYmVyaWFcIixcbiAgTFk6IFwiTGlieWFcIixcbiAgTEk6IFwiTGllY2h0ZW5zdGVpblwiLFxuICBMVDogXCJMaXRodWFuaWFcIixcbiAgTFU6IFwiTHV4ZW1ib3VyZ1wiLFxuICBNTzogXCJNYWNhb1wiLFxuICBNRzogXCJNYWRhZ2FzY2FyXCIsXG4gIE1XOiBcIk1hbGF3aVwiLFxuICBNWTogXCJNYWxheXNpYVwiLFxuICBNVjogXCJNYWxkaXZlc1wiLFxuICBNTDogXCJNYWxpXCIsXG4gIE1UOiBcIk1hbHRhXCIsXG4gIE1IOiBcIk1hcnNoYWxsIElzbGFuZHMgKHRoZSlcIixcbiAgTVE6IFwiTWFydGluaXF1ZVwiLFxuICBNUjogXCJNYXVyaXRhbmlhXCIsXG4gIE1VOiBcIk1hdXJpdGl1c1wiLFxuICBZVDogXCJNYXlvdHRlXCIsXG4gIE1YOiBcIk1leGljb1wiLFxuICBGTTogXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwiLFxuICBNRDogXCJNb2xkb3ZhICh0aGUgUmVwdWJsaWMgb2YpXCIsXG4gIE1DOiBcIk1vbmFjb1wiLFxuICBNTjogXCJNb25nb2xpYVwiLFxuICBNRTogXCJNb250ZW5lZ3JvXCIsXG4gIE1TOiBcIk1vbnRzZXJyYXRcIixcbiAgTUE6IFwiTW9yb2Njb1wiLFxuICBNWjogXCJNb3phbWJpcXVlXCIsXG4gIE1NOiBcIk15YW5tYXJcIixcbiAgTkE6IFwiTmFtaWJpYVwiLFxuICBOUjogXCJOYXVydVwiLFxuICBOUDogXCJOZXBhbFwiLFxuICBOTDogXCJOZXRoZXJsYW5kcyAodGhlKVwiLFxuICBOQzogXCJOZXcgQ2FsZWRvbmlhXCIsXG4gIE5aOiBcIk5ldyBaZWFsYW5kXCIsXG4gIE5JOiBcIk5pY2FyYWd1YVwiLFxuICBORTogXCJOaWdlciAodGhlKVwiLFxuICBORzogXCJOaWdlcmlhXCIsXG4gIE5VOiBcIk5pdWVcIixcbiAgTkY6IFwiTm9yZm9sayBJc2xhbmRcIixcbiAgTVA6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzICh0aGUpXCIsXG4gIE5POiBcIk5vcndheVwiLFxuICBPTTogXCJPbWFuXCIsXG4gIFBLOiBcIlBha2lzdGFuXCIsXG4gIFBXOiBcIlBhbGF1XCIsXG4gIFBTOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIixcbiAgUEE6IFwiUGFuYW1hXCIsXG4gIFBHOiBcIlBhcHVhIE5ldyBHdWluZWFcIixcbiAgUFk6IFwiUGFyYWd1YXlcIixcbiAgUEU6IFwiUGVydVwiLFxuICBQSDogXCJQaGlsaXBwaW5lcyAodGhlKVwiLFxuICBQTjogXCJQaXRjYWlyblwiLFxuICBQTDogXCJQb2xhbmRcIixcbiAgUFQ6IFwiUG9ydHVnYWxcIixcbiAgUFI6IFwiUHVlcnRvIFJpY29cIixcbiAgUUE6IFwiUWF0YXJcIixcbiAgTUs6IFwiUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhXCIsXG4gIFJPOiBcIlJvbWFuaWFcIixcbiAgUlU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uICh0aGUpXCIsXG4gIFJXOiBcIlJ3YW5kYVwiLFxuICBSRTogXCJSw6l1bmlvblwiLFxuICBCTDogXCJTYWludCBCYXJ0aMOpbGVteVwiLFxuICBTSDogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxuICBLTjogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcbiAgTEM6IFwiU2FpbnQgTHVjaWFcIixcbiAgTUY6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcbiAgUE06IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFxuICBWQzogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFxuICBXUzogXCJTYW1vYVwiLFxuICBTTTogXCJTYW4gTWFyaW5vXCIsXG4gIFNUOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxuICBTQTogXCJTYXVkaSBBcmFiaWFcIixcbiAgU046IFwiU2VuZWdhbFwiLFxuICBSUzogXCJTZXJiaWFcIixcbiAgU0M6IFwiU2V5Y2hlbGxlc1wiLFxuICBTTDogXCJTaWVycmEgTGVvbmVcIixcbiAgU0c6IFwiU2luZ2Fwb3JlXCIsXG4gIFNYOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcbiAgU0s6IFwiU2xvdmFraWFcIixcbiAgU0k6IFwiU2xvdmVuaWFcIixcbiAgU0I6IFwiU29sb21vbiBJc2xhbmRzXCIsXG4gIFNPOiBcIlNvbWFsaWFcIixcbiAgWkE6IFwiU291dGggQWZyaWNhXCIsXG4gIEdTOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXG4gIFNTOiBcIlNvdXRoIFN1ZGFuXCIsXG4gIEVTOiBcIlNwYWluXCIsXG4gIExLOiBcIlNyaSBMYW5rYVwiLFxuICBTRDogXCJTdWRhbiAodGhlKVwiLFxuICBTUjogXCJTdXJpbmFtZVwiLFxuICBTSjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXG4gIFNFOiBcIlN3ZWRlblwiLFxuICBDSDogXCJTd2l0emVybGFuZFwiLFxuICBTWTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFxuICBUVzogXCJUYWl3YW5cIixcbiAgVEo6IFwiVGFqaWtpc3RhblwiLFxuICBUWjogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXG4gIFRIOiBcIlRoYWlsYW5kXCIsXG4gIFRMOiBcIlRpbW9yLUxlc3RlXCIsXG4gIFRHOiBcIlRvZ29cIixcbiAgVEs6IFwiVG9rZWxhdVwiLFxuICBUTzogXCJUb25nYVwiLFxuICBUVDogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXG4gIFROOiBcIlR1bmlzaWFcIixcbiAgVFI6IFwiVHVya2V5XCIsXG4gIFRNOiBcIlR1cmttZW5pc3RhblwiLFxuICBUQzogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMgKHRoZSlcIixcbiAgVFY6IFwiVHV2YWx1XCIsXG4gIFVHOiBcIlVnYW5kYVwiLFxuICBVQTogXCJVa3JhaW5lXCIsXG4gIEFFOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzICh0aGUpXCIsXG4gIEdCOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSlcIixcbiAgVU06IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzICh0aGUpXCIsXG4gIFVTOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSAodGhlKVwiLFxuICBVWTogXCJVcnVndWF5XCIsXG4gIFVaOiBcIlV6YmVraXN0YW5cIixcbiAgVlU6IFwiVmFudWF0dVwiLFxuICBWRTogXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCIsXG4gIFZOOiBcIlZpZXQgTmFtXCIsXG4gIFZHOiBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwiLFxuICBWSTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIixcbiAgV0Y6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIixcbiAgRUg6IFwiV2VzdGVybiBTYWhhcmFcIixcbiAgWUU6IFwiWWVtZW5cIixcbiAgWk06IFwiWmFtYmlhXCIsXG4gIFpXOiBcIlppbWJhYndlXCIsXG4gIEFYOiBcIsOFbGFuZCBJc2xhbmRzXCIsXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbmZvciAoY29uc3QgY291bnRyeSBpbiBjb3VudHJ5TGlzdCkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvdW50cnlMaXN0LCBjb3VudHJ5KSkge1xuICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGNvdW50cnkpO1xuICAgIG9wdC5pbm5lclRleHQgPSBjb3VudHJ5TGlzdFtjb3VudHJ5XTtcbiAgICBjb3VudHJpZXMuYXBwZW5kQ2hpbGQob3B0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJ5U2VsZWN0SW5wdXQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb250aW51ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCB7IGlzU2FtZURheSwgcGFyc2VJU08sIGdldERheSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXRyaWV2ZVdlYXRoZXJEYXRhKHsgbGF0LCBsb24gfSkge1xuICAvLyBjb25zdCBmZXRjaFByZWZpeCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj96aXA9JztcbiAgY29uc3QgZGF0YSA9IHt9O1xuICBjb25zdCBmZXRjaFByZWZpeCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiO1xuICBjb25zdCBtaWRkbGUgPSBgbGF0PSR7bGF0fSZsb249JHtsb259YDtcbiAgY29uc3QgZmV0Y2hTdWZmaXggPSBcIiZhcHBpZD05MjFjZmQ4NzZmYzdiZGQxNzY4NDk3YzE4ZGMxYmY4MSZ1bml0cz1pbXBlcmlhbFwiO1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgIGAke2ZldGNoUHJlZml4fS93ZWF0aGVyPyR7bWlkZGxlfSR7ZmV0Y2hTdWZmaXh9YFxuICApO1xuICBjb25zdCBmaXZlRGF5V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgIGAke2ZldGNoUHJlZml4fS9mb3JlY2FzdD8ke21pZGRsZX0ke2ZldGNoU3VmZml4fWBcbiAgKTtcbiAgZGF0YS5jdXJyZW50ID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpO1xuICBkYXRhLmZpdmVEYXkgPSBhd2FpdCBmaXZlRGF5V2VhdGhlci5qc29uKCk7XG4gIGRhdGEuZm9yZWNhc3QgPSBhbmFseXplRm9yZWNhc3QoZGF0YS5maXZlRGF5KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGZpbmRNb3N0Q29tbW9uKGFycmF5KSB7XG4gIGxldCBoaWdoZXN0Q291bnQgPSAwO1xuICBsZXQgbW9zdENvbW1vbjtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IG90aGVySXRlbSBvZiBhcnJheSkge1xuICAgICAgaWYgKGl0ZW0gPT09IG90aGVySXRlbSkge1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiBoaWdoZXN0Q291bnQpIHtcbiAgICAgIGhpZ2hlc3RDb3VudCA9IGNvdW50O1xuICAgICAgbW9zdENvbW1vbiA9IGl0ZW07XG4gICAgfVxuICB9XG4gIHJldHVybiBtb3N0Q29tbW9uO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVEYXkobnVtKSB7XG4gIGxldCBkYXk7XG4gIHN3aXRjaCAobnVtKSB7XG4gICAgY2FzZSAwOlxuICAgICAgZGF5ID0gXCJTdW5kYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIGRheSA9IFwiTW9uZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBkYXkgPSBcIlR1ZXNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGRheSA9IFwiV2VkbmVzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBkYXkgPSBcIlRodXJzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBkYXkgPSBcIkZyaWRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgZGF5ID0gXCJTYXR1cmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGRheSA9IFwibm8gZGF5XCI7XG4gIH1cbiAgcmV0dXJuIGRheTtcbn1cblxuZnVuY3Rpb24gYW5hbHl6ZUZvcmVjYXN0KGRhdGEpIHtcbiAgY29uc3QgYXJyYXkgPSBkYXRhLmxpc3Q7XG4gIGNvbnN0IGFycmF5T2ZEYXlzID0gYXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgaWYgKGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBsYXN0RGF0ZSA9IHBhcnNlSVNPKGFbYS5sZW5ndGggLSAxXVswXS5kdF90eHQpO1xuICAgICAgY29uc3QgdGhpc0RhdGUgPSBwYXJzZUlTTyhiLmR0X3R4dCk7XG4gICAgICBpZiAoaXNTYW1lRGF5KGxhc3REYXRlLCB0aGlzRGF0ZSkpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdLnB1c2goYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhLnB1c2goW2JdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYS5wdXNoKFtiXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZml2ZURheUZvcmVjYXN0ID0ge307XG4gIGZvciAoY29uc3QgZGF5IG9mIGFycmF5T2ZEYXlzKSB7XG4gICAgaWYgKGlzVG9kYXkocGFyc2VJU08oZGF5WzBdLmR0X3R4dCkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IGRheU9mV2VlaztcbiAgICBsZXQgbWluVGVtcDtcbiAgICBsZXQgbWF4VGVtcDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFtdO1xuICAgIGNvbnN0IGljb24gPSBbXTtcblxuICAgIGZvciAoY29uc3QgdGhyZWVIb3VyIG9mIGRheSkge1xuICAgICAgaWYgKCFkYXlPZldlZWspIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gdHJhbnNsYXRlRGF5KGdldERheShwYXJzZUlTTyh0aHJlZUhvdXIuZHRfdHh0KSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFtaW5UZW1wIHx8IHRocmVlSG91ci5tYWluLnRlbXBfbWluIDwgbWluVGVtcCkge1xuICAgICAgICBtaW5UZW1wID0gTWF0aC5mbG9vcih0aHJlZUhvdXIubWFpbi50ZW1wX21pbik7XG4gICAgICB9XG4gICAgICBpZiAoIW1heFRlbXAgfHwgdGhyZWVIb3VyLm1haW4udGVtcF9tYXggPiBtYXhUZW1wKSB7XG4gICAgICAgIG1heFRlbXAgPSBNYXRoLmZsb29yKHRocmVlSG91ci5tYWluLnRlbXBfbWF4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aHJlZUhvdXIud2VhdGhlclswXS5pY29uLmluY2x1ZGVzKFwiZFwiKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKHRocmVlSG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgaWNvbi5wdXNoKHRocmVlSG91ci53ZWF0aGVyWzBdLmljb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpdmVEYXlGb3JlY2FzdFtkYXlPZldlZWtdID0ge1xuICAgICAgaGlnaDogbWF4VGVtcCxcbiAgICAgIGxvdzogbWluVGVtcCxcbiAgICAgIGRlc2NyaXB0aW9uOiBmaW5kTW9zdENvbW1vbihkZXNjcmlwdGlvbiksXG4gICAgICBpY29uOiBmaW5kTW9zdENvbW1vbihpY29uKSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBmaXZlRGF5Rm9yZWNhc3Q7XG59XG4iLCJpbXBvcnQgeyBoYW5kbGVTZWFyY2hJbnB1dCB9IGZyb20gJy4vbG9jYXRpb25TZWxlY3QnO1xuXG5jb25zdCBsb2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuXG4gIGxvY0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaGFuZGxlU2VhcmNoSW5wdXQoKTtcbiAgfSk7XG5cbn07IiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tIFwiLi9mZXRjaFdlYXRoZXJcIjtcbmltcG9ydCByZW5kZXJXZWF0aGVyRGV0YWlscyBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IGNvdW50cnlMaXN0IH0gZnJvbSBcIi4vY291bnRyeVwiO1xuXG5jb25zdCBsb2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jXCIpO1xuY29uc3Qgc3VnZ2VzdGlvbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VnZ2VzdGlvbi1ib3gtY29udGFpbmVyXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBmaW5kTG9jYXRpb24oKSB7XG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cnktc2VsZWN0XCIpO1xuICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdGVzLXNlbGVjdFwiKTtcbiAgY29uc3QgcHJlZml4ID0gXCJodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL1wiO1xuICBjb25zdCBpbnB1dCA9IGxvY0lucHV0LnZhbHVlO1xuICBsZXQgbWlkZGxlO1xuICBjb25zdCBhcGlLZXkgPSBcIiZhcHBpZD05MjFjZmQ4NzZmYzdiZGQxNzY4NDk3YzE4ZGMxYmY4MVwiO1xuICBpZiAoTnVtYmVyKGlucHV0KSkge1xuICAgIGlmIChjb3VudHJ5LnZhbHVlKSB7XG4gICAgICBtaWRkbGUgPSBgemlwP3ppcD0ke2lucHV0fSwke2NvdW50cnkudmFsdWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlkZGxlID0gYHppcD96aXA9JHtpbnB1dH1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS52YWx1ZSkge1xuICAgIG1pZGRsZSA9IGBkaXJlY3Q/cT0ke2lucHV0fSwke3N0YXRlLnZhbHVlfSwke2NvdW50cnkudmFsdWV9JmxpbWl0PTdgO1xuICB9IGVsc2UgaWYgKGNvdW50cnkudmFsdWUpIHtcbiAgICBtaWRkbGUgPSBgZGlyZWN0P3E9JHtpbnB1dH0sJHtjb3VudHJ5LnZhbHVlfSZsaW1pdD03YDtcbiAgfSBlbHNlIHtcbiAgICBtaWRkbGUgPSBgZGlyZWN0P3E9JHtpbnB1dH0mbGltaXQ9N2A7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbkxpc3RSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7cHJlZml4fSR7bWlkZGxlfSR7YXBpS2V5fWApO1xuICBjb25zdCBsb2NhdGlvbkxpc3QgPSBhd2FpdCBsb2NhdGlvbkxpc3RSZXF1ZXN0Lmpzb24oKTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25MaXN0KTtcbiAgcmV0dXJuIGxvY2F0aW9uTGlzdDtcblxuICAvLyAnZGlyZWN0P3E9e2NpdHkgbmFtZX0se3N0YXRlIGNvZGV9LHtjb3VudHJ5IGNvZGV9JmxpbWl0PXtsaW1pdH0mYXBwaWQ9e0FQSSBrZXl9XG4gIC8vICd6aXA/emlwPXt6aXAgY29kZX0se2NvdW50cnkgY29kZX0mYXBwaWQ9e0FQSSBrZXl9XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25Cb3gocmVzcG9uc2UpIHtcbiAgaWYgKHN1Z2dlc3Rpb25Cb3guZmlyc3RDaGlsZCkge1xuICAgIHN1Z2dlc3Rpb25Cb3gucmVtb3ZlQ2hpbGQoc3VnZ2VzdGlvbkJveC5maXJzdENoaWxkKTtcbiAgfVxuICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3guY2xhc3NMaXN0LmFkZChcInN1Z2dlc3Rpb24tYm94XCIpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XG4gICAgcmVzcG9uc2UgPSBbcmVzcG9uc2VdO1xuICB9XG4gIGlmICghcmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9SZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9SZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ2xvYy1zdWdnZXN0aW9uJyk7XG4gICAgbm9SZXN1bHRzLmlubmVyVGV4dCA9ICdObyByZXN1bHRzJztcbiAgICBib3guYXBwZW5kQ2hpbGQobm9SZXN1bHRzKTtcbiAgfSBlbHNlIHtcbiAgcmVzcG9uc2UuZm9yRWFjaCgoc3VnKSA9PiB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VnZ2VzdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHN1Z2dlc3Rpb24uY2xhc3NMaXN0LmFkZChcImxvYy1zdWdnZXN0aW9uXCIpO1xuICAgIHN1Z2dlc3Rpb24uaW5uZXJUZXh0ID0gYCR7c3VnLm5hbWV9LCAke1xuICAgICAgc3VnLnN0YXRlID8/IGNvdW50cnlMaXN0W3N1Zy5jb3VudHJ5XVxuICAgIH1gO1xuICAgIHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHN1Zyk7XG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmxvY2F0aW9uTmFtZSA9IHN1Zy5uYW1lO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgc3VnZ2VzdGlvbkJveC5yZW1vdmVDaGlsZChzdWdnZXN0aW9uQm94LmZpcnN0Q2hpbGQpO1xuICAgICAgcmVuZGVyV2VhdGhlckRldGFpbHMod2VhdGhlckRhdGEpO1xuICAgIH0pO1xuICAgIGJveC5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcbiAgXG4gIH0pO1xufVxuXG4gIHJldHVybiBib3g7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGF5QW5kU2VhcmNoKHZhbHVlLCB3YWl0KSB7XG4gIGF3YWl0IGRlbGF5KHdhaXQpO1xuICBpZiAodmFsdWUgPT09IGxvY0lucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgbG9jYXRpb25MaXN0ID0gYXdhaXQgZmluZExvY2F0aW9uKGxvY0lucHV0LnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25Cb3ggPSBjcmVhdGVPcHRpb25Cb3gobG9jYXRpb25MaXN0KTtcbiAgICBzdWdnZXN0aW9uQm94LmFwcGVuZENoaWxkKG9wdGlvbkJveCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoSW5wdXQgKCkge1xuICBpZiAoIWxvY0lucHV0LnZhbHVlKSB7XG4gICAgaWYgKHN1Z2dlc3Rpb25Cb3guZmlyc3RDaGlsZCkge1xuICAgICAgc3VnZ2VzdGlvbkJveC5yZW1vdmVDaGlsZChzdWdnZXN0aW9uQm94LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGxvY0lucHV0LnZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICBkZWxheUFuZFNlYXJjaChsb2NJbnB1dC52YWx1ZSwgNDAwKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxheUFuZFNlYXJjaChsb2NJbnB1dC52YWx1ZSwgMjAwMCk7XG4gIH1cblxufVxuXG5cblxuXG5leHBvcnQgeyBmaW5kTG9jYXRpb24sIGhhbmRsZVNlYXJjaElucHV0IH07XG4iLCJpbXBvcnQgY291bnRyeVNlbGVjdCBmcm9tICcuL2NvdW50cnkuanMnO1xuaW1wb3J0IHN0YXRlU2VsZWN0IGZyb20gJy4vc3RhdGVzLmpzJztcblxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuL2ltZy9jbG9zZS1jaXJjbGUtb3V0bGluZS5zdmcnO1xuXG5jb25zdCBjb3VudHJ5SW5wdXRGaWVsZCA9IFsuLi5jb3VudHJ5U2VsZWN0LmNoaWxkcmVuXVsxXTtcbmNvbnN0IHN0YXRlSW5wdXRGaWVsZCA9IFsuLi5zdGF0ZVNlbGVjdC5jaGlsZHJlbl1bMV07XG5cbmZ1bmN0aW9uIGFkZENsZWFyQnV0dG9uKGVsZW1lbnQpIHtcbiAgY29uc3QgY2xvc2VJY29uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJY29uSW1hZ2Uuc3JjID0gY2xvc2VJY29uO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2NsZWFyLWJ1dHRvbicpO1xuICBidG4uYXBwZW5kQ2hpbGQoY2xvc2VJY29uSW1hZ2UpO1xuICBjb25zdCBpbnB1dEZpZWxkID0gWy4uLmVsZW1lbnQuY2hpbGRyZW5dWzFdO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGNvdW50cnlTZWxlY3QgJiYgaW5wdXRGaWVsZC52YWx1ZSA9PT0gJ1VTJykge1xuICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgc3RhdGVJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICBzdGF0ZVNlbGVjdC5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5Jyk7XG4gICAgfVxuICB9KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbmNvbnN0IHNldHRpbmdzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbnNldHRpbmdzRm9ybS5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1mb3JtJyk7XG5cbmNvbnN0IGFkdmFuY2VkU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hZHZhbmNlZFNlYXJjaC5jbGFzc0xpc3QuYWRkKCdhZHZhbmNlZC1zZWFyY2gnKTtcbmNvbnN0IGFkdmFuY2VkU2VhcmNoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuYWR2YW5jZWRTZWFyY2hUaXRsZS5pbm5lclRleHQgPSAnQWR2YW5jZWQgU2VhcmNoJztcbmNvbnN0IGFkdmFuY2VkU2VhcmNoTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5hZHZhbmNlZFNlYXJjaExpc3QuYXBwZW5kKGNvdW50cnlTZWxlY3QsIHN0YXRlU2VsZWN0KTtcblxuY291bnRyeUlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGlmIChjb3VudHJ5SW5wdXRGaWVsZC52YWx1ZSA9PT0gJ1VTJykge1xuICAgIHN0YXRlU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZUlucHV0RmllbGQudmFsdWUgPSAnJztcbiAgICBzdGF0ZVNlbGVjdC5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5Jyk7XG4gIH1cbn0pXG5cbmFkZENsZWFyQnV0dG9uKGNvdW50cnlTZWxlY3QpO1xuYWRkQ2xlYXJCdXR0b24oc3RhdGVTZWxlY3QpO1xuXG5hZHZhbmNlZFNlYXJjaC5hcHBlbmQoYWR2YW5jZWRTZWFyY2hUaXRsZSwgYWR2YW5jZWRTZWFyY2hMaXN0KTtcblxuc2V0dGluZ3NGb3JtLmFwcGVuZChhZHZhbmNlZFNlYXJjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzRm9ybTsiLCJjb25zdCBzdGF0ZXNTZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5zdGF0ZXNTZWxlY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5Jyk7XG5jb25zdCBzdGF0ZXNTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHN0YXRlc1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IHN0YXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbnN0YXRlc1NlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInN0YXRlcy1zZWxlY3RcIik7XG5zdGF0ZXNTZWxlY3RMYWJlbC5pbm5lclRleHQgPSAnU3RhdGUnO1xuc3RhdGVzU2VsZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuc3RhdGVzU2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGF0ZXMtc2VsZWN0XCIpO1xuc3RhdGVzU2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhdGVzLXNlbGVjdFwiKTtcbnN0YXRlc1NlbGVjdC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIFwic3RhdGVzXCIpO1xuc3RhdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhdGVzXCIpO1xuc3RhdGVzU2VsZWN0SW5wdXQuYXBwZW5kKHN0YXRlc1NlbGVjdExhYmVsLCBzdGF0ZXNTZWxlY3QsIHN0YXRlcyk7XG5cbmNvbnN0IHN0YXRlc0xpc3QgPSB7XG4gIEFMOiBcIkFsYWJhbWFcIixcbiAgQUs6IFwiQWxhc2thXCIsXG4gIEFaOiBcIkFyaXpvbmFcIixcbiAgQVI6IFwiQXJrYW5zYXNcIixcbiAgQ0E6IFwiQ2FsaWZvcm5pYVwiLFxuICBDTzogXCJDb2xvcmFkb1wiLFxuICBDVDogXCJDb25uZWN0aWN1dFwiLFxuICBERTogXCJEZWxhd2FyZVwiLFxuICBGTDogXCJGbG9yaWRhXCIsXG4gIEdBOiBcIkdlb3JnaWFcIixcbiAgSEk6IFwiSGF3YWlpXCIsXG4gIElEOiBcIklkYWhvXCIsXG4gIElMOiBcIklsbGlub2lzXCIsXG4gIElOOiBcIkluZGlhbmFcIixcbiAgSUE6IFwiSW93YVwiLFxuICBLUzogXCJLYW5zYXNcIixcbiAgS1k6IFwiS2VudHVja3lcIixcbiAgTEE6IFwiTG91aXNpYW5hXCIsXG4gIE1FOiBcIk1haW5lXCIsXG4gIE1EOiBcIk1hcnlsYW5kXCIsXG4gIE1BOiBcIk1hc3NhY2h1c2V0dHNcIixcbiAgTUk6IFwiTWljaGlnYW5cIixcbiAgTU46IFwiTWlubmVzb3RhXCIsXG4gIE1TOiBcIk1pc3Npc3NpcHBpXCIsXG4gIE1POiBcIk1pc3NvdXJpXCIsXG4gIE1UOiBcIk1vbnRhbmFcIixcbiAgTkU6IFwiTmVicmFza2FcIixcbiAgTlY6IFwiTmV2YWRhXCIsXG4gIE5IOiBcIk5ldyBIYW1wc2hpcmVcIixcbiAgTko6IFwiTmV3IEplcnNleVwiLFxuICBOTTogXCJOZXcgTWV4aWNvXCIsXG4gIE5ZOiBcIk5ldyBZb3JrXCIsXG4gIE5DOiBcIk5vcnRoIENhcm9saW5hXCIsXG4gIE5EOiBcIk5vcnRoIERha290YVwiLFxuICBPSDogXCJPaGlvXCIsXG4gIE9LOiBcIk9rbGFob21hXCIsXG4gIE9SOiBcIk9yZWdvblwiLFxuICBQQTogXCJQZW5uc3lsdmFuaWFcIixcbiAgUkk6IFwiUmhvZGUgSXNsYW5kXCIsXG4gIFNDOiBcIlNvdXRoIENhcm9saW5hXCIsXG4gIFNEOiBcIlNvdXRoIERha290YVwiLFxuICBUTjogXCJUZW5uZXNzZWVcIixcbiAgVFg6IFwiVGV4YXNcIixcbiAgVVQ6IFwiVXRhaFwiLFxuICBWVDogXCJWZXJtb250XCIsXG4gIFZBOiBcIlZpcmdpbmlhXCIsXG4gIFdBOiBcIldhc2hpbmd0b25cIixcbiAgV1Y6IFwiV2VzdCBWaXJnaW5pYVwiLFxuICBXSTogXCJXaXNjb25zaW5cIixcbiAgV1k6IFwiV3lvbWluZ1wiLFxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5mb3IgKGNvbnN0IHN0YXRlIGluIHN0YXRlc0xpc3QpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZXNMaXN0LCBzdGF0ZSkpIHtcbiAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzdGF0ZSk7XG4gICAgb3B0LmlubmVyVGV4dCA9IHN0YXRlc0xpc3Rbc3RhdGVdO1xuICAgIHN0YXRlcy5hcHBlbmRDaGlsZChvcHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlc1NlbGVjdElucHV0O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKCcuL215LWZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9teS1mb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufTsgKi9cXG5cXG46cm9vdCB7XFxuICAtLXNldHRpbmdzLXdpZHRoOiBtaW4oNDIwcHgsIDEwMHZ3KTtcXG4gIC0tc2V0dGluZ3MtaGVpZ2h0OiBtaW4oOTAwcHgsIDEwMHZoKTtcXG5cXG4gIC0tYmFja2dyb3VuZDogIzI4MmEzNjtcXG4gIC0tc3RhcnQtc2NyZWVuLWJnOiAjNjI3M2E0Zjg7XFxuICAtLXN1YnRsZTogIzYyNzJhNDtcXG4gIC0tcGluazogI2ZmNzljNjtcXG4gIC0tZ3JlZW46ICM1MGZhN2I7XFxuICAtLXllbGxvdzogI2YxZmE4YztcXG4gIC0tYmx1ZTogIzhiZTlmZDtcXG4gIC0tcGxhaW46ICNmOGY4ZjI7XFxuXFxuICAtLWRheS1za3kxOiAjNDY4N2Q4O1xcbiAgLS1kYXktc2t5MjogIzdmYWZkZTtcXG5cXG4gIC0tY2xvdWQxOiAjZjVmNWY3O1xcbiAgLS1jbG91ZDI6ICNhMWI1Yzc7XFxuICAtLWNsb3VkLWZvbnQ6ICMzYjNiM2I7XFxuXFxuICAtLXJhaW4xOiAjNTE2MDZiO1xcbiAgLS1yYWluMjogIzk3OTk5ZDtcXG5cXG4gIC0tbmlnaHQxOiAjMGIxOTJiO1xcbiAgLS1uaWdodDI6ICMwMTNhNjA7XFxuICAtLW5pZ2h0LWNsb3VkOiBoc2woMjA0LCAyNCUsIDMwJSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2E2MDAwO1xcbiAgY29sb3I6IHZhcigtLXBsYWluKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZ3JhZGllbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5ncmFkaWVudC5kYXkge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kYXktc2t5MSksIHZhcigtLWRheS1za3kyKSk7XFxufVxcblxcbi5ncmFkaWVudC5jbG91ZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY2xvdWQxKSwgdmFyKC0tY2xvdWQyKSk7XFxufVxcblxcbmJvZHkuY2xvdWQge1xcbiAgY29sb3I6IHZhcigtLWNsb3VkLWZvbnQpO1xcbn1cXG5cXG4uZ3JhZGllbnQucmFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tcmFpbjEpLCB2YXIoLS1yYWluMikpO1xcbn1cXG5cXG4uZ3JhZGllbnQubmlnaHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLW5pZ2h0MSksIHZhcigtLW5pZ2h0MikpO1xcbn1cXG5cXG4uZ3JhZGllbnQubmlnaHQtY2xvdWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLW5pZ2h0MSksIHZhcigtLW5pZ2h0LWNsb3VkKSwgdmFyKC0tbmlnaHQyKSk7XFxuXFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2xvYyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICAvKiB3aWR0aDogMTUwcHg7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyNDAsIDI1NCk7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNsb2M6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmxvYy1pbnB1dC1maWVsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICAvKiBtaW4td2lkdGg6IG1heC1jb250ZW50OyAqL1xcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5sb2MtaW5wdXQtZmllbGQ6aG92ZXIsXFxuLmxvYy1pbnB1dC1maWVsZDpoYXMoI2xvYzpmb2N1cykge1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5sb2MtaW5wdXQtZmllbGQ6aG92ZXIgLnN1Z2dlc3Rpb24tYm94LWNvbnRhaW5lcixcXG4ubG9jLWlucHV0LWZpZWxkOmhhcygjbG9jOmZvY3VzKSAuc3VnZ2VzdGlvbi1ib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAyNTQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogNHB4O1xcbn1cXG5cXG4uc2VhcmNoLWljb24gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AY29udGFpbmVyIChtYXgtd2lkdGg6IDIwcHgpIHtcXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgdG9wOjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgfVxcblxcbn1cXG5cXG4uY291bnRyeS1pbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWJveC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6MjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxvYy1zdWdnZXN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMCwgNTklLCA5MCUpO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1kYXktc2t5Mik7XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEwLCA1OSUsIDkwJSk7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmN1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4uY3VycmVudC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmZvcmVjYXN0LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRheS1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb3ctaGlnaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9yZWNhc3QtZGlzcGxheSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBnYXA6IDA7XFxuICB9XFxuXFxuICAuZGF5LWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNDUlIDM1JTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0tZGF5LXNreTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgfVxcblxcbiAgLmRheS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLmxvdy1oaWdoIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6MDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMyLCAyNDAsIDI1NCwgMC45NSk7XFxuICB3aWR0aDogdmFyKC0tc2V0dGluZ3Mtd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zZXR0aW5ncy1oZWlnaHQpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1jbG91ZC1mb250KVxcbn1cXG5cXG4uc2V0dGluZ3MuaGlkZGVuIHtcXG4gIHRyYW5zbGF0ZTogdmFyKC0tc2V0dGluZ3Mtd2lkdGgpO1xcbn1cXG5cXG4uY29nLWljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyNDAsIDI1NCk7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncy5oaWRkZW4gLmNvZy1pY29uLWNvbnRhaW5lciB7XFxuICB0cmFuc2xhdGU6IC0yNXB4O1xcbn1cXG5cXG4uY29nLWljb24ge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciBpbnB1dCB7XFxuXFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciBhdXRvIC8gMWZyIDIwcHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgbGkgbGFiZWwge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIGxpIGlucHV0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIGxpIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgbGkgYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciBsaSBidXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciAubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7SUFNSTs7QUFFSjtFQUNFLG1DQUFtQztFQUNuQyxvQ0FBb0M7O0VBRXBDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCOztFQUVyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUpBQW1KO0VBQ25KLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkRBQTZEO0FBQy9EOztBQUVBO0VB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O0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9teS1mb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn07ICovXFxuXFxuOnJvb3Qge1xcbiAgLS1zZXR0aW5ncy13aWR0aDogbWluKDQyMHB4LCAxMDB2dyk7XFxuICAtLXNldHRpbmdzLWhlaWdodDogbWluKDkwMHB4LCAxMDB2aCk7XFxuXFxuICAtLWJhY2tncm91bmQ6ICMyODJhMzY7XFxuICAtLXN0YXJ0LXNjcmVlbi1iZzogIzYyNzNhNGY4O1xcbiAgLS1zdWJ0bGU6ICM2MjcyYTQ7XFxuICAtLXBpbms6ICNmZjc5YzY7XFxuICAtLWdyZWVuOiAjNTBmYTdiO1xcbiAgLS15ZWxsb3c6ICNmMWZhOGM7XFxuICAtLWJsdWU6ICM4YmU5ZmQ7XFxuICAtLXBsYWluOiAjZjhmOGYyO1xcblxcbiAgLS1kYXktc2t5MTogIzQ2ODdkODtcXG4gIC0tZGF5LXNreTI6ICM3ZmFmZGU7XFxuXFxuICAtLWNsb3VkMTogI2Y1ZjVmNztcXG4gIC0tY2xvdWQyOiAjYTFiNWM3O1xcbiAgLS1jbG91ZC1mb250OiAjM2IzYjNiO1xcblxcbiAgLS1yYWluMTogIzUxNjA2YjtcXG4gIC0tcmFpbjI6ICM5Nzk5OWQ7XFxuXFxuICAtLW5pZ2h0MTogIzBiMTkyYjtcXG4gIC0tbmlnaHQyOiAjMDEzYTYwO1xcbiAgLS1uaWdodC1jbG91ZDogaHNsKDIwNCwgMjQlLCAzMCUpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTNhNjAwMDtcXG4gIGNvbG9yOiB2YXIoLS1wbGFpbik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdyYWRpZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZ3JhZGllbnQuZGF5IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGF5LXNreTEpLCB2YXIoLS1kYXktc2t5MikpO1xcbn1cXG5cXG4uZ3JhZGllbnQuY2xvdWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWNsb3VkMSksIHZhcigtLWNsb3VkMikpO1xcbn1cXG5cXG5ib2R5LmNsb3VkIHtcXG4gIGNvbG9yOiB2YXIoLS1jbG91ZC1mb250KTtcXG59XFxuXFxuLmdyYWRpZW50LnJhaW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXJhaW4xKSwgdmFyKC0tcmFpbjIpKTtcXG59XFxuXFxuLmdyYWRpZW50Lm5pZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1uaWdodDEpLCB2YXIoLS1uaWdodDIpKTtcXG59XFxuXFxuLmdyYWRpZW50Lm5pZ2h0LWNsb3VkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1uaWdodDEpLCB2YXIoLS1uaWdodC1jbG91ZCksIHZhcigtLW5pZ2h0MikpO1xcblxcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNsb2Mge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgLyogd2lkdGg6IDE1MHB4OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAyNTQpO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jbG9jOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxufVxcblxcbi5sb2MtaW5wdXQtZmllbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgLyogbWluLXdpZHRoOiBtYXgtY29udGVudDsgKi9cXG4gIGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ubG9jLWlucHV0LWZpZWxkOmhvdmVyLFxcbi5sb2MtaW5wdXQtZmllbGQ6aGFzKCNsb2M6Zm9jdXMpIHtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubG9jLWlucHV0LWZpZWxkOmhvdmVyIC5zdWdnZXN0aW9uLWJveC1jb250YWluZXIsXFxuLmxvYy1pbnB1dC1maWVsZDpoYXMoI2xvYzpmb2N1cykgLnN1Z2dlc3Rpb24tYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDI0MCwgMjU0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMThweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDRweDtcXG59XFxuXFxuLnNlYXJjaC1pY29uIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiAyMHB4KSB7XFxuICAuc2VhcmNoLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIH1cXG5cXG59XFxuXFxuLmNvdW50cnktaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1ib3gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOjIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubG9jLXN1Z2dlc3Rpb246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTAsIDU5JSwgOTAlKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tZGF5LXNreTIpO1xcbn1cXG5cXG4ubG9jLXN1Z2dlc3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMCwgNTklLCA5MCUpO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXdlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmN1cnJlbnQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5mb3JlY2FzdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXktZGlzcGxheSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTV2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG93LWhpZ2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcmVjYXN0LWRpc3BsYXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgLmRheS1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDQ1JSAzNSU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHZhcigtLWRheS1za3kxKTtcXG4gICAgcGFkZGluZzogOHB4IDBweDtcXG4gIH1cXG5cXG4gIC5kYXktaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5sb3ctaGlnaCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG59XFxuXFxuLnNldHRpbmdzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OjA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQwLCAyNTQsIDAuOTUpO1xcbiAgd2lkdGg6IHZhcigtLXNldHRpbmdzLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tc2V0dGluZ3MtaGVpZ2h0KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjb2xvcjogdmFyKC0tY2xvdWQtZm9udClcXG59XFxuXFxuLnNldHRpbmdzLmhpZGRlbiB7XFxuICB0cmFuc2xhdGU6IHZhcigtLXNldHRpbmdzLXdpZHRoKTtcXG59XFxuXFxuLmNvZy1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAyNTQpO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MuaGlkZGVuIC5jb2ctaWNvbi1jb250YWluZXIge1xcbiAgdHJhbnNsYXRlOiAtMjVweDtcXG59XFxuXFxuLmNvZy1pY29uIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgaW5wdXQge1xcblxcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgYXV0byAvIDFmciAyMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIGxpIGxhYmVsIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciBsaSBpbnB1dCB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogNHB4IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciBsaSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIGxpIGJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDQ7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgbGkgYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgLm5vLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMgezB8MXwyfDN8NHw1fDZ9IHRoZSBkYXkgb2Ygd2VlaywgMCByZXByZXNlbnRzIFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOlsic2V0dGluZ3MiLCJzdW4iLCJjbGVhck5pZ2h0IiwicGFydGlhbENsb3VkcyIsInBhcnRpYWxDbG91ZHNOaWdodCIsImNsb3VkIiwiYnJva2VuQ2xvdWQiLCJyYWluIiwic3VuUmFpbiIsInRodW5kZXIiLCJzbm93IiwibWlzdCIsIm1hZ0dsYXNzIiwiY29nIiwic2V0dGluZ3NDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImdyYWRpZW50RGF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdyYWRpZW50Q2xvdWQiLCJncmFkaWVudFJhaW4iLCJncmFkaWVudE5pZ2h0IiwiZ3JhZGllbnROaWdodENsb3VkIiwiYm9keSIsImFwcGVuZCIsImdyYWRpZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmFkaWVudHNBcnJheSIsImN1cnJlbnRXZWF0aGVyQ29udGFpbmVyIiwiZm9yZWNhc3RDb250YWluZXIiLCJzZWFyY2hJY29uIiwic2VhcmNoSWNvbkltYWdlIiwiSW1hZ2UiLCJzcmMiLCJjb2dJY29uIiwiY29nSWNvbkltYWdlIiwiY29nSWNvbkNvbnRhaW5lciIsInNldHRpbmdzU2xpZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwic2VsZWN0SWNvbiIsImNvZGUiLCJzb3VyY2UiLCJzZWxlY3RCYWNrZ3JvdW5kIiwiYmciLCJjbGVhclBhZ2UiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXJDdXJyZW50V2VhdGhlciIsImN1cnJlbnQiLCJjdXJyZW50V2VhdGhlckRpc3BsYXkiLCJsb2NhdGlvbiIsImlubmVyVGV4dCIsImxvY2F0aW9uTmFtZSIsInRlbXAiLCJNYXRoIiwiZmxvb3IiLCJtYWluIiwiaWNvbiIsImljb25TVkciLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kIiwiY2xhc3NOYW1lIiwiZ3JhZGllbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJyZW5kZXJGb3JlY2FzdCIsImZvcmVjYXN0IiwiZm9yZWNhc3REaXNwbGF5IiwiZGF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGF5RGlzcGxheSIsImRheVRpdGxlIiwibG93SGlnaCIsImxvdyIsImhpZ2giLCJyZW5kZXJXZWF0aGVyRGV0YWlscyIsImluZm8iLCJjb3VudHJ5U2VsZWN0SW5wdXQiLCJjb3VudHJ5U2VsZWN0TGFiZWwiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyaWVzIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUxpc3QiLCJBRiIsIkFMIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBSSIsIkFRIiwiQUciLCJBUiIsIkFNIiwiQVciLCJBVSIsIkFUIiwiQVoiLCJCUyIsIkJIIiwiQkQiLCJCQiIsIkJZIiwiQkUiLCJCWiIsIkJKIiwiQk0iLCJCVCIsIkJPIiwiQlEiLCJCQSIsIkJXIiwiQlYiLCJCUiIsIklPIiwiQk4iLCJCRyIsIkJGIiwiQkkiLCJDViIsIktIIiwiQ00iLCJDQSIsIktZIiwiQ0YiLCJURCIsIkNMIiwiQ04iLCJDWCIsIkNDIiwiQ08iLCJLTSIsIkNEIiwiQ0ciLCJDSyIsIkNSIiwiSFIiLCJDVSIsIkNXIiwiQ1kiLCJDWiIsIkNJIiwiREsiLCJESiIsIkRNIiwiRE8iLCJFQyIsIkVHIiwiU1YiLCJHUSIsIkVSIiwiRUUiLCJTWiIsIkVUIiwiRksiLCJGTyIsIkZKIiwiRkkiLCJGUiIsIkdGIiwiUEYiLCJURiIsIkdBIiwiR00iLCJHRSIsIkRFIiwiR0giLCJHSSIsIkdSIiwiR0wiLCJHRCIsIkdQIiwiR1UiLCJHVCIsIkdHIiwiR04iLCJHVyIsIkdZIiwiSFQiLCJITSIsIlZBIiwiSE4iLCJISyIsIkhVIiwiSVMiLCJJTiIsIklEIiwiSVIiLCJJUSIsIklFIiwiSU0iLCJJTCIsIklUIiwiSk0iLCJKUCIsIkpFIiwiSk8iLCJLWiIsIktFIiwiS0kiLCJLUCIsIktSIiwiS1ciLCJLRyIsIkxBIiwiTFYiLCJMQiIsIkxTIiwiTFIiLCJMWSIsIkxJIiwiTFQiLCJMVSIsIk1PIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTUgiLCJNUSIsIk1SIiwiTVUiLCJZVCIsIk1YIiwiRk0iLCJNRCIsIk1DIiwiTU4iLCJNRSIsIk1TIiwiTUEiLCJNWiIsIk1NIiwiTkEiLCJOUiIsIk5QIiwiTkwiLCJOQyIsIk5aIiwiTkkiLCJORSIsIk5HIiwiTlUiLCJORiIsIk1QIiwiTk8iLCJPTSIsIlBLIiwiUFciLCJQUyIsIlBBIiwiUEciLCJQWSIsIlBFIiwiUEgiLCJQTiIsIlBMIiwiUFQiLCJQUiIsIlFBIiwiTUsiLCJSTyIsIlJVIiwiUlciLCJSRSIsIkJMIiwiU0giLCJLTiIsIkxDIiwiTUYiLCJQTSIsIlZDIiwiV1MiLCJTTSIsIlNUIiwiU0EiLCJTTiIsIlJTIiwiU0MiLCJTTCIsIlNHIiwiU1giLCJTSyIsIlNJIiwiU0IiLCJTTyIsIlpBIiwiR1MiLCJTUyIsIkVTIiwiTEsiLCJTRCIsIlNSIiwiU0oiLCJTRSIsIkNIIiwiU1kiLCJUVyIsIlRKIiwiVFoiLCJUSCIsIlRMIiwiVEciLCJUSyIsIlRPIiwiVFQiLCJUTiIsIlRSIiwiVE0iLCJUQyIsIlRWIiwiVUciLCJVQSIsIkFFIiwiR0IiLCJVTSIsIlVTIiwiVVkiLCJVWiIsIlZVIiwiVkUiLCJWTiIsIlZHIiwiVkkiLCJXRiIsIkVIIiwiWUUiLCJaTSIsIlpXIiwiQVgiLCJjb3VudHJ5Iiwib3B0IiwiaXNTYW1lRGF5IiwicGFyc2VJU08iLCJnZXREYXkiLCJpc1RvZGF5IiwicmV0cmlldmVXZWF0aGVyRGF0YSIsImxhdCIsImxvbiIsImRhdGEiLCJmZXRjaFByZWZpeCIsIm1pZGRsZSIsImZldGNoU3VmZml4IiwiY3VycmVudFdlYXRoZXIiLCJmZXRjaCIsImZpdmVEYXlXZWF0aGVyIiwianNvbiIsImZpdmVEYXkiLCJhbmFseXplRm9yZWNhc3QiLCJmaW5kTW9zdENvbW1vbiIsImFycmF5IiwiaGlnaGVzdENvdW50IiwibW9zdENvbW1vbiIsIml0ZW0iLCJjb3VudCIsIm90aGVySXRlbSIsInRyYW5zbGF0ZURheSIsIm51bSIsImxpc3QiLCJhcnJheU9mRGF5cyIsInJlZHVjZSIsImEiLCJiIiwibGVuZ3RoIiwibGFzdERhdGUiLCJkdF90eHQiLCJ0aGlzRGF0ZSIsInB1c2giLCJmaXZlRGF5Rm9yZWNhc3QiLCJkYXlPZldlZWsiLCJtaW5UZW1wIiwibWF4VGVtcCIsInRocmVlSG91ciIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsImhhbmRsZVNlYXJjaElucHV0IiwibG9jSW5wdXQiLCJpbml0IiwiZmV0Y2hXZWF0aGVyIiwic3VnZ2VzdGlvbkJveCIsImZpbmRMb2NhdGlvbiIsImdldEVsZW1lbnRCeUlkIiwic3RhdGUiLCJwcmVmaXgiLCJpbnB1dCIsInZhbHVlIiwiYXBpS2V5IiwiTnVtYmVyIiwibG9jYXRpb25MaXN0UmVxdWVzdCIsImxvY2F0aW9uTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY3JlYXRlT3B0aW9uQm94IiwicmVzcG9uc2UiLCJib3giLCJBcnJheSIsImlzQXJyYXkiLCJub1Jlc3VsdHMiLCJmb3JFYWNoIiwic3VnIiwic3VnZ2VzdGlvbiIsIm5hbWUiLCJ3ZWF0aGVyRGF0YSIsImRlbGF5QW5kU2VhcmNoIiwid2FpdCIsIm9wdGlvbkJveCIsInN0YXRlU2VsZWN0IiwiY2xvc2VJY29uIiwiY291bnRyeUlucHV0RmllbGQiLCJjaGlsZHJlbiIsInN0YXRlSW5wdXRGaWVsZCIsImFkZENsZWFyQnV0dG9uIiwiZWxlbWVudCIsImNsb3NlSWNvbkltYWdlIiwiYnRuIiwiaW5wdXRGaWVsZCIsInNldHRpbmdzRm9ybSIsImFkdmFuY2VkU2VhcmNoIiwiYWR2YW5jZWRTZWFyY2hUaXRsZSIsImFkdmFuY2VkU2VhcmNoTGlzdCIsInJlbW92ZSIsInN0YXRlc1NlbGVjdElucHV0Iiwic3RhdGVzU2VsZWN0TGFiZWwiLCJzdGF0ZXNTZWxlY3QiLCJzdGF0ZXMiLCJzdGF0ZXNMaXN0IiwiQUsiLCJDVCIsIkZMIiwiSEkiLCJJQSIsIktTIiwiTUkiLCJOViIsIk5IIiwiTkoiLCJOTSIsIk5ZIiwiTkQiLCJPSCIsIk9LIiwiT1IiLCJSSSIsIlRYIiwiVVQiLCJWVCIsIldBIiwiV1YiLCJXSSIsIldZIl0sInNvdXJjZVJvb3QiOiIifQ==