import {
  SANSKRIT_NAMES_BUTTON_ID,
  SELECT_ID,
  INPUT_ID,
  SUGGESTION_ID,
  CATEGORIES_ID,
} from '../constants.js';

export const createPageElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div class="categories">
    <ul id="${CATEGORIES_ID}" class="categories-list">
      <li>categories will be here</li>
    </ul>
  </div>
  <button id="${SANSKRIT_NAMES_BUTTON_ID}" class="sanskrit-button"> 
    Get Started with Yoga! 
  </button>
  <select id="${SELECT_ID}" class="select-dropdown"></select>
  <form class="search-form">
    <input id="${INPUT_ID}" type="text" class="search" placeholder="Search for a yoga asana..." value="">
      <ul id="${SUGGESTION_ID}" class="suggestions">
        <li></li>
      </ul>
  </form>
  `;
  return element;
};
