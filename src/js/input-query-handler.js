import refs from './refs.js';
import fetchCountries from './fetchCountries.js';
import updateMarkup from './update-countries-markup.js';
const debounce = require('lodash.debounce');

refs.inputRef.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();

    const inputValue = refs.inputRef.value;
    fetchCountries(inputValue).then(data => updateMarkup(data));
  }, 500),
);
