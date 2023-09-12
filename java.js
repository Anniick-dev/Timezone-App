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
updateCityTime();

setInterval(updateDate, 1000);

// Function to update the time //
function updateCityTime() {
  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".cityDate");
    let amsterdamTimeElement = amsterdamElement.querySelector(".cityTime");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM	Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "HH:mm:ss A"

    );
  }

  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".cityDate");
    let aucklandTimeElement = aucklandElement.querySelector(".cityTime");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM	Do YYYY");
    aucklandTimeElement.innerHTML = aucklandTime.format(
      "HH:mm:ss A"

    );
  }

  // New York
  let newYorkElement = document.querySelector("#newYork");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".cityDate");
    let newYorkTimeElement = newYorkElement.querySelector(".cityTime");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "HH:mm:ss A"
      
    );
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".cityDate");
    let sydneyTimeElement = sydneyElement.querySelector(".cityTime");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "HH:mm:ss A"
    );
  }
}

//Show selected city in dropdown upon selection //
  function showDate(event) {
    if (event.target.value.length > 0) {
      let currentTime = moment()
        .tz(event.target.value)
        .format("dddd, MMMM D, YYYY HH:mm A");

        let showCityNameElement = document.querySelector("#city");
        let selectedCityNameText = `${event.target.value}`;
        showCityNameElement.innerHTML = selectedCityNameText;

        let showDateElement = document.querySelector("#selectedCityText");
        let selectedCityText = `It is currently ${currentTime} in ${event.target.value}`;
        showDateElement.innerHTML = selectedCityText;

      alert(`It is ${currentTime} in ${event.target.value}`);
    }
  }

  let selectElement = document.querySelector("#city-dropdown");
  selectElement.addEventListener("change", showDate);
    







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