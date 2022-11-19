import countrySelect from './country.js';
import stateSelect from './states.js';

import closeIcon from './img/close-circle-outline.svg';

const countryInputField = [...countrySelect.children][1];
const stateInputField = [...stateSelect.children][1];

function addClearButton(element) {
  const closeIconImage = new Image();
  closeIconImage.src = closeIcon;
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.classList.add('clear-button');
  btn.appendChild(closeIconImage);
  const inputField = [...element.children][1];
  btn.addEventListener('click', () => {
    if (element === countrySelect && inputField.value === 'US') {
      inputField.value = '';
      stateInputField.value = '';
      stateSelect.classList.add('no-display');
    }
  })
  element.appendChild(btn);
}

const settingsForm = document.createElement('form');
settingsForm.classList.add('settings-form');

const advancedSearch = document.createElement('div');
advancedSearch.classList.add('advanced-search');
const advancedSearchTitle = document.createElement('h5');
advancedSearchTitle.innerText = 'Advanced Search';
const advancedSearchList = document.createElement('ul');
advancedSearchList.append(countrySelect, stateSelect);

countryInputField.addEventListener('input', () => {
  if (countryInputField.value === 'US') {
    stateSelect.classList.remove('no-display');
  } else {
    stateInputField.value = '';
    stateSelect.classList.add('no-display');
  }
})

addClearButton(countrySelect);
addClearButton(stateSelect);

advancedSearch.append(advancedSearchTitle, advancedSearchList);

settingsForm.append(advancedSearch);

export default settingsForm;