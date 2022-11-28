import { handleSearchInput } from "./locationSelect";

const locInput = document.querySelector("#loc");
const locationInputForm = document.querySelector('.location-input');

export default function init() {
  locInput.addEventListener("input", () => {
    handleSearchInput();
  });

  locationInputForm.addEventListener('click', () => {
    locationInputForm.classList.remove('center')
  }, { once: true })

  window.addEventListener("resize", () => {
    const moreInfoList = document.querySelector(".more-info-list");
    if (moreInfoList) {
      if (moreInfoList.style.maxHeight) {
        moreInfoList.style.maxHeight = moreInfoList.scrollHeight + "px";
      }
    }
  });
}
