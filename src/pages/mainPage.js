import { createPageElement } from '../views/mainView.js';
import { SANSKRIT_NAMES_BUTTON_ID } from '../constants.js';

export const initPage = () => {
  const element = createPageElement();
  document.body.appendChild(element);
};
