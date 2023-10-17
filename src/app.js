import { API_BASE_URL } from './constants.js';
import { fetchJSON } from './api.js';

const loadApp = async () => {
  try {
    await fetchJSON(API_BASE_URL);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('load', loadApp);
