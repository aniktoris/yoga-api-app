import { SANSKRIT_NAMES_BUTTON_ID, SELECT_ID } from '../constants.js';

export const createPageElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <button id="${SANSKRIT_NAMES_BUTTON_ID}"> 
    Get Sanskrit Asanas names! 
  </button>
  <select id="${SELECT_ID}"></select>
  `;
  return element;
};
