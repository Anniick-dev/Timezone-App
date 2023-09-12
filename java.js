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
setInterval(updateCityTime, 1000);


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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "local") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTimes = moment().tz(cityTimeZone);
  
  // Find the specific city element by its ID
  let cityElement = document.querySelector(`#${cityName.toLowerCase()}`);
  if (cityElement) {
    let cityDateElement = cityElement.querySelector(".cityDate");
    let cityTimeElement = cityElement.querySelector(".cityTime");
    
    // Update the content of the specific city element
    cityDateElement.textContent = cityTimes.format("MMMM Do YYYY");
    cityTimeElement.textContent = `${cityTimes.format("h:mm:ss")} ${cityTimes.format("A")}`;
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
    
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);