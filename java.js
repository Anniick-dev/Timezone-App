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

// Show the selected dropdown value //
let cityDropdown = document.querySelector("#city-dropdown");
cityDropdown.addEventListener('change', showSelectedCity);

//Show selected country in dropdown upon selection //
function showSelectedCity(event) {
  event.preventDefault();

  let selectedCityElement = document.querySelector("#selected-city");
  let selectedCityName = event.target.options[event.target.selectedIndex].text;
  
  if (event.target.value.length > 0) {
    selectedCityElement.innerHTML = `${selectedCityName}`;
  } 

  // timezone amsterdam //
if (event.target.value == 'amsterdam') {

  let amsterdamTime = moment()
          .tz("Europe/Amsterdam")
          .format("dddd, MMMM D, YYYY HH:mm A");
  
        let amsterdamElement = document.querySelector("#selectedCityText");
        let selectedCityText = `${amsterdamTime}`;
        amsterdamElement.innerHTML = selectedCityText;
  
        alert (`It is currently ${amsterdamTime} in Amsterdam, The Netherlands!`);
  } 

// timezone auckland //
if (event.target.value == 'auckland') {

  let aucklandTime = moment()
      .tz("Pacific/Auckland")
      .format("dddd, MMMM D, YYYY HH:mm A");

    let aucklandElement = document.querySelector("#selectedCityText");
    let selectedCityText = `It is currently ${aucklandTime} in Auckland, New Zealand!`;
    aucklandElement.innerHTML = selectedCityText;

    alert(`It is currently ${aucklandTime} in Auckland, New Zealand!`);
}

// timezone current location //
if (event.target.value == 'local') {
  let userTimezone = moment.tz.guess();
  let localTime = moment()
      .tz(userTimezone)
      .format("dddd, MMMM D, YYYY HH:mm A");

  let localElement = document.querySelector("#selectedCityText");
  let selectedCityText = `It is currently ${localTime} in ${userTimezone}!`;
  localElement.innerHTML = selectedCityText;

  alert(`It is currently ${localTime} in ${userTimezone}!`);
}

// timezone new york //
if (event.target.value == 'new-york') {
  
let newYorkTime = moment()
        .tz("America/New_York")
        .format("dddd, MMMM D, YYYY HH:mm A");

        let newYorkElement = document.querySelector("#selectedCityText");
        let selectedCityText = `It is currently ${newYorkTime} in New York, USA!`;
        newYorkElement.innerHTML = selectedCityText;

        alert (`It is currently ${newYorkTime} in New York, USA!`);
      }


// timezone sydney //
if (event.target.value == 'sydney') {
  let sydneyTime = moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM D, YYYY HH:mm A");

      let sydneyElement = document.querySelector("#selectedCityText");
      let selectedCityText = `It is currently ${sydneyTime} in Sydney, Australia!`;
      sydneyElement.innerHTML = selectedCityText;

      alert (`It is currently ${sydneyTime} in Sydney, Australia!`);
} 
    }







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