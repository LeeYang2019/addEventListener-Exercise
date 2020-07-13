const countries = [
  {
    country_name: 'Albania',
    population: '1234567',
    description: 'rich culture; mountainous landscape',
  },
  {
    country_name: 'Brazil',
    population: '1341356467',
    description: 'great diversity in culture and food',
  },
  {
    country_name: 'China',
    population: '1341356467',
    description: 'seemingly unhomogenized; deep history',
  },
  {
    country_name: 'Denmark',
    population: '134134134',
    description: 'chocolate?',
  },
  {
    country_name: 'Egypt',
    population: '3456353563',
    description: 'undergoing great innovation',
  },
  {
    country_name: 'Rwanda',
    population: '24573546',
    description: 'etching its own identity',
  },
  {
    country_name: 'Tazmania',
    population: '24573546',
    description: 'breathtaking; not enough places to exercise',
  },
  {
    country_name: 'Zambawe',
    population: '12345678',
    description: 'getting there',
  },
];

const countryResults = document.getElementById('result');
const cards = document.getElementById('cards');

//display countries as a list for user to select
function displayCountries() {
  countryResults.innerHTML = `
    <ul class="countries-list">
    ${countries
      .map(
        (country) =>
          `<li>${country.country_name} 
            <button class="btn" 
            data-country="${country.country_name}" 
            data-population="${country.population}"
            data-description="${country.description}" >
            More Info</button>
          </li>`
      )
      .join('')}
    </ul>
  `;
}

//for each country, display more information about it
function displayCard(countryName, population, description) {
  console.log('got ' + countryName + ' and ' + population + ' from results');

  cards.innerHTML += `<div class="cards-to-display">
    <h3>Country: ${countryName}<h3>
    <p>Population: ${population}</p>
    <p>Description: ${description}</p>
    <button class="cardBtn"
        data-country="${countryName}" 
        data-population="${population}"
        data-description="${description}" >
    Add to List</button>
  </div>`;
}

//save country to db
function addToList(countryName, population, description) {
  console.log('added ' + countryName + ' and ' + population + ' to db');
}

//eventlistener for when more info button is clicked
countryResults.addEventListener('click', (e) => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const countryName = clickedEl.getAttribute('data-country');
    const population = clickedEl.getAttribute('data-population');
    const description = clickedEl.getAttribute('data-description');
    displayCard(countryName, population, description);
  }
});

//eventlistener for when save to list button is clicked
cards.addEventListener('click', (e) => {
  const cardEl = e.target;
  if (cardEl.tagName === 'BUTTON') {
    const countryName = cardEl.getAttribute('data-country');
    const population = cardEl.getAttribute('data-population');
    const description = cardEl.getAttribute('data-description');
    addToList(countryName, population, description);
  }
});

displayCountries();
