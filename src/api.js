import {
  SANSKRIT_NAMES_BUTTON_ID,
  SELECT_ID,
  INPUT_ID,
  SUGGESTION_ID,
} from './constants.js';

export async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Oops...stay calm as we encountered an error');
  }
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
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
      displayMatches(dataPoses);
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

      const translation = document.createElement('p');
      translation.textContent = `Translation name: ${selectedTranslation}`;

      const selectedAsana = dataPoses.find(
        (asana) => asana.translation_name === selectedTranslation
      );

      const poseBenefits = document.createElement('p');
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

function findMatches(dataPoses, typedWord) {
  return dataPoses.filter((asana) => {
    const regex = new RegExp(typedWord, 'gi');
    return asana.english_name.match(regex);
  });
}

function displayMatches(dataPoses) {
  const searchInput = document.getElementById(INPUT_ID);
  const suggestions = document.getElementById(SUGGESTION_ID);

  searchInput.addEventListener('input', () => {
    const typedWord = searchInput.value;

    const matchArray = findMatches(dataPoses, typedWord);
    const resultsArray = matchArray
      .map((asana) => {
        return `
        <li>
        <span>${asana.english_name}. ${asana.pose_description}</span>
        <img src="${asana.url_svg_alt}" class="image-black-figures">
        </li>
      `;
      })
      .join('');

    if (displayedInfoDropDown) {
      displayedInfoDropDown.remove();
    }

    displayedInfoSearch = suggestions;
    displayedInfoSearch.innerHTML = resultsArray;

    if (!typedWord) {
      suggestions.innerHTML = '';
    }
  });
}
