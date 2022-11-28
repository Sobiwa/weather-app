import { handleSearchInput } from "./locationSelect";

const locInput = document.querySelector("#loc");

export default function init() {
  locInput.addEventListener("input", () => {
    handleSearchInput();
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
