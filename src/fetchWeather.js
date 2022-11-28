/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import { isSameDay, parseISO, getDay, isToday, fromUnixTime, format } from "date-fns";

export default async function retrieveWeatherData({ lat, lon }) {
  const unitsToggle = document.querySelector('#units-toggle');
  const data = {};
  const fetchPrefix = "https://api.openweathermap.org/data/2.5/";
  const middle = `lat=${lat}&lon=${lon}`;
  const fetchSuffix = `&appid=921cfd876fc7bdd1768497c18dc1bf81&units=${unitsToggle.checked ? 'metric' : 'imperial'}`;
  const currentWeather = await fetch(
    `${fetchPrefix}/weather?${middle}${fetchSuffix}`
  );
  const fiveDayWeather = await fetch(
    `${fetchPrefix}/forecast?${middle}${fetchSuffix}`
  );
  data.current = await currentWeather.json();
  data.fiveDay = await fiveDayWeather.json();
  data.current.sunrise = format(fromUnixTime(data.current.sys.sunrise), 'p');
  data.current.sunset = format(fromUnixTime(data.current.sys.sunset), 'p');
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
      const lastDate = parseISO(a[a.length - 1][0].dt_txt);
      const thisDate = parseISO(b.dt_txt);
      if (isSameDay(lastDate, thisDate)) {
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
    if (isToday(parseISO(day[0].dt_txt))) {
      continue;
    }
    let dayOfWeek;
    let minTemp;
    let maxTemp;
    const description = [];
    const icon = [];

    for (const threeHour of day) {
      if (!dayOfWeek) {
        dayOfWeek = translateDay(getDay(parseISO(threeHour.dt_txt)));
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
      icon: findMostCommon(icon),
    };
  }
  return fiveDayForecast;
}
