// Today's date on main screen & Update the date and time every second//
function updateDate() {
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
}

function formatDate(date) {
  return moment(date).format("dddd, MMMM Do, YYYY HH:mm:ss")
}

updateDate();

setInterval(updateDate, 1000);

// function to search for specific city //
function searchCity(city) { 
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(showWeather);  

  }

 // function to search for city //
function handleSubmit(event) {
  event.preventDefault(); 
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "f97e6oa7271ce6b46a866b531489t0f6";
  let apiURL = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(showWeather);  
}

  // function for current position //
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  }

  // showWeather //
  function showWeather(response) {
    document.querySelector("#city").innerHTML = response.data.city;
    let celsiusTemperature = Math.round(response.data.temperature.current);
    let feelTemp = Math.round(response.data.temperature.feels_like);
    let descriptionText = response.data.condition.description;
    document.querySelector("#temperature").innerHTML = Math.round(celsiusTemperature);
    document.querySelector("#description").innerHTML = `It is a day filled with ${descriptionText} & feels like ${feelTemp}&degC. Enjoy!`;
    document.querySelector("#hum").innerHTML = response.data.temperature.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src",
        `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
    iconElement.setAttribute(
        "alt", response.data.condition.description);
    
    getForecast(response.data.coordinates);
}

// Udate the date and time //
function updateDateTime() {
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
}

updateDateTime();



// push through search //
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);
  
// find current location //
let currentLocationButton = document.querySelector("#current-position");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

// Get slider to do something //
function updateTemperatureUnits() {
  let temperatureElement = document.querySelector("#temperature");
  let unitToggle = document.querySelector(".switch-control-input");
  let temperatureUnitsElement = document.querySelector(".temperatureUnits");
  let windElement = document.querySelector("#wind");
  let windUnitElement = document.querySelector(".windUnit");

  let minTempElement = document.querySelector("#minTemp");
  let maxTempElement = document.querySelector("#maxTemp");

  if (unitToggle.checked) {
    // Celsius to Fahrenheit conversion for current temperature
    let celsiusTemperature = parseFloat(temperatureElement.textContent);
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.textContent = Math.round(fahrenheitTemperature);
    temperatureUnitsElement.innerHTML = "&deg;F";

    // Celsius to Fahrenheit conversion for wind speed
    let windCelsius = parseFloat(windElement.textContent);
    let windFahrenheit = windCelsius * 0.621371;
    windElement.textContent = Math.round(windFahrenheit);
    windUnitElement.innerHTML = "m/h";

    // Celsius to Fahrenheit conversion for min and max temperatures
    let minCelsiusTemperature = parseFloat(minTempElement.textContent);
    let maxCelsiusTemperature = parseFloat(maxTempElement.textContent);
    let minFahrenheitTemperature = (minCelsiusTemperature * 9) / 5 + 32;
    let maxFahrenheitTemperature = (maxCelsiusTemperature * 9) / 5 + 32;
    minTempElement.textContent = Math.round(minFahrenheitTemperature);
    maxTempElement.textContent = Math.round(maxFahrenheitTemperature);
  } else {
    // Fahrenheit to Celsius conversion for current temperature
    let fahrenheitTemperature = parseFloat(temperatureElement.textContent);
    let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
    temperatureElement.textContent = Math.round(celsiusTemperature);
    temperatureUnitsElement.innerHTML = "&deg;C";

    // Fahrenheit to Celsius conversion for wind speed
    let windFahrenheit = parseFloat(windElement.textContent);
    let windCelsius = windFahrenheit / 0.621371;
    windElement.textContent = Math.round(windCelsius);
    windUnitElement.innerHTML = "km/h";

    // Fahrenheit to Celsius conversion for min and max temperatures
    let minFahrenheitTemperature = parseFloat(minTempElement.textContent);
    let maxFahrenheitTemperature = parseFloat(maxTempElement.textContent);
    let minCelsiusTemperature = ((minFahrenheitTemperature - 32) * 5) / 9;
    let maxCelsiusTemperature = ((maxFahrenheitTemperature - 32) * 5) / 9;
    minTempElement.textContent = Math.round(minCelsiusTemperature);
    maxTempElement.textContent = Math.round(maxCelsiusTemperature);
  }
}

var unitToggle = document.querySelector(".switch-control-input");
unitToggle.addEventListener("change", updateTimeUnits);

//Show selected country in dropdown upon selection //

function showSelectedCity (event) {
  if (event.target.value.length > 0) {
  alert(event.target.value);
  }

  if (event.target.value == 'willemstad') {
    alert ("It is currently [time] in Willemstad, Curacao!");
  } 

  if (event.target.value == 'amsterdam') {
    alert ("It is currently [time] in Amsterdam, The Netherlands!");
  }

  if (event.target.value == 'los-angeles') {
    alert ("It is currently [time] in Los Angeles, USA!");
  } 
}

let cityDropdown = document.querySelector("#city-dropdown");
cityDropdown.addEventListener('change', showSelectedCity);

// Moments //

let today = moment().format("dddd Do MMMM");
      let todayElement = document.querySelector("#today");
      todayElement.innerHTML = today;

      let tomorrowElement = document.querySelector("#tomorrow");
      
let tomorrow = moment().add(1, "day").format("dddd Do, MMMM");
      tomorrowElement.innerHTML = `Tomorrow will be ${tomorrow}`;

