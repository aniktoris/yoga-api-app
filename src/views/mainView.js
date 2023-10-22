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
  <div class="parent-container">
    <div class="container-bars">
      <button id="${SANSKRIT_NAMES_BUTTON_ID}" class="sanskrit-button"> 
        Get Started with Yoga Bliss! 
      </button>
      <select id="${SELECT_ID}" class="select-dropdown"></select>
      <form class="search-form">
        <input id="${INPUT_ID}" type="text" class="search" placeholder="Search for yoga asana..." value="">  
      </form>
    </div>
  </div>
  <div class="parent-suggestions">
    <ul id="${SUGGESTION_ID}" class="suggestions">
      <li></li>
    </ul>
    <p class="no-results"></p>
  </div>
  `;
  return element;
};
