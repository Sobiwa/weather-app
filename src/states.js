const statesSelectInput = document.createElement('li');
statesSelectInput.classList.add('no-display');
const statesSelectLabel = document.createElement('label');
const statesSelect = document.createElement('input');
const states = document.createElement('datalist');
statesSelectLabel.setAttribute('for', 'states-select');
statesSelectLabel.innerText = 'State';
statesSelect.setAttribute('type', 'text');
statesSelect.setAttribute('name', 'states-select');
statesSelect.setAttribute('id', 'states-select');
statesSelect.setAttribute('list', 'states');
states.setAttribute('id', 'states');
statesSelectInput.append(statesSelectLabel, statesSelect, states);

const statesList = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

// eslint-disable-next-line no-restricted-syntax
for (const state in statesList) {
  if (Object.prototype.hasOwnProperty.call(statesList, state)) {
    const opt = document.createElement('option');
    opt.setAttribute('value', state);
    opt.innerText = statesList[state];
    states.appendChild(opt);
  }
}

export default statesSelectInput;
