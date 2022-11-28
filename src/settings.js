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
    if (element === countrySelect && inputField.value === 'United States of America (the)') {
      stateInputField.value = '';
      stateSelect.classList.add('no-display');
    }
    inputField.value = '';
  })
  element.appendChild(btn);
}

const settingsForm = document.createElement('form');
settingsForm.classList.add('settings-form');

const advancedSearch = document.createElement('div');
advancedSearch.classList.add('advanced-search');
const advancedSearchTitle = document.createElement('h4');
advancedSearchTitle.innerText = 'Advanced Search';
const advancedSearchList = document.createElement('ul');
advancedSearchList.append(countrySelect, stateSelect);

countryInputField.addEventListener('input', () => {
  if (countryInputField.value === 'United States of America (the)') {
    stateSelect.classList.remove('no-display');
  } else {
    stateInputField.value = '';
    stateSelect.classList.add('no-display');
  }
})

addClearButton(countrySelect);
addClearButton(stateSelect);

advancedSearch.append(advancedSearchTitle, advancedSearchList);

const settings = document.createElement('div');
settings.classList.add('settings-select');
const settingsTitle = document.createElement('h4');
settingsTitle.innerText = 'Settings';
const settingsList = document.createElement('ul');

const units = document.createElement('li');
const unitsLabel = document.createElement('label');
unitsLabel.setAttribute('for', 'units-toggle');
unitsLabel.innerText = 'Units';
const unitsToggle = document.createElement('input');
unitsToggle.setAttribute('type', 'checkbox');
unitsToggle.setAttribute('id', 'units-toggle');
unitsToggle.setAttribute('name', 'units-toggle');
const imperial = document.createElement('span');
imperial.classList.add('imperial');
imperial.innerText = 'Imperial';
const metric = document.createElement('span');
metric.classList.add('metric');
metric.innerText = 'Metric';
units.append(unitsLabel, imperial, unitsToggle, metric);

settingsList.append(units);
settings.append(settingsTitle, settingsList);

settingsForm.append(advancedSearch, settings);

export default settingsForm;