import { API_BASE_URL } from './constants.js';
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
  }
};

window.addEventListener('load', loadApp);
