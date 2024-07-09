console.log('API qui', CONFIG.API_KEY)

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const title = document.querySelector('#title');

//funções
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${CONFIG.API_KEY}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};


const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}Km/h`;
};


//eventos
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  title.innerHTML = "Será que vai dar sol?";

  const city = cityInput.value

  showWeatherData(city);
})