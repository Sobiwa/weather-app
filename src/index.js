import './style.css';
import countrySelect from './country.js';
import locationSelect from './locationSelect'

const locSubmit = document.querySelector('.loc-submit');
const country = document.querySelector('.country-input');

country.appendChild(countrySelect);
