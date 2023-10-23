import {
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
      <select id="${SELECT_ID}" class="select-dropdown"></select>
      <input id="${INPUT_ID}" type="text" class="search" placeholder="Search for yoga asana..." value="">  
    </div>
  </div>
  <div class="parent-suggestions">
    <ul id="${SUGGESTION_ID}" class="suggestions">
    </ul>
    <p class="no-results"></p>
  </div>
  `;
  return element;
};
