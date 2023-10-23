import {
  SANSKRIT_NAMES_BUTTON_ID,
  SELECT_ID,
  INPUT_ID,
  SUGGESTION_ID,
  CATEGORIES_ID,
  API_BASE_URL,
} from './constants.js';

export async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

export async function fetchAndDisplayCategories(data) {
  const categories = document.getElementById(CATEGORIES_ID);
  const uniqueImages = [];
  const filteredCategories = [];

  try {
    const categoriesData = await fetchJSON(data.categories);
    const categoriesArray = categoriesData
      .filter((category) => {
        if (!uniqueImages.includes(category.poses[0].url_png)) {
          uniqueImages.push(category.poses[0].url_png);
          return true;
        }
        return false;
      })
      .filter((category) => {
        if (
          category.category_name !== 'Restorative Yoga' &&
          category.category_name !== 'Balancing Yoga'
        ) {
          filteredCategories.push(category.category_name);
          return true;
        }
        return false;
      })
      .map((category) => {
        return `
        <li>
        <span class="category-name">${category.category_name}</span>
        <div class="description-image">
        <p class="category-description">${category.category_description}</p>
        <img src="${category.poses[0].url_png}" class="image-color-figures">
        </div>
        </li>
      `;
      })
      .join('');
    categories.innerHTML = categoriesArray;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchAndPopulateSanskritAsanas(data) {
  const sanskritButtonElement = document.getElementById(
    SANSKRIT_NAMES_BUTTON_ID
  );

  const selectElement = document.getElementById(SELECT_ID);

  sanskritButtonElement.addEventListener('click', async () => {
    selectElement.style.width = 'auto';

    try {
      const dataPoses = await fetchJSON(data.poses);

      dataPoses.forEach((asana) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', asana.translation_name);
        selectElement.appendChild(optionElement);
        optionElement.textContent = asana.sanskrit_name_adapted;
      });
      displayFromDropdown(dataPoses);
      displayMatches();
    } catch (error) {
      console.log(error);
    }
  });
}

let displayedInfoDropDown = null;
let displayedInfoSearch = null;

function displayFromDropdown(dataPoses) {
  const selectElement = document.getElementById(SELECT_ID);

  selectElement.addEventListener('change', () => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedTranslation = selectedOption.value;

    if (selectedTranslation) {
      if (displayedInfoDropDown) {
        displayedInfoDropDown.remove();
      }

      const translationDiv = document.createElement('div');
      translationDiv.classList.add('translation-div');

      const translation = document.createElement('p');
      translation.textContent = `Translation name: ${selectedTranslation}`;

      const selectedAsana = dataPoses.find(
        (asana) => asana.translation_name === selectedTranslation
      );

      const poseBenefits = document.createElement('p');
      poseBenefits.classList.add('pose-benefits');
      poseBenefits.textContent = `Pose Benefits: ${selectedAsana.pose_benefits}`;

      const poseImage = document.createElement('img');
      poseImage.setAttribute('src', selectedAsana.url_svg);
      poseImage.classList.add('dropdown-image');

      translationDiv.appendChild(translation);
      translationDiv.appendChild(poseBenefits);
      translationDiv.appendChild(poseImage);

      document.body.appendChild(translationDiv);

      if (displayedInfoSearch) {
        displayedInfoSearch.remove();
      }

      displayedInfoDropDown = translationDiv;
    }
  });
}

async function findMatches(typedWord) {
  const response = await fetch(`${API_BASE_URL}/poses?name=${typedWord}`);
  if (!response.ok) {
    if (response.status === 404) {
      return { error: 'No results found' };
    }
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const dataPose = await response.json();
  return dataPose;
}

function displayMatches() {
  const searchInput = document.getElementById(INPUT_ID);
  const suggestions = document.getElementById(SUGGESTION_ID);

  const noResultsElement = document.querySelector('.no-results');
  const parentSuggestionsElement = document.querySelector(
    '.parent-suggestions'
  );

  function displayNoResults() {
    noResultsElement.textContent = 'No results found';
    parentSuggestionsElement.appendChild(noResultsElement);
  }

  function hideNoResults() {
    const noResultsElement = document.querySelector('.no-results');
    const parentSuggestionsElement = document.querySelector(
      '.parent-suggestions'
    );
    if (
      noResultsElement &&
      parentSuggestionsElement.contains(noResultsElement)
    ) {
      parentSuggestionsElement.removeChild(noResultsElement);
    }
  }

  searchInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      const typedWord = searchInput.value;

      try {
        const matches = await findMatches(typedWord);
        let resultMatches = '';

        if (matches.error) {
          displayNoResults();
        } else {
          resultMatches = `
            <li>
              <span>${matches.english_name}. ${matches.pose_description}</span>
              <img src="${matches.url_svg_alt}" class="image-black-figures">
            </li>
          `;
        }

        if (displayedInfoDropDown) {
          displayedInfoDropDown.remove();
        }

        displayedInfoSearch = suggestions;
        displayedInfoSearch.innerHTML = resultMatches;

        if (typedWord && resultMatches === '') {
          displayNoResults();
        } else {
          hideNoResults();
        }
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    }
  });
}
