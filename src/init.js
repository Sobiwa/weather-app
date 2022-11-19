import { handleSearchInput } from './locationSelect';

const locInput = document.querySelector("#loc");

export default function init() {

  locInput.addEventListener("input", () => {
    handleSearchInput();
  });

};