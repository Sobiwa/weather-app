import { handleSearchInput } from "./locationSelect";
import getAndDisplayWeather from './fetchWeather';
import { unitsToggle } from './settings';

const locInput = document.querySelector("#loc");

export default function init() {
  if (localStorage.getItem('location')) {
    const location = JSON.parse(localStorage.getItem('location'));
    const units = localStorage.getItem('units');
    if (units === 'checked') {
      unitsToggle.checked = true;
    }
    getAndDisplayWeather(location);
  }
  locInput.addEventListener("input", () => {
    handleSearchInput();
  });

  locInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });

  window.addEventListener("resize", () => {
    const moreInfoList = document.querySelector(".more-info-list");
    if (moreInfoList) {
      if (moreInfoList.style.maxHeight) {
        moreInfoList.style.maxHeight = moreInfoList.scrollHeight + "px";
      }
    }
  });
}
