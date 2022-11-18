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
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun.svg */ "./src/img/sun.svg");
/* harmony import */ var _img_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/clear-night.svg */ "./src/img/clear-night.svg");
/* harmony import */ var _img_partial_clouds_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/partial-clouds.svg */ "./src/img/partial-clouds.svg");
/* harmony import */ var _img_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cloudy-night.svg */ "./src/img/cloudy-night.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cloud.svg */ "./src/img/cloud.svg");
/* harmony import */ var _img_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/broken-clouds.svg */ "./src/img/broken-clouds.svg");
/* harmony import */ var _img_clouds_rain_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/clouds-rain.svg */ "./src/img/clouds-rain.svg");
/* harmony import */ var _img_sun_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/sun-rain.svg */ "./src/img/sun-rain.svg");
/* harmony import */ var _img_thunder_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/thunder.svg */ "./src/img/thunder.svg");
/* harmony import */ var _img_snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/snow.svg */ "./src/img/snow.svg");
/* harmony import */ var _img_mist_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/mist.svg */ "./src/img/mist.svg");
/* harmony import */ var _img_magnify_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/magnify.svg */ "./src/img/magnify.svg");
/* eslint-disable no-restricted-syntax */












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
console.log(gradientsArray);
const currentWeatherContainer = document.querySelector(".current-weather");
const forecastContainer = document.querySelector(".forecast");
const searchIcon = document.querySelector(".search-icon");
const searchIconImage = new Image();
searchIconImage.src = _img_magnify_svg__WEBPACK_IMPORTED_MODULE_11__;
searchIcon.appendChild(searchIconImage);
function selectIcon(code) {
  let source;
  switch (code) {
    case "01d":
      source = _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__;
      break;
    case "01n":
      source = _img_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__;
      break;
    case "02d":
      source = _img_partial_clouds_svg__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case "02n":
      source = _img_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case "03d":
    case "03n":
      source = _img_cloud_svg__WEBPACK_IMPORTED_MODULE_4__;
      break;
    case "04d":
    case "04n":
      source = _img_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_5__;
      break;
    case "09d":
    case "09n":
    case "10n":
      source = _img_clouds_rain_svg__WEBPACK_IMPORTED_MODULE_6__;
      break;
    case "10d":
      source = _img_sun_rain_svg__WEBPACK_IMPORTED_MODULE_7__;
      break;
    case "11d":
    case "11n":
      source = _img_thunder_svg__WEBPACK_IMPORTED_MODULE_8__;
      break;
    case "13d":
    case "13n":
      source = _img_snow_svg__WEBPACK_IMPORTED_MODULE_9__;
      break;
    case "50d":
    case "50n":
      source = _img_mist_svg__WEBPACK_IMPORTED_MODULE_10__;
      break;
    default:
      source = _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/locationSelect.js":
/*!*******************************!*\
  !*** ./src/locationSelect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findLocation": () => (/* binding */ findLocation)
/* harmony export */ });
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ "./src/fetchWeather.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country */ "./src/country.js");



