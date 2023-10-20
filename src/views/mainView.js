import {
  SANSKRIT_NAMES_BUTTON_ID,
  SELECT_ID,
  INPUT_ID,
  SUGGESTION_ID,
} from '../constants.js';

export const createPageElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <button id="${SANSKRIT_NAMES_BUTTON_ID}" class="sanskrit-button"> 
    Get Started with Yoga! 
  </button>
  <select id="${SELECT_ID}"></select>
  <form class="search-form">
    <input id="${INPUT_ID}" type="text" class="search" placeholder="Search for a yoga asana..." value="">
      <ul id="${SUGGESTION_ID}" class="suggestions">
        <li>Filter for asana</li>
      </ul>
  </form>
  `;
  return element;
};
