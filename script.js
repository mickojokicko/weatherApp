'use strict';
const apiKey = '0ae059c78323572b72b07c591a7d797d';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const errorMessage = document.querySelector('.errorMessage');
const weatherDescription = document.querySelector('.weatherDescription');

const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');

const initialCity = 'Banja Luka';
let currentCity = initialCity;

// --------------Functions-------------------
const updateWeatherDataUi = data => {
  cityEl.innerHTML = data.name;
  tempEl.innerHTML = data.main.temp.toFixed(1) + '°C';
  humidity.innerHTML = data.main.humidity + '%';
  windEl.innerHTML = data.wind.speed + ' km/h';
  weatherDescription.innerHTML = data.weather[0].description;
  errorMessage.classList.add('hidden');
  weatherBox.classList.remove('hidden');
  searchBox.value = '';
};

const renderErrorMessage = message => {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  searchBox.value = '';
  searchBox.focus();
};

const showIconToApp = data => {
  const icon = data.weather[0].main;

  if (icon) {
    const iconToLowerCase = icon.toLowerCase();
    weatherIcon.src = `images/${iconToLowerCase}.png`;
  } else {
    weatherIcon.src = 'images/mist.png';
  }
};
// -----------------APPLICATION-----------------------
const weatherDataApi = function (city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(`City not found (${res.status})`);
      }
      return res.json();
    })
    .then(data => {
      updateWeatherDataUi(data);
      showIconToApp(data);
    })
    .catch(err => renderErrorMessage(`Something went wrong; ${err.message}`));
};
weatherDataApi(currentCity);

searchBtn.addEventListener('click', () => {
  weatherDataApi(searchBox.value);
});

searchBox.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    weatherDataApi(searchBox.value);
  }
});