const locInput = document.querySelector("#loc");
const suggestionBox = document.querySelector(".suggestion-box-container");
async function findLocation() {
  const prefix = "http://api.openweathermap.org/geo/1.0/";
  const input = locInput.value;
  let middle;
  const apiKey = "&appid=921cfd876fc7bdd1768497c18dc1bf81";
  if (Number(input)) {
    middle = `zip?zip=${input}`;
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
async function delayAndSearch(value, wait) {
  await delay(wait);
  if (value === locInput.value) {
    const locationList = await findLocation(locInput.value);
    const optionBox = createOptionBox(locationList);
    suggestionBox.appendChild(optionBox);
  }
}
locInput.addEventListener("input", e => {
  if (!e.target.value) {
    return;
  }
  if (e.target.value.length > 4) {
    delayAndSearch(e.target.value, 400);
  } else {
    delayAndSearch(e.target.value, 2000);
  }
});
function createOptionBox(response) {
  if (suggestionBox.firstChild) {
    suggestionBox.removeChild(suggestionBox.firstChild);
  }
  const box = document.createElement("div");
  box.classList.add("suggestion-box");
  if (!Array.isArray(response)) {
    response = [response];
  }
  response.forEach(sug => {
    const suggestion = document.createElement("button");
    suggestion.setAttribute('type', 'button');
    suggestion.classList.add("loc-suggestion");
    suggestion.innerText = `${sug.name}, ${sug.state ?? _country__WEBPACK_IMPORTED_MODULE_2__.countryList[sug.country]}`;
    suggestion.addEventListener('click', async () => {
      const weatherData = await (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(sug);
      weatherData.current.locationName = sug.name;
      console.log(weatherData);
      suggestionBox.removeChild(suggestionBox.firstChild);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
    });
    box.appendChild(suggestion);
  });
  return box;
}


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
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}; */\n\n:root {\n  --background: #282a36;\n  --start-screen-bg: #6273a4f8;\n  --subtle: #6272a4;\n  --pink: #ff79c6;\n  --green: #50fa7b;\n  --yellow: #f1fa8c;\n  --blue: #8be9fd;\n  --plain: #f8f8f2;\n\n  --day-sky1: #4687d8;\n  --day-sky2: #7fafde;\n\n  --cloud1: #f5f5f7;\n  --cloud2: #a1b5c7;\n  --cloud-font: #3b3b3b;\n\n  --rain1: #51606b;\n  --rain2: #97999d;\n\n  --night1: #0b192b;\n  --night2: #013a60;\n  --night-cloud: hsl(204, 24%, 30%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  /* background-color: var(--background); */\n  background-color: #013a6000;\n  color: var(--plain);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.gradient {\n  position: absolute;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.gradient.day {\n  opacity: 1;\n  background-image: linear-gradient(var(--day-sky1), var(--day-sky2));\n}\n\n.gradient.cloud {\n  background-image: linear-gradient(var(--cloud1), var(--cloud2));\n}\n\nbody.cloud {\n  color: var(--cloud-font);\n}\n\n.gradient.rain {\n  background-image: linear-gradient(var(--rain1), var(--rain2));\n}\n\n.gradient.night {\n  background-image: linear-gradient(var(--night1), var(--night2));\n}\n\n.gradient.night-cloud {\n  background-image: linear-gradient(var(--night1), var(--night-cloud), var(--night2));\n\n}\n\n.location-input {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  list-style: none;\n}\n\n#loc {\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  /* width: 150px; */\n  width: 100%;\n  border-radius: 20px;\n  padding: 4px 8px;\n  font-size: 90%;\n  background-color: rgb(232, 240, 254);\n  /* position: relative; */\n}\n\n#loc:focus {\n  outline: 1px solid lightblue;\n}\n\n.loc-input-field {\n  position: relative;\n  min-width: 30px;\n  /* min-width: max-content; */\n  container-type: inline-size;\n  transition: all 0.3s;\n  opacity: 0.3;\n}\n\n.loc-input-field:hover,\n.loc-input-field:has(#loc:focus) {\n  min-width: 150px;\n  opacity: 1;\n}\n\n.search-icon {\n  background-color: rgb(232, 240, 254);\n  position: absolute;\n  height: 18px;\n  right: 5px;\n  top: 4px;\n}\n\n.search-icon img {\n  height: 100%;\n  width: 100%;\n}\n\n@container (max-width: 20px) {\n  .search-icon {\n    position: absolute;\n    background-color: white;\n    width: 30px;\n    height: 1.2rem;\n    top:0;\n    right:0;\n    left:0;\n    bottom: 0;\n    border-radius: 20px;\n  }\n\n}\n\n.country-input {\n  display: none;\n  visibility: hidden;\n  width: 100%;\n}\n\n.suggestion-box-container {\n  position: relative;\n}\n\n.suggestion-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width:200px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.loc-suggestion {\n  width: 100%;\n  background-color: white;\n  padding: 5px 8px;\n  appearance: none;\n  border: none;\n  text-align: left;\n}\n\n.loc-suggestion:focus {\n  outline: none;\n  background-color: hsl(210, 59%, 90%);\n  border-left: 3px solid var(--day-sky2);\n}\n\n.loc-suggestion:hover {\n  background-color: hsl(210, 59%, 90%);\n}\n\n.current-weather .current-weather-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.current-location {\n  font-size: 1.5rem;\n  font-weight: 200;\n  padding: 0;\n  margin: 0;\n}\n\n.current-temp {\n  font-size: 4rem;\n  font-weight: 100;\n  margin-right: -10px;\n}\n\n.current-description {\n  font-size: 1rem;\n  font-weight: 200;\n}\n\n.current-weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  height: 200px;\n}\n\n.icon {\n  height: 80%;\n}\n\n.forecast-display {\n  display: flex;\n  gap: 10px;\n}\n\n.day-display {\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  width: 15vw;\n  align-items: center;\n}\n\n.day-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n}\n\n.low-high {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 200;\n}\n\n@media only screen and (max-width: 600px) {\n  .forecast-display {\n    flex-direction: column;\n    width: 80vw;\n    gap: 0;\n  }\n\n  .day-display {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 20% 50% 30%;\n    border-bottom: 0.5px solid var(--day-sky1);\n    padding: 8px 0px;\n  }\n\n  .day-icon {\n    height: 30px;\n  }\n\n  .low-high {\n    flex-direction: row;\n    gap: 16px;\n  }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}; */\n\n:root {\n  --background: #282a36;\n  --start-screen-bg: #6273a4f8;\n  --subtle: #6272a4;\n  --pink: #ff79c6;\n  --green: #50fa7b;\n  --yellow: #f1fa8c;\n  --blue: #8be9fd;\n  --plain: #f8f8f2;\n\n  --day-sky1: #4687d8;\n  --day-sky2: #7fafde;\n\n  --cloud1: #f5f5f7;\n  --cloud2: #a1b5c7;\n  --cloud-font: #3b3b3b;\n\n  --rain1: #51606b;\n  --rain2: #97999d;\n\n  --night1: #0b192b;\n  --night2: #013a60;\n  --night-cloud: hsl(204, 24%, 30%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  /* background-color: var(--background); */\n  background-color: #013a6000;\n  color: var(--plain);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5vh;\n}\n\n.gradient {\n  position: absolute;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.gradient.day {\n  opacity: 1;\n  background-image: linear-gradient(var(--day-sky1), var(--day-sky2));\n}\n\n.gradient.cloud {\n  background-image: linear-gradient(var(--cloud1), var(--cloud2));\n}\n\nbody.cloud {\n  color: var(--cloud-font);\n}\n\n.gradient.rain {\n  background-image: linear-gradient(var(--rain1), var(--rain2));\n}\n\n.gradient.night {\n  background-image: linear-gradient(var(--night1), var(--night2));\n}\n\n.gradient.night-cloud {\n  background-image: linear-gradient(var(--night1), var(--night-cloud), var(--night2));\n\n}\n\n.location-input {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  list-style: none;\n}\n\n#loc {\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  line-height: 1.2rem;\n  /* width: 150px; */\n  width: 100%;\n  border-radius: 20px;\n  padding: 4px 8px;\n  font-size: 90%;\n  background-color: rgb(232, 240, 254);\n  /* position: relative; */\n}\n\n#loc:focus {\n  outline: 1px solid lightblue;\n}\n\n.loc-input-field {\n  position: relative;\n  min-width: 30px;\n  /* min-width: max-content; */\n  container-type: inline-size;\n  transition: all 0.3s;\n  opacity: 0.3;\n}\n\n.loc-input-field:hover,\n.loc-input-field:has(#loc:focus) {\n  min-width: 150px;\n  opacity: 1;\n}\n\n.search-icon {\n  background-color: rgb(232, 240, 254);\n  position: absolute;\n  height: 18px;\n  right: 5px;\n  top: 4px;\n}\n\n.search-icon img {\n  height: 100%;\n  width: 100%;\n}\n\n@container (max-width: 20px) {\n  .search-icon {\n    position: absolute;\n    background-color: white;\n    width: 30px;\n    height: 1.2rem;\n    top:0;\n    right:0;\n    left:0;\n    bottom: 0;\n    border-radius: 20px;\n  }\n\n}\n\n.country-input {\n  display: none;\n  visibility: hidden;\n  width: 100%;\n}\n\n.suggestion-box-container {\n  position: relative;\n}\n\n.suggestion-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width:200px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.loc-suggestion {\n  width: 100%;\n  background-color: white;\n  padding: 5px 8px;\n  appearance: none;\n  border: none;\n  text-align: left;\n}\n\n.loc-suggestion:focus {\n  outline: none;\n  background-color: hsl(210, 59%, 90%);\n  border-left: 3px solid var(--day-sky2);\n}\n\n.loc-suggestion:hover {\n  background-color: hsl(210, 59%, 90%);\n}\n\n.current-weather .current-weather-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.current-location {\n  font-size: 1.5rem;\n  font-weight: 200;\n  padding: 0;\n  margin: 0;\n}\n\n.current-temp {\n  font-size: 4rem;\n  font-weight: 100;\n  margin-right: -10px;\n}\n\n.current-description {\n  font-size: 1rem;\n  font-weight: 200;\n}\n\n.current-weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  height: 200px;\n}\n\n.icon {\n  height: 80%;\n}\n\n.forecast-display {\n  display: flex;\n  gap: 10px;\n}\n\n.day-display {\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  width: 15vw;\n  align-items: center;\n}\n\n.day-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n}\n\n.low-high {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 0.9rem;\n  font-weight: 200;\n}\n\n@media only screen and (max-width: 600px) {\n  .forecast-display {\n    flex-direction: column;\n    width: 80vw;\n    gap: 0;\n  }\n\n  .day-display {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 20% 50% 30%;\n    border-bottom: 0.5px solid var(--day-sky1);\n    padding: 8px 0px;\n  }\n\n  .day-icon {\n    height: 30px;\n  }\n\n  .low-high {\n    flex-direction: row;\n    gap: 16px;\n  }\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _country_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.js */ "./src/country.js");
/* harmony import */ var _locationSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationSelect */ "./src/locationSelect.js");



const locSubmit = document.querySelector('.loc-submit');
const country = document.querySelector('.country-input');
country.appendChild(_country_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1B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QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TGlDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxlQUFlO0FBQzVCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmdEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCwyQkFBMkIsZ0VBQVU7QUFDckMsNEJBQTRCLGdFQUFVO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzhDO0FBQ1c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JpRjtBQUN4QjtBQUNOO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2QseUJBQXlCLG1FQUFTOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3hFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFO0FBQzFFLGdDQUFnQyxFQUFFLFVBQVUsRUFBRTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxFQUFFLFNBQVMsK0JBQStCLE9BQU8sRUFBRSxTQUFTLCtCQUErQjtBQUM5SCwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1FQUFrQixhQUFhLHFFQUFvQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixtRUFBa0IsYUFBYSxxRUFBb0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRTNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBQ0k7QUFFN0MsTUFBTVUsU0FBUyxHQUFHaFosUUFBUSxDQUFDZ0IsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN2RCxNQUFNZ1QsT0FBTyxHQUFHaFUsUUFBUSxDQUFDZ0IsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRXhEZ1QsT0FBTyxDQUFDMVMsV0FBVyxDQUFDNkMsbURBQWEsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvdW50cnkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uU2VsZWN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHN1biBmcm9tIFwiLi9pbWcvc3VuLnN2Z1wiO1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSBcIi4vaW1nL2NsZWFyLW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IHBhcnRpYWxDbG91ZHMgZnJvbSBcIi4vaW1nL3BhcnRpYWwtY2xvdWRzLnN2Z1wiO1xuaW1wb3J0IHBhcnRpYWxDbG91ZHNOaWdodCBmcm9tIFwiLi9pbWcvY2xvdWR5LW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IGNsb3VkIGZyb20gXCIuL2ltZy9jbG91ZC5zdmdcIjtcbmltcG9ydCBicm9rZW5DbG91ZCBmcm9tIFwiLi9pbWcvYnJva2VuLWNsb3Vkcy5zdmdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuL2ltZy9jbG91ZHMtcmFpbi5zdmdcIjtcbmltcG9ydCBzdW5SYWluIGZyb20gXCIuL2ltZy9zdW4tcmFpbi5zdmdcIjtcbmltcG9ydCB0aHVuZGVyIGZyb20gXCIuL2ltZy90aHVuZGVyLnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSBcIi4vaW1nL3Nub3cuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9pbWcvbWlzdC5zdmdcIjtcbmltcG9ydCBtYWdHbGFzcyBmcm9tIFwiLi9pbWcvbWFnbmlmeS5zdmdcIjtcblxuY29uc3QgZ3JhZGllbnREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZ3JhZGllbnREYXkuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50XCIsIFwiZGF5XCIpO1xuY29uc3QgZ3JhZGllbnRDbG91ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmFkaWVudENsb3VkLmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudFwiLCBcImNsb3VkXCIpO1xuY29uc3QgZ3JhZGllbnRSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmdyYWRpZW50UmFpbi5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnRcIiwgXCJyYWluXCIpO1xuY29uc3QgZ3JhZGllbnROaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ncmFkaWVudE5pZ2h0LmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudFwiLCBcIm5pZ2h0XCIpO1xuY29uc3QgZ3JhZGllbnROaWdodENsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmdyYWRpZW50TmlnaHRDbG91ZC5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnRcIiwgXCJuaWdodC1jbG91ZFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICBncmFkaWVudERheSxcbiAgZ3JhZGllbnRDbG91ZCxcbiAgZ3JhZGllbnRSYWluLFxuICBncmFkaWVudE5pZ2h0LFxuICBncmFkaWVudE5pZ2h0Q2xvdWRcbik7XG5cbmNvbnN0IGdyYWRpZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JhZGllbnRcIik7XG5jb25zdCBncmFkaWVudHNBcnJheSA9IFsuLi5ncmFkaWVudHNdO1xuY29uc29sZS5sb2coZ3JhZGllbnRzQXJyYXkpO1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyXCIpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvblwiKTtcbmNvbnN0IHNlYXJjaEljb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuc2VhcmNoSWNvbkltYWdlLnNyYyA9IG1hZ0dsYXNzO1xuc2VhcmNoSWNvbi5hcHBlbmRDaGlsZChzZWFyY2hJY29uSW1hZ2UpO1xuXG5mdW5jdGlvbiBzZWxlY3RJY29uKGNvZGUpIHtcbiAgbGV0IHNvdXJjZTtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBcIjAxZFwiOlxuICAgICAgc291cmNlID0gc3VuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAxblwiOlxuICAgICAgc291cmNlID0gY2xlYXJOaWdodDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIwMmRcIjpcbiAgICAgIHNvdXJjZSA9IHBhcnRpYWxDbG91ZHM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDJuXCI6XG4gICAgICBzb3VyY2UgPSBwYXJ0aWFsQ2xvdWRzTmlnaHQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDNkXCI6XG4gICAgY2FzZSBcIjAzblwiOlxuICAgICAgc291cmNlID0gY2xvdWQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDRkXCI6XG4gICAgY2FzZSBcIjA0blwiOlxuICAgICAgc291cmNlID0gYnJva2VuQ2xvdWQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMDlkXCI6XG4gICAgY2FzZSBcIjA5blwiOlxuICAgIGNhc2UgXCIxMG5cIjpcbiAgICAgIHNvdXJjZSA9IHJhaW47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTBkXCI6XG4gICAgICBzb3VyY2UgPSBzdW5SYWluO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjExZFwiOlxuICAgIGNhc2UgXCIxMW5cIjpcbiAgICAgIHNvdXJjZSA9IHRodW5kZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMTNkXCI6XG4gICAgY2FzZSBcIjEzblwiOlxuICAgICAgc291cmNlID0gc25vdztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI1MGRcIjpcbiAgICBjYXNlIFwiNTBuXCI6XG4gICAgICBzb3VyY2UgPSBtaXN0O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHNvdXJjZSA9IHN1bjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEJhY2tncm91bmQoY29kZSkge1xuICBsZXQgYmc7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgXCIwMWRcIjpcbiAgICBjYXNlIFwiMDJkXCI6XG4gICAgICBiZyA9IGdyYWRpZW50RGF5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAxblwiOlxuICAgICAgYmcgPSBncmFkaWVudE5pZ2h0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAzZFwiOlxuICAgIGNhc2UgXCIwNGRcIjpcbiAgICBjYXNlIFwiMTNkXCI6XG4gICAgY2FzZSBcIjUwZFwiOlxuICAgICAgYmcgPSBncmFkaWVudENsb3VkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjAyblwiOlxuICAgIGNhc2UgXCIwM25cIjpcbiAgICBjYXNlIFwiMDRuXCI6XG4gICAgY2FzZSBcIjEzblwiOlxuICAgIGNhc2UgXCI1MG5cIjpcbiAgICAgIGJnID0gZ3JhZGllbnROaWdodENsb3VkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjA5ZFwiOlxuICAgIGNhc2UgXCIwOW5cIjpcbiAgICBjYXNlIFwiMTBuXCI6XG4gICAgY2FzZSBcIjEwZFwiOlxuICAgIGNhc2UgXCIxMWRcIjpcbiAgICBjYXNlIFwiMTFuXCI6XG4gICAgICBiZyA9IGdyYWRpZW50UmFpbjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiZyA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIGJnO1xufVxuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gIGlmIChjdXJyZW50V2VhdGhlckNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudFdlYXRoZXJDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgaWYgKGZvcmVjYXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JlY2FzdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih7IGN1cnJlbnQgfSkge1xuICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50V2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtd2VhdGhlci1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gY3VycmVudC5sb2NhdGlvbk5hbWU7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWxvY2F0aW9uXCIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXBcIik7XG4gIHRlbXAuaW5uZXJUZXh0ID0gYCR7TWF0aC5mbG9vcihjdXJyZW50Lm1haW4udGVtcCl9wrBgO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXdlYXRoZXItaWNvblwiKTtcbiAgY29uc3QgaWNvblNWRyA9IG5ldyBJbWFnZSgpO1xuICBpY29uU1ZHLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBpY29uU1ZHLnNyYyA9IHNlbGVjdEljb24oY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuICBpY29uLmFwcGVuZENoaWxkKGljb25TVkcpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBiYWNrZ3JvdW5kID0gc2VsZWN0QmFja2dyb3VuZChjdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gIGlmIChiYWNrZ3JvdW5kID09PSBncmFkaWVudENsb3VkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcImNsb3VkXCI7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xuICB9XG4gIGZvciAoY29uc3QgZ3JhZGllbnQgb2YgZ3JhZGllbnRzQXJyYXkpIHtcbiAgICBpZiAoYmFja2dyb3VuZCA9PT0gZ3JhZGllbnQpIHtcbiAgICAgIGdyYWRpZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmFkaWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZChsb2NhdGlvbiwgdGVtcCwgZGVzY3JpcHRpb24sIGljb24pO1xuICByZXR1cm4gY3VycmVudFdlYXRoZXJEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdCh7IGZvcmVjYXN0IH0pIHtcbiAgY29uc3QgZm9yZWNhc3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9yZWNhc3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kaXNwbGF5XCIpO1xuICBmb3IgKGNvbnN0IGRheSBpbiBmb3JlY2FzdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9yZWNhc3QsIGRheSkpIHtcbiAgICAgIGNvbnN0IGRheURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGF5LWRpc3BsYXlcIik7XG5cbiAgICAgIGNvbnN0IGRheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRheVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkYXktdGl0bGVcIik7XG4gICAgICBkYXlUaXRsZS5pbm5lclRleHQgPSBkYXk7XG4gICAgICBkYXlEaXNwbGF5LmFwcGVuZENoaWxkKGRheVRpdGxlKTtcblxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJkYXktaWNvblwiKTtcbiAgICAgIGNvbnN0IGljb25TVkcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGljb25TVkcuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICBpY29uU1ZHLnNyYyA9IHNlbGVjdEljb24oZm9yZWNhc3RbZGF5XS5pY29uKTtcbiAgICAgIGljb24uYXBwZW5kQ2hpbGQoaWNvblNWRyk7XG5cbiAgICAgIGNvbnN0IGxvd0hpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG93SGlnaC5jbGFzc0xpc3QuYWRkKFwibG93LWhpZ2hcIik7XG4gICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxvdy5pbm5lclRleHQgPSBgTDogJHtmb3JlY2FzdFtkYXldLmxvd33CsGA7XG4gICAgICBoaWdoLmlubmVyVGV4dCA9IGBIOiAke2ZvcmVjYXN0W2RheV0uaGlnaH3CsGA7XG4gICAgICBsb3dIaWdoLmFwcGVuZChsb3csIGhpZ2gpO1xuXG4gICAgICBkYXlEaXNwbGF5LmFwcGVuZChkYXlUaXRsZSwgaWNvbiwgbG93SGlnaCk7XG5cbiAgICAgIGZvcmVjYXN0RGlzcGxheS5hcHBlbmRDaGlsZChkYXlEaXNwbGF5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcmVjYXN0RGlzcGxheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyV2VhdGhlckRldGFpbHMoaW5mbykge1xuICBjbGVhclBhZ2UoKTtcbiAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQ3VycmVudFdlYXRoZXIoaW5mbykpO1xuICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJGb3JlY2FzdChpbmZvKSk7XG59XG4iLCJjb25zdCBjb3VudHJ5U2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgY291bnRyeVNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGNvdW50cmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbmNvdW50cnlTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb3VudHJ5LXNlbGVjdFwiKTtcbmNvdW50cnlTZWxlY3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5jb3VudHJ5U2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb3VudHJ5LXNlbGVjdFwiKTtcbmNvdW50cnlTZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3VudHJ5LXNlbGVjdFwiKTtcbmNvdW50cnlTZWxlY3Quc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcImNvdW50cmllc1wiKTtcbmNvdW50cmllcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdW50cmllc1wiKTtcbmNvdW50cnlTZWxlY3RJbnB1dC5hcHBlbmQoY291bnRyeVNlbGVjdExhYmVsLCBjb3VudHJ5U2VsZWN0LCBjb3VudHJpZXMpO1xuXG5leHBvcnQgY29uc3QgY291bnRyeUxpc3QgPSB7XG4gIEFGOiBcIkFmZ2hhbmlzdGFuXCIsXG4gIEFMOiBcIkFsYmFuaWFcIixcbiAgRFo6IFwiQWxnZXJpYVwiLFxuICBBUzogXCJBbWVyaWNhbiBTYW1vYVwiLFxuICBBRDogXCJBbmRvcnJhXCIsXG4gIEFPOiBcIkFuZ29sYVwiLFxuICBBSTogXCJBbmd1aWxsYVwiLFxuICBBUTogXCJBbnRhcmN0aWNhXCIsXG4gIEFHOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcbiAgQVI6IFwiQXJnZW50aW5hXCIsXG4gIEFNOiBcIkFybWVuaWFcIixcbiAgQVc6IFwiQXJ1YmFcIixcbiAgQVU6IFwiQXVzdHJhbGlhXCIsXG4gIEFUOiBcIkF1c3RyaWFcIixcbiAgQVo6IFwiQXplcmJhaWphblwiLFxuICBCUzogXCJCYWhhbWFzICh0aGUpXCIsXG4gIEJIOiBcIkJhaHJhaW5cIixcbiAgQkQ6IFwiQmFuZ2xhZGVzaFwiLFxuICBCQjogXCJCYXJiYWRvc1wiLFxuICBCWTogXCJCZWxhcnVzXCIsXG4gIEJFOiBcIkJlbGdpdW1cIixcbiAgQlo6IFwiQmVsaXplXCIsXG4gIEJKOiBcIkJlbmluXCIsXG4gIEJNOiBcIkJlcm11ZGFcIixcbiAgQlQ6IFwiQmh1dGFuXCIsXG4gIEJPOiBcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCIsXG4gIEJROiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsXG4gIEJBOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcbiAgQlc6IFwiQm90c3dhbmFcIixcbiAgQlY6IFwiQm91dmV0IElzbGFuZFwiLFxuICBCUjogXCJCcmF6aWxcIixcbiAgSU86IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5ICh0aGUpXCIsXG4gIEJOOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXG4gIEJHOiBcIkJ1bGdhcmlhXCIsXG4gIEJGOiBcIkJ1cmtpbmEgRmFzb1wiLFxuICBCSTogXCJCdXJ1bmRpXCIsXG4gIENWOiBcIkNhYm8gVmVyZGVcIixcbiAgS0g6IFwiQ2FtYm9kaWFcIixcbiAgQ006IFwiQ2FtZXJvb25cIixcbiAgQ0E6IFwiQ2FuYWRhXCIsXG4gIEtZOiBcIkNheW1hbiBJc2xhbmRzICh0aGUpXCIsXG4gIENGOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAodGhlKVwiLFxuICBURDogXCJDaGFkXCIsXG4gIENMOiBcIkNoaWxlXCIsXG4gIENOOiBcIkNoaW5hXCIsXG4gIENYOiBcIkNocmlzdG1hcyBJc2xhbmRcIixcbiAgQ0M6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMgKHRoZSlcIixcbiAgQ086IFwiQ29sb21iaWFcIixcbiAgS006IFwiQ29tb3JvcyAodGhlKVwiLFxuICBDRDogXCJDb25nbyAodGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwiLFxuICBDRzogXCJDb25nbyAodGhlKVwiLFxuICBDSzogXCJDb29rIElzbGFuZHMgKHRoZSlcIixcbiAgQ1I6IFwiQ29zdGEgUmljYVwiLFxuICBIUjogXCJDcm9hdGlhXCIsXG4gIENVOiBcIkN1YmFcIixcbiAgQ1c6IFwiQ3VyYcOnYW9cIixcbiAgQ1k6IFwiQ3lwcnVzXCIsXG4gIENaOiBcIkN6ZWNoaWFcIixcbiAgQ0k6IFwiQ8O0dGUgZCdJdm9pcmVcIixcbiAgREs6IFwiRGVubWFya1wiLFxuICBESjogXCJEamlib3V0aVwiLFxuICBETTogXCJEb21pbmljYVwiLFxuICBETzogXCJEb21pbmljYW4gUmVwdWJsaWMgKHRoZSlcIixcbiAgRUM6IFwiRWN1YWRvclwiLFxuICBFRzogXCJFZ3lwdFwiLFxuICBTVjogXCJFbCBTYWx2YWRvclwiLFxuICBHUTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxuICBFUjogXCJFcml0cmVhXCIsXG4gIEVFOiBcIkVzdG9uaWFcIixcbiAgU1o6IFwiRXN3YXRpbmlcIixcbiAgRVQ6IFwiRXRoaW9waWFcIixcbiAgRks6IFwiRmFsa2xhbmQgSXNsYW5kcyAodGhlKSBbTWFsdmluYXNdXCIsXG4gIEZPOiBcIkZhcm9lIElzbGFuZHMgKHRoZSlcIixcbiAgRko6IFwiRmlqaVwiLFxuICBGSTogXCJGaW5sYW5kXCIsXG4gIEZSOiBcIkZyYW5jZVwiLFxuICBHRjogXCJGcmVuY2ggR3VpYW5hXCIsXG4gIFBGOiBcIkZyZW5jaCBQb2x5bmVzaWFcIixcbiAgVEY6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpXCIsXG4gIEdBOiBcIkdhYm9uXCIsXG4gIEdNOiBcIkdhbWJpYSAodGhlKVwiLFxuICBHRTogXCJHZW9yZ2lhXCIsXG4gIERFOiBcIkdlcm1hbnlcIixcbiAgR0g6IFwiR2hhbmFcIixcbiAgR0k6IFwiR2licmFsdGFyXCIsXG4gIEdSOiBcIkdyZWVjZVwiLFxuICBHTDogXCJHcmVlbmxhbmRcIixcbiAgR0Q6IFwiR3JlbmFkYVwiLFxuICBHUDogXCJHdWFkZWxvdXBlXCIsXG4gIEdVOiBcIkd1YW1cIixcbiAgR1Q6IFwiR3VhdGVtYWxhXCIsXG4gIEdHOiBcIkd1ZXJuc2V5XCIsXG4gIEdOOiBcIkd1aW5lYVwiLFxuICBHVzogXCJHdWluZWEtQmlzc2F1XCIsXG4gIEdZOiBcIkd1eWFuYVwiLFxuICBIVDogXCJIYWl0aVwiLFxuICBITTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcbiAgVkE6IFwiSG9seSBTZWUgKHRoZSlcIixcbiAgSE46IFwiSG9uZHVyYXNcIixcbiAgSEs6IFwiSG9uZyBLb25nXCIsXG4gIEhVOiBcIkh1bmdhcnlcIixcbiAgSVM6IFwiSWNlbGFuZFwiLFxuICBJTjogXCJJbmRpYVwiLFxuICBJRDogXCJJbmRvbmVzaWFcIixcbiAgSVI6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIixcbiAgSVE6IFwiSXJhcVwiLFxuICBJRTogXCJJcmVsYW5kXCIsXG4gIElNOiBcIklzbGUgb2YgTWFuXCIsXG4gIElMOiBcIklzcmFlbFwiLFxuICBJVDogXCJJdGFseVwiLFxuICBKTTogXCJKYW1haWNhXCIsXG4gIEpQOiBcIkphcGFuXCIsXG4gIEpFOiBcIkplcnNleVwiLFxuICBKTzogXCJKb3JkYW5cIixcbiAgS1o6IFwiS2F6YWtoc3RhblwiLFxuICBLRTogXCJLZW55YVwiLFxuICBLSTogXCJLaXJpYmF0aVwiLFxuICBLUDogXCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG4gIEtSOiBcIktvcmVhICh0aGUgUmVwdWJsaWMgb2YpXCIsXG4gIEtXOiBcIkt1d2FpdFwiLFxuICBLRzogXCJLeXJneXpzdGFuXCIsXG4gIExBOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljICh0aGUpXCIsXG4gIExWOiBcIkxhdHZpYVwiLFxuICBMQjogXCJMZWJhbm9uXCIsXG4gIExTOiBcIkxlc290aG9cIixcbiAgTFI6IFwiTGliZXJpYVwiLFxuICBMWTogXCJMaWJ5YVwiLFxuICBMSTogXCJMaWVjaHRlbnN0ZWluXCIsXG4gIExUOiBcIkxpdGh1YW5pYVwiLFxuICBMVTogXCJMdXhlbWJvdXJnXCIsXG4gIE1POiBcIk1hY2FvXCIsXG4gIE1HOiBcIk1hZGFnYXNjYXJcIixcbiAgTVc6IFwiTWFsYXdpXCIsXG4gIE1ZOiBcIk1hbGF5c2lhXCIsXG4gIE1WOiBcIk1hbGRpdmVzXCIsXG4gIE1MOiBcIk1hbGlcIixcbiAgTVQ6IFwiTWFsdGFcIixcbiAgTUg6IFwiTWFyc2hhbGwgSXNsYW5kcyAodGhlKVwiLFxuICBNUTogXCJNYXJ0aW5pcXVlXCIsXG4gIE1SOiBcIk1hdXJpdGFuaWFcIixcbiAgTVU6IFwiTWF1cml0aXVzXCIsXG4gIFlUOiBcIk1heW90dGVcIixcbiAgTVg6IFwiTWV4aWNvXCIsXG4gIEZNOiBcIk1pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpXCIsXG4gIE1EOiBcIk1vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZilcIixcbiAgTUM6IFwiTW9uYWNvXCIsXG4gIE1OOiBcIk1vbmdvbGlhXCIsXG4gIE1FOiBcIk1vbnRlbmVncm9cIixcbiAgTVM6IFwiTW9udHNlcnJhdFwiLFxuICBNQTogXCJNb3JvY2NvXCIsXG4gIE1aOiBcIk1vemFtYmlxdWVcIixcbiAgTU06IFwiTXlhbm1hclwiLFxuICBOQTogXCJOYW1pYmlhXCIsXG4gIE5SOiBcIk5hdXJ1XCIsXG4gIE5QOiBcIk5lcGFsXCIsXG4gIE5MOiBcIk5ldGhlcmxhbmRzICh0aGUpXCIsXG4gIE5DOiBcIk5ldyBDYWxlZG9uaWFcIixcbiAgTlo6IFwiTmV3IFplYWxhbmRcIixcbiAgTkk6IFwiTmljYXJhZ3VhXCIsXG4gIE5FOiBcIk5pZ2VyICh0aGUpXCIsXG4gIE5HOiBcIk5pZ2VyaWFcIixcbiAgTlU6IFwiTml1ZVwiLFxuICBORjogXCJOb3Jmb2xrIElzbGFuZFwiLFxuICBNUDogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMgKHRoZSlcIixcbiAgTk86IFwiTm9yd2F5XCIsXG4gIE9NOiBcIk9tYW5cIixcbiAgUEs6IFwiUGFraXN0YW5cIixcbiAgUFc6IFwiUGFsYXVcIixcbiAgUFM6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFxuICBQQTogXCJQYW5hbWFcIixcbiAgUEc6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLFxuICBQWTogXCJQYXJhZ3VheVwiLFxuICBQRTogXCJQZXJ1XCIsXG4gIFBIOiBcIlBoaWxpcHBpbmVzICh0aGUpXCIsXG4gIFBOOiBcIlBpdGNhaXJuXCIsXG4gIFBMOiBcIlBvbGFuZFwiLFxuICBQVDogXCJQb3J0dWdhbFwiLFxuICBQUjogXCJQdWVydG8gUmljb1wiLFxuICBRQTogXCJRYXRhclwiLFxuICBNSzogXCJSZXB1YmxpYyBvZiBOb3J0aCBNYWNlZG9uaWFcIixcbiAgUk86IFwiUm9tYW5pYVwiLFxuICBSVTogXCJSdXNzaWFuIEZlZGVyYXRpb24gKHRoZSlcIixcbiAgUlc6IFwiUndhbmRhXCIsXG4gIFJFOiBcIlLDqXVuaW9uXCIsXG4gIEJMOiBcIlNhaW50IEJhcnRow6lsZW15XCIsXG4gIFNIOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsXG4gIEtOOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICBMQzogXCJTYWludCBMdWNpYVwiLFxuICBNRjogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLFxuICBQTTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXG4gIFZDOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsXG4gIFdTOiBcIlNhbW9hXCIsXG4gIFNNOiBcIlNhbiBNYXJpbm9cIixcbiAgU1Q6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsXG4gIFNBOiBcIlNhdWRpIEFyYWJpYVwiLFxuICBTTjogXCJTZW5lZ2FsXCIsXG4gIFJTOiBcIlNlcmJpYVwiLFxuICBTQzogXCJTZXljaGVsbGVzXCIsXG4gIFNMOiBcIlNpZXJyYSBMZW9uZVwiLFxuICBTRzogXCJTaW5nYXBvcmVcIixcbiAgU1g6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLFxuICBTSzogXCJTbG92YWtpYVwiLFxuICBTSTogXCJTbG92ZW5pYVwiLFxuICBTQjogXCJTb2xvbW9uIElzbGFuZHNcIixcbiAgU086IFwiU29tYWxpYVwiLFxuICBaQTogXCJTb3V0aCBBZnJpY2FcIixcbiAgR1M6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIixcbiAgU1M6IFwiU291dGggU3VkYW5cIixcbiAgRVM6IFwiU3BhaW5cIixcbiAgTEs6IFwiU3JpIExhbmthXCIsXG4gIFNEOiBcIlN1ZGFuICh0aGUpXCIsXG4gIFNSOiBcIlN1cmluYW1lXCIsXG4gIFNKOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIixcbiAgU0U6IFwiU3dlZGVuXCIsXG4gIENIOiBcIlN3aXR6ZXJsYW5kXCIsXG4gIFNZOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsXG4gIFRXOiBcIlRhaXdhblwiLFxuICBUSjogXCJUYWppa2lzdGFuXCIsXG4gIFRaOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIixcbiAgVEg6IFwiVGhhaWxhbmRcIixcbiAgVEw6IFwiVGltb3ItTGVzdGVcIixcbiAgVEc6IFwiVG9nb1wiLFxuICBUSzogXCJUb2tlbGF1XCIsXG4gIFRPOiBcIlRvbmdhXCIsXG4gIFRUOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixcbiAgVE46IFwiVHVuaXNpYVwiLFxuICBUUjogXCJUdXJrZXlcIixcbiAgVE06IFwiVHVya21lbmlzdGFuXCIsXG4gIFRDOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKVwiLFxuICBUVjogXCJUdXZhbHVcIixcbiAgVUc6IFwiVWdhbmRhXCIsXG4gIFVBOiBcIlVrcmFpbmVcIixcbiAgQUU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKHRoZSlcIixcbiAgR0I6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZCAodGhlKVwiLFxuICBVTTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSlcIixcbiAgVVM6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhICh0aGUpXCIsXG4gIFVZOiBcIlVydWd1YXlcIixcbiAgVVo6IFwiVXpiZWtpc3RhblwiLFxuICBWVTogXCJWYW51YXR1XCIsXG4gIFZFOiBcIlZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZilcIixcbiAgVk46IFwiVmlldCBOYW1cIixcbiAgVkc6IFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCIsXG4gIFZJOiBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwiLFxuICBXRjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLFxuICBFSDogXCJXZXN0ZXJuIFNhaGFyYVwiLFxuICBZRTogXCJZZW1lblwiLFxuICBaTTogXCJaYW1iaWFcIixcbiAgWlc6IFwiWmltYmFid2VcIixcbiAgQVg6IFwiw4VsYW5kIElzbGFuZHNcIixcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuZm9yIChjb25zdCBjb3VudHJ5IGluIGNvdW50cnlMaXN0KSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY291bnRyeUxpc3QsIGNvdW50cnkpKSB7XG4gICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY291bnRyeSk7XG4gICAgb3B0LmlubmVyVGV4dCA9IGNvdW50cnlMaXN0W2NvdW50cnldO1xuICAgIGNvdW50cmllcy5hcHBlbmRDaGlsZChvcHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cnlTZWxlY3RJbnB1dDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHsgaXNTYW1lRGF5LCBwYXJzZUlTTywgZ2V0RGF5LCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJldHJpZXZlV2VhdGhlckRhdGEoeyBsYXQsIGxvbiB9KSB7XG4gIC8vIGNvbnN0IGZldGNoUHJlZml4ID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3ppcD0nO1xuICBjb25zdCBkYXRhID0ge307XG4gIGNvbnN0IGZldGNoUHJlZml4ID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvXCI7XG4gIGNvbnN0IG1pZGRsZSA9IGBsYXQ9JHtsYXR9Jmxvbj0ke2xvbn1gO1xuICBjb25zdCBmZXRjaFN1ZmZpeCA9IFwiJmFwcGlkPTkyMWNmZDg3NmZjN2JkZDE3Njg0OTdjMThkYzFiZjgxJnVuaXRzPWltcGVyaWFsXCI7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7ZmV0Y2hQcmVmaXh9L3dlYXRoZXI/JHttaWRkbGV9JHtmZXRjaFN1ZmZpeH1gXG4gICk7XG4gIGNvbnN0IGZpdmVEYXlXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7ZmV0Y2hQcmVmaXh9L2ZvcmVjYXN0PyR7bWlkZGxlfSR7ZmV0Y2hTdWZmaXh9YFxuICApO1xuICBkYXRhLmN1cnJlbnQgPSBhd2FpdCBjdXJyZW50V2VhdGhlci5qc29uKCk7XG4gIGRhdGEuZml2ZURheSA9IGF3YWl0IGZpdmVEYXlXZWF0aGVyLmpzb24oKTtcbiAgZGF0YS5mb3JlY2FzdCA9IGFuYWx5emVGb3JlY2FzdChkYXRhLmZpdmVEYXkpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZmluZE1vc3RDb21tb24oYXJyYXkpIHtcbiAgbGV0IGhpZ2hlc3RDb3VudCA9IDA7XG4gIGxldCBtb3N0Q29tbW9uO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyYXkpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgb3RoZXJJdGVtIG9mIGFycmF5KSB7XG4gICAgICBpZiAoaXRlbSA9PT0gb3RoZXJJdGVtKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb3VudCA+IGhpZ2hlc3RDb3VudCkge1xuICAgICAgaGlnaGVzdENvdW50ID0gY291bnQ7XG4gICAgICBtb3N0Q29tbW9uID0gaXRlbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vc3RDb21tb247XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZURheShudW0pIHtcbiAgbGV0IGRheTtcbiAgc3dpdGNoIChudW0pIHtcbiAgICBjYXNlIDA6XG4gICAgICBkYXkgPSBcIlN1bmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgZGF5ID0gXCJNb25kYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGRheSA9IFwiVHVlc2RheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgZGF5ID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGRheSA9IFwiVGh1cnNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIGRheSA9IFwiRnJpZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBkYXkgPSBcIlNhdHVyZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGF5ID0gXCJubyBkYXlcIjtcbiAgfVxuICByZXR1cm4gZGF5O1xufVxuXG5mdW5jdGlvbiBhbmFseXplRm9yZWNhc3QoZGF0YSkge1xuICBjb25zdCBhcnJheSA9IGRhdGEubGlzdDtcbiAgY29uc3QgYXJyYXlPZkRheXMgPSBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxhc3REYXRlID0gcGFyc2VJU08oYVthLmxlbmd0aCAtIDFdWzBdLmR0X3R4dCk7XG4gICAgICBjb25zdCB0aGlzRGF0ZSA9IHBhcnNlSVNPKGIuZHRfdHh0KTtcbiAgICAgIGlmIChpc1NhbWVEYXkobGFzdERhdGUsIHRoaXNEYXRlKSkge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0ucHVzaChiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEucHVzaChbYl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhLnB1c2goW2JdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmaXZlRGF5Rm9yZWNhc3QgPSB7fTtcbiAgZm9yIChjb25zdCBkYXkgb2YgYXJyYXlPZkRheXMpIHtcbiAgICBpZiAoaXNUb2RheShwYXJzZUlTTyhkYXlbMF0uZHRfdHh0KSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgZGF5T2ZXZWVrO1xuICAgIGxldCBtaW5UZW1wO1xuICAgIGxldCBtYXhUZW1wO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gW107XG4gICAgY29uc3QgaWNvbiA9IFtdO1xuXG4gICAgZm9yIChjb25zdCB0aHJlZUhvdXIgb2YgZGF5KSB7XG4gICAgICBpZiAoIWRheU9mV2Vlaykge1xuICAgICAgICBkYXlPZldlZWsgPSB0cmFuc2xhdGVEYXkoZ2V0RGF5KHBhcnNlSVNPKHRocmVlSG91ci5kdF90eHQpKSk7XG4gICAgICB9XG4gICAgICBpZiAoIW1pblRlbXAgfHwgdGhyZWVIb3VyLm1haW4udGVtcF9taW4gPCBtaW5UZW1wKSB7XG4gICAgICAgIG1pblRlbXAgPSBNYXRoLmZsb29yKHRocmVlSG91ci5tYWluLnRlbXBfbWluKTtcbiAgICAgIH1cbiAgICAgIGlmICghbWF4VGVtcCB8fCB0aHJlZUhvdXIubWFpbi50ZW1wX21heCA+IG1heFRlbXApIHtcbiAgICAgICAgbWF4VGVtcCA9IE1hdGguZmxvb3IodGhyZWVIb3VyLm1haW4udGVtcF9tYXgpO1xuICAgICAgfVxuICAgICAgaWYgKHRocmVlSG91ci53ZWF0aGVyWzBdLmljb24uaW5jbHVkZXMoXCJkXCIpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnB1c2godGhyZWVIb3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgICBpY29uLnB1c2godGhyZWVIb3VyLndlYXRoZXJbMF0uaWNvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZml2ZURheUZvcmVjYXN0W2RheU9mV2Vla10gPSB7XG4gICAgICBoaWdoOiBtYXhUZW1wLFxuICAgICAgbG93OiBtaW5UZW1wLFxuICAgICAgZGVzY3JpcHRpb246IGZpbmRNb3N0Q29tbW9uKGRlc2NyaXB0aW9uKSxcbiAgICAgIGljb246IGZpbmRNb3N0Q29tbW9uKGljb24pLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZpdmVEYXlGb3JlY2FzdDtcbn1cbiIsImltcG9ydCBmZXRjaFdlYXRoZXIgZnJvbSAnLi9mZXRjaFdlYXRoZXInO1xuaW1wb3J0IHJlbmRlcldlYXRoZXJEZXRhaWxzIGZyb20gJy4vRE9NJztcbmltcG9ydCB7IGNvdW50cnlMaXN0IH0gZnJvbSAnLi9jb3VudHJ5JztcblxuY29uc3QgbG9jSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY1wiKTtcbmNvbnN0IHN1Z2dlc3Rpb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Z2dlc3Rpb24tYm94LWNvbnRhaW5lclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZmluZExvY2F0aW9uKCkge1xuICBjb25zdCBwcmVmaXggPSBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvXCI7XG4gIGNvbnN0IGlucHV0ID0gbG9jSW5wdXQudmFsdWU7XG4gIGxldCBtaWRkbGU7XG4gIGNvbnN0IGFwaUtleSA9IFwiJmFwcGlkPTkyMWNmZDg3NmZjN2JkZDE3Njg0OTdjMThkYzFiZjgxXCI7XG4gIGlmIChOdW1iZXIoaW5wdXQpKSB7XG4gICAgbWlkZGxlID0gYHppcD96aXA9JHtpbnB1dH1gO1xuICB9IGVsc2Uge1xuICAgIG1pZGRsZSA9IGBkaXJlY3Q/cT0ke2lucHV0fSZsaW1pdD03YDtcbiAgfVxuICBjb25zdCBsb2NhdGlvbkxpc3RSZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7cHJlZml4fSR7bWlkZGxlfSR7YXBpS2V5fWApO1xuICBjb25zdCBsb2NhdGlvbkxpc3QgPSBhd2FpdCBsb2NhdGlvbkxpc3RSZXF1ZXN0Lmpzb24oKTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25MaXN0KTtcbiAgcmV0dXJuIGxvY2F0aW9uTGlzdDtcblxuICAvLyAnZGlyZWN0P3E9e2NpdHkgbmFtZX0se3N0YXRlIGNvZGV9LHtjb3VudHJ5IGNvZGV9JmxpbWl0PXtsaW1pdH0mYXBwaWQ9e0FQSSBrZXl9XG4gIC8vICd6aXA/emlwPXt6aXAgY29kZX0se2NvdW50cnkgY29kZX0mYXBwaWQ9e0FQSSBrZXl9XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxheUFuZFNlYXJjaCh2YWx1ZSwgd2FpdCkge1xuICBhd2FpdCBkZWxheSh3YWl0KTtcbiAgaWYgKHZhbHVlID09PSBsb2NJbnB1dC52YWx1ZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uTGlzdCA9IGF3YWl0IGZpbmRMb2NhdGlvbihsb2NJbnB1dC52YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9uQm94ID0gY3JlYXRlT3B0aW9uQm94KGxvY2F0aW9uTGlzdCk7XG4gICAgc3VnZ2VzdGlvbkJveC5hcHBlbmRDaGlsZChvcHRpb25Cb3gpO1xuICB9XG59XG5cbmxvY0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgZGVsYXlBbmRTZWFyY2goZS50YXJnZXQudmFsdWUsIDQwMCk7XG4gIH0gZWxzZSB7XG4gICAgZGVsYXlBbmRTZWFyY2goZS50YXJnZXQudmFsdWUsIDIwMDApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uQm94KHJlc3BvbnNlKSB7XG4gIGlmIChzdWdnZXN0aW9uQm94LmZpcnN0Q2hpbGQpIHtcbiAgICBzdWdnZXN0aW9uQm94LnJlbW92ZUNoaWxkKHN1Z2dlc3Rpb25Cb3guZmlyc3RDaGlsZCk7XG4gIH1cbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm94LmNsYXNzTGlzdC5hZGQoXCJzdWdnZXN0aW9uLWJveFwiKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3BvbnNlKSkge1xuICAgIHJlc3BvbnNlID0gW3Jlc3BvbnNlXTtcbiAgfVxuICByZXNwb25zZS5mb3JFYWNoKChzdWcpID0+IHtcbiAgICBjb25zdCBzdWdnZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWdnZXN0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWdnZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2Mtc3VnZ2VzdGlvblwiKTtcbiAgICBzdWdnZXN0aW9uLmlubmVyVGV4dCA9IGAke3N1Zy5uYW1lfSwgJHtzdWcuc3RhdGUgPz8gY291bnRyeUxpc3Rbc3VnLmNvdW50cnldfWA7XG4gICAgc3VnZ2VzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHN1Zyk7XG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmxvY2F0aW9uTmFtZSA9IHN1Zy5uYW1lO1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgc3VnZ2VzdGlvbkJveC5yZW1vdmVDaGlsZChzdWdnZXN0aW9uQm94LmZpcnN0Q2hpbGQpXG4gICAgICByZW5kZXJXZWF0aGVyRGV0YWlscyh3ZWF0aGVyRGF0YSk7XG4gICAgfSlcbiAgICBib3guYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbik7XG4gIH0pO1xuXG4gIHJldHVybiBib3g7XG59XG5cbmV4cG9ydCB7IGZpbmRMb2NhdGlvbiB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKCcuL215LWZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9teS1mb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufTsgKi9cXG5cXG46cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICMyODJhMzY7XFxuICAtLXN0YXJ0LXNjcmVlbi1iZzogIzYyNzNhNGY4O1xcbiAgLS1zdWJ0bGU6ICM2MjcyYTQ7XFxuICAtLXBpbms6ICNmZjc5YzY7XFxuICAtLWdyZWVuOiAjNTBmYTdiO1xcbiAgLS15ZWxsb3c6ICNmMWZhOGM7XFxuICAtLWJsdWU6ICM4YmU5ZmQ7XFxuICAtLXBsYWluOiAjZjhmOGYyO1xcblxcbiAgLS1kYXktc2t5MTogIzQ2ODdkODtcXG4gIC0tZGF5LXNreTI6ICM3ZmFmZGU7XFxuXFxuICAtLWNsb3VkMTogI2Y1ZjVmNztcXG4gIC0tY2xvdWQyOiAjYTFiNWM3O1xcbiAgLS1jbG91ZC1mb250OiAjM2IzYjNiO1xcblxcbiAgLS1yYWluMTogIzUxNjA2YjtcXG4gIC0tcmFpbjI6ICM5Nzk5OWQ7XFxuXFxuICAtLW5pZ2h0MTogIzBiMTkyYjtcXG4gIC0tbmlnaHQyOiAjMDEzYTYwO1xcbiAgLS1uaWdodC1jbG91ZDogaHNsKDIwNCwgMjQlLCAzMCUpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTNhNjAwMDtcXG4gIGNvbG9yOiB2YXIoLS1wbGFpbik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4uZ3JhZGllbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5ncmFkaWVudC5kYXkge1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kYXktc2t5MSksIHZhcigtLWRheS1za3kyKSk7XFxufVxcblxcbi5ncmFkaWVudC5jbG91ZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY2xvdWQxKSwgdmFyKC0tY2xvdWQyKSk7XFxufVxcblxcbmJvZHkuY2xvdWQge1xcbiAgY29sb3I6IHZhcigtLWNsb3VkLWZvbnQpO1xcbn1cXG5cXG4uZ3JhZGllbnQucmFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tcmFpbjEpLCB2YXIoLS1yYWluMikpO1xcbn1cXG5cXG4uZ3JhZGllbnQubmlnaHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLW5pZ2h0MSksIHZhcigtLW5pZ2h0MikpO1xcbn1cXG5cXG4uZ3JhZGllbnQubmlnaHQtY2xvdWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLW5pZ2h0MSksIHZhcigtLW5pZ2h0LWNsb3VkKSwgdmFyKC0tbmlnaHQyKSk7XFxuXFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2xvYyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICAvKiB3aWR0aDogMTUwcHg7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyNDAsIDI1NCk7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNsb2M6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmxvYy1pbnB1dC1maWVsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICAvKiBtaW4td2lkdGg6IG1heC1jb250ZW50OyAqL1xcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5sb2MtaW5wdXQtZmllbGQ6aG92ZXIsXFxuLmxvYy1pbnB1dC1maWVsZDpoYXMoI2xvYzpmb2N1cykge1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyNDAsIDI1NCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiA0cHg7XFxufVxcblxcbi5zZWFyY2gtaWNvbiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBjb250YWluZXIgKG1heC13aWR0aDogMjBweCkge1xcbiAgLnNlYXJjaC1pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbGVmdDowO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB9XFxuXFxufVxcblxcbi5jb3VudHJ5LWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tYm94LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOjIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubG9jLXN1Z2dlc3Rpb246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTAsIDU5JSwgOTAlKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tZGF5LXNreTIpO1xcbn1cXG5cXG4ubG9jLXN1Z2dlc3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMCwgNTklLCA5MCUpO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXdlYXRoZXItZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmN1cnJlbnQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5mb3JlY2FzdC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kYXktZGlzcGxheSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTV2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG93LWhpZ2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZvcmVjYXN0LWRpc3BsYXkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgLmRheS1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDUwJSAzMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHZhcigtLWRheS1za3kxKTtcXG4gICAgcGFkZGluZzogOHB4IDBweDtcXG4gIH1cXG5cXG4gIC5kYXktaWNvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5sb3ctaGlnaCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNz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Z0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLE1BQU07RUFDUjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDBDQUEwQztJQUMxQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL215LWZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59OyAqL1xcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogIzI4MmEzNjtcXG4gIC0tc3RhcnQtc2NyZWVuLWJnOiAjNjI3M2E0Zjg7XFxuICAtLXN1YnRsZTogIzYyNzJhNDtcXG4gIC0tcGluazogI2ZmNzljNjtcXG4gIC0tZ3JlZW46ICM1MGZhN2I7XFxuICAtLXllbGxvdzogI2YxZmE4YztcXG4gIC0tYmx1ZTogIzhiZTlmZDtcXG4gIC0tcGxhaW46ICNmOGY4ZjI7XFxuXFxuICAtLWRheS1za3kxOiAjNDY4N2Q4O1xcbiAgLS1kYXktc2t5MjogIzdmYWZkZTtcXG5cXG4gIC0tY2xvdWQxOiAjZjVmNWY3O1xcbiAgLS1jbG91ZDI6ICNhMWI1Yzc7XFxuICAtLWNsb3VkLWZvbnQ6ICMzYjNiM2I7XFxuXFxuICAtLXJhaW4xOiAjNTE2MDZiO1xcbiAgLS1yYWluMjogIzk3OTk5ZDtcXG5cXG4gIC0tbmlnaHQxOiAjMGIxOTJiO1xcbiAgLS1uaWdodDI6ICMwMTNhNjA7XFxuICAtLW5pZ2h0LWNsb3VkOiBoc2woMjA0LCAyNCUsIDMwJSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxM2E2MDAwO1xcbiAgY29sb3I6IHZhcigtLXBsYWluKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5ncmFkaWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuXFxuLmdyYWRpZW50LmRheSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWRheS1za3kxKSwgdmFyKC0tZGF5LXNreTIpKTtcXG59XFxuXFxuLmdyYWRpZW50LmNsb3VkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jbG91ZDEpLCB2YXIoLS1jbG91ZDIpKTtcXG59XFxuXFxuYm9keS5jbG91ZCB7XFxuICBjb2xvcjogdmFyKC0tY2xvdWQtZm9udCk7XFxufVxcblxcbi5ncmFkaWVudC5yYWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1yYWluMSksIHZhcigtLXJhaW4yKSk7XFxufVxcblxcbi5ncmFkaWVudC5uaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbmlnaHQxKSwgdmFyKC0tbmlnaHQyKSk7XFxufVxcblxcbi5ncmFkaWVudC5uaWdodC1jbG91ZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbmlnaHQxKSwgdmFyKC0tbmlnaHQtY2xvdWQpLCB2YXIoLS1uaWdodDIpKTtcXG5cXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jbG9jIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIC8qIHdpZHRoOiAxNTBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDI0MCwgMjU0KTtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuI2xvYzpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4ubG9jLWlucHV0LWZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIC8qIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7ICovXFxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmxvYy1pbnB1dC1maWVsZDpob3ZlcixcXG4ubG9jLWlucHV0LWZpZWxkOmhhcygjbG9jOmZvY3VzKSB7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDI0MCwgMjU0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMThweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDRweDtcXG59XFxuXFxuLnNlYXJjaC1pY29uIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQGNvbnRhaW5lciAobWF4LXdpZHRoOiAyMHB4KSB7XFxuICAuc2VhcmNoLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIH1cXG5cXG59XFxuXFxuLmNvdW50cnktaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1ib3gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6MjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxvYy1zdWdnZXN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMCwgNTklLCA5MCUpO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1kYXktc2t5Mik7XFxufVxcblxcbi5sb2Mtc3VnZ2VzdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEwLCA1OSUsIDkwJSk7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmN1cnJlbnQtd2VhdGhlci1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4uY3VycmVudC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmZvcmVjYXN0LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRheS1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb3ctaGlnaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9yZWNhc3QtZGlzcGxheSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBnYXA6IDA7XFxuICB9XFxuXFxuICAuZGF5LWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNTAlIDMwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0tZGF5LXNreTEpO1xcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgfVxcblxcbiAgLmRheS1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLmxvdy1oaWdoIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjb3VudHJ5U2VsZWN0IGZyb20gJy4vY291bnRyeS5qcyc7XG5pbXBvcnQgbG9jYXRpb25TZWxlY3QgZnJvbSAnLi9sb2NhdGlvblNlbGVjdCdcblxuY29uc3QgbG9jU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYy1zdWJtaXQnKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1pbnB1dCcpO1xuXG5jb3VudHJ5LmFwcGVuZENoaWxkKGNvdW50cnlTZWxlY3QpO1xuIl0sIm5hbWVzIjpbInN1biIsImNsZWFyTmlnaHQiLCJwYXJ0aWFsQ2xvdWRzIiwicGFydGlhbENsb3Vkc05pZ2h0IiwiY2xvdWQiLCJicm9rZW5DbG91ZCIsInJhaW4iLCJzdW5SYWluIiwidGh1bmRlciIsInNub3ciLCJtaXN0IiwibWFnR2xhc3MiLCJncmFkaWVudERheSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdyYWRpZW50Q2xvdWQiLCJncmFkaWVudFJhaW4iLCJncmFkaWVudE5pZ2h0IiwiZ3JhZGllbnROaWdodENsb3VkIiwiYm9keSIsImFwcGVuZCIsImdyYWRpZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmFkaWVudHNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50V2VhdGhlckNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JlY2FzdENvbnRhaW5lciIsInNlYXJjaEljb24iLCJzZWFyY2hJY29uSW1hZ2UiLCJJbWFnZSIsInNyYyIsImFwcGVuZENoaWxkIiwic2VsZWN0SWNvbiIsImNvZGUiLCJzb3VyY2UiLCJzZWxlY3RCYWNrZ3JvdW5kIiwiYmciLCJjbGVhclBhZ2UiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXJDdXJyZW50V2VhdGhlciIsImN1cnJlbnQiLCJjdXJyZW50V2VhdGhlckRpc3BsYXkiLCJsb2NhdGlvbiIsImlubmVyVGV4dCIsImxvY2F0aW9uTmFtZSIsInRlbXAiLCJNYXRoIiwiZmxvb3IiLCJtYWluIiwiaWNvbiIsImljb25TVkciLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kIiwiY2xhc3NOYW1lIiwiZ3JhZGllbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJyZW5kZXJGb3JlY2FzdCIsImZvcmVjYXN0IiwiZm9yZWNhc3REaXNwbGF5IiwiZGF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGF5RGlzcGxheSIsImRheVRpdGxlIiwibG93SGlnaCIsImxvdyIsImhpZ2giLCJyZW5kZXJXZWF0aGVyRGV0YWlscyIsImluZm8iLCJjb3VudHJ5U2VsZWN0SW5wdXQiLCJjb3VudHJ5U2VsZWN0TGFiZWwiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyaWVzIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUxpc3QiLCJBRiIsIkFMIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBSSIsIkFRIiwiQUciLCJBUiIsIkFNIiwiQVciLCJBVSIsIkFUIiwiQVoiLCJCUyIsIkJIIiwiQkQiLCJCQiIsIkJZIiwiQkUiLCJCWiIsIkJKIiwiQk0iLCJCVCIsIkJPIiwiQlEiLCJCQSIsIkJXIiwiQlYiLCJCUiIsIklPIiwiQk4iLCJCRyIsIkJGIiwiQkkiLCJDViIsIktIIiwiQ00iLCJDQSIsIktZIiwiQ0YiLCJURCIsIkNMIiwiQ04iLCJDWCIsIkNDIiwiQ08iLCJLTSIsIkNEIiwiQ0ciLCJDSyIsIkNSIiwiSFIiLCJDVSIsIkNXIiwiQ1kiLCJDWiIsIkNJIiwiREsiLCJESiIsIkRNIiwiRE8iLCJFQyIsIkVHIiwiU1YiLCJHUSIsIkVSIiwiRUUiLCJTWiIsIkVUIiwiRksiLCJGTyIsIkZKIiwiRkkiLCJGUiIsIkdGIiwiUEYiLCJURiIsIkdBIiwiR00iLCJHRSIsIkRFIiwiR0giLCJHSSIsIkdSIiwiR0wiLCJHRCIsIkdQIiwiR1UiLCJHVCIsIkdHIiwiR04iLCJHVyIsIkdZIiwiSFQiLCJITSIsIlZBIiwiSE4iLCJISyIsIkhVIiwiSVMiLCJJTiIsIklEIiwiSVIiLCJJUSIsIklFIiwiSU0iLCJJTCIsIklUIiwiSk0iLCJKUCIsIkpFIiwiSk8iLCJLWiIsIktFIiwiS0kiLCJLUCIsIktSIiwiS1ciLCJLRyIsIkxBIiwiTFYiLCJMQiIsIkxTIiwiTFIiLCJMWSIsIkxJIiwiTFQiLCJMVSIsIk1PIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTUgiLCJNUSIsIk1SIiwiTVUiLCJZVCIsIk1YIiwiRk0iLCJNRCIsIk1DIiwiTU4iLCJNRSIsIk1TIiwiTUEiLCJNWiIsIk1NIiwiTkEiLCJOUiIsIk5QIiwiTkwiLCJOQyIsIk5aIiwiTkkiLCJORSIsIk5HIiwiTlUiLCJORiIsIk1QIiwiTk8iLCJPTSIsIlBLIiwiUFciLCJQUyIsIlBBIiwiUEciLCJQWSIsIlBFIiwiUEgiLCJQTiIsIlBMIiwiUFQiLCJQUiIsIlFBIiwiTUsiLCJSTyIsIlJVIiwiUlciLCJSRSIsIkJMIiwiU0giLCJLTiIsIkxDIiwiTUYiLCJQTSIsIlZDIiwiV1MiLCJTTSIsIlNUIiwiU0EiLCJTTiIsIlJTIiwiU0MiLCJTTCIsIlNHIiwiU1giLCJTSyIsIlNJIiwiU0IiLCJTTyIsIlpBIiwiR1MiLCJTUyIsIkVTIiwiTEsiLCJTRCIsIlNSIiwiU0oiLCJTRSIsIkNIIiwiU1kiLCJUVyIsIlRKIiwiVFoiLCJUSCIsIlRMIiwiVEciLCJUSyIsIlRPIiwiVFQiLCJUTiIsIlRSIiwiVE0iLCJUQyIsIlRWIiwiVUciLCJVQSIsIkFFIiwiR0IiLCJVTSIsIlVTIiwiVVkiLCJVWiIsIlZVIiwiVkUiLCJWTiIsIlZHIiwiVkkiLCJXRiIsIkVIIiwiWUUiLCJaTSIsIlpXIiwiQVgiLCJjb3VudHJ5Iiwib3B0IiwiaXNTYW1lRGF5IiwicGFyc2VJU08iLCJnZXREYXkiLCJpc1RvZGF5IiwicmV0cmlldmVXZWF0aGVyRGF0YSIsImxhdCIsImxvbiIsImRhdGEiLCJmZXRjaFByZWZpeCIsIm1pZGRsZSIsImZldGNoU3VmZml4IiwiY3VycmVudFdlYXRoZXIiLCJmZXRjaCIsImZpdmVEYXlXZWF0aGVyIiwianNvbiIsImZpdmVEYXkiLCJhbmFseXplRm9yZWNhc3QiLCJmaW5kTW9zdENvbW1vbiIsImFycmF5IiwiaGlnaGVzdENvdW50IiwibW9zdENvbW1vbiIsIml0ZW0iLCJjb3VudCIsIm90aGVySXRlbSIsInRyYW5zbGF0ZURheSIsIm51bSIsImxpc3QiLCJhcnJheU9mRGF5cyIsInJlZHVjZSIsImEiLCJiIiwibGVuZ3RoIiwibGFzdERhdGUiLCJkdF90eHQiLCJ0aGlzRGF0ZSIsInB1c2giLCJmaXZlRGF5Rm9yZWNhc3QiLCJkYXlPZldlZWsiLCJtaW5UZW1wIiwibWF4VGVtcCIsInRocmVlSG91ciIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJpbmNsdWRlcyIsImZldGNoV2VhdGhlciIsImxvY0lucHV0Iiwic3VnZ2VzdGlvbkJveCIsImZpbmRMb2NhdGlvbiIsInByZWZpeCIsImlucHV0IiwidmFsdWUiLCJhcGlLZXkiLCJOdW1iZXIiLCJsb2NhdGlvbkxpc3RSZXF1ZXN0IiwibG9jYXRpb25MaXN0IiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5QW5kU2VhcmNoIiwid2FpdCIsIm9wdGlvbkJveCIsImNyZWF0ZU9wdGlvbkJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicmVzcG9uc2UiLCJib3giLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwic3VnIiwic3VnZ2VzdGlvbiIsIm5hbWUiLCJzdGF0ZSIsIndlYXRoZXJEYXRhIiwibG9jYXRpb25TZWxlY3QiLCJsb2NTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9