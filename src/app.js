import { API_BASE_URL } from './constants.js';
import { fetchJSON } from './api.js';
import {
  fetchAndPopulateSanskritAsanas,
  fetchAndDisplayCategories,
} from './api.js';

const loadApp = async () => {
  try {
    const data = await fetchJSON(API_BASE_URL);
    await fetchAndDisplayCategories(data);
    await fetchAndPopulateSanskritAsanas(data);
  } catch (error) {
    console.log(error);
    const errorMessage = document.getElementById('category');
    errorMessage.textContent = `${error} Please try again later.`;
  }
};

window.addEventListener('load', loadApp);
