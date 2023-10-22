import { API_BASE_URL, CATEGORIES_ID } from './constants.js';
import { fetchJSON } from './api.js';
import { initPage } from './pages/mainPage.js';
import {
  fetchAndPopulateSanskritAsanas,
  fetchAndDisplayCategories,
} from './api.js';

const loadApp = async () => {
  initPage();
  try {
    const data = await fetchJSON(API_BASE_URL);
    await fetchAndDisplayCategories(data);
    await fetchAndPopulateSanskritAsanas(data);
  } catch (error) {
    console.log(error);
    const errorMessage = document.getElementById(CATEGORIES_ID);
    errorMessage.textContent = `${error} Please try again later.`;
  }
};

window.addEventListener('load', loadApp);
