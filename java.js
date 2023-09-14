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
  let amsterdamElement = document.querySelector("#amsterdamBox");
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
  let aucklandElement = document.querySelector("#aucklandBox");
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
  let newYorkElement = document.querySelector("#newYorkBox");
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
  let sydneyElement = document.querySelector("#sydneyBox");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".cityDate");
    let sydneyTimeElement = sydneyElement.querySelector(".cityTime");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "HH:mm:ss A"
    );
  }

  // local
  let localElement = document.querySelector("#localBox");
  if (localElement) {
    let localDateElement = localElement.querySelector(".cityDate");
    let localTimeElement = localElement.querySelector(".cityTime");
    let localTime = moment.tz.guess();

    localDateElement.innerHTML = localTime.format("MMMM	Do YYYY");
    localTimeElement.innerHTML = localTime.format(
      "HH:mm:ss A"
    );
  }
}

//function to update the city timezeon//
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone==="local") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTimes = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="timezoneBox">
    <div class="row">
    <div class="col">
    <div class="city">${cityName}</div>
    <div class="cityDate">${cityTimes.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="col">
    <div class="cityTime">${cityTimes.format("HH:mm:ss")} ${cityTimes.format(
    "A"
  )}</div>
  </div>
  </div>
  </div>
  `;
}

//Show selected city in dropdown upon selection //
function showDate(event) {
  let cityName
  if (event.target.value.length > 0) {

    function updateDateTime() {
      
      cityTimeZone = event.target.value;
      if (cityTimeZone==="local") {
        cityTimeZone = moment.tz.guess();
      }
      let currentTime = moment()
        .tz(cityTimeZone)
        .format("HH:mm:ss A");

      let currentDate = moment()
        .tz(cityTimeZone)
        .format("dddd, MMMM D, YYYY");
      cityName = cityTimeZone.replace("_", " ").split("/")[1];

      let showCityNameElement = document.querySelector("#cityFiller");
      let selectedCityNameText = `${cityName}`;
      showCityNameElement.innerHTML = selectedCityNameText;

      let showCityDateElement = document.querySelector("#cityDateFiller");
      let selectedCityDateText = `${currentDate}`;
      showCityDateElement.innerHTML = selectedCityDateText;

      let showCityTimeElement = document.querySelector("#cityTimeFiller");
      let selectedCityTimeText = `${currentTime}`;
      showCityTimeElement.innerHTML = selectedCityTimeText;

      let showDateElement = document.querySelector("#selectedCityText");
      let selectedCityText = `It is currently ${currentDate} ${currentTime} in ${cityName}`;
      showDateElement.innerHTML = selectedCityText;
    }

    // Initial update
    updateDateTime();

    // Update every second (1000 milliseconds)
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval when the selection changes
    event.target.addEventListener('change', () => {
      clearInterval(intervalId);
    });

  }
  alert(`It is currently updating in real-time for ${cityName}`);

}


  let selectElement = document.querySelector("#city-dropdown");
  selectElement.addEventListener("change", showDate);
    
  let citiesSelectElement = document.querySelector("#cityFiller");
  citiesSelectElement.addEventListener("change", updateCity);