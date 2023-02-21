const form = document.querySelector("#search");
const city = document.querySelector("#city");
const searchButton = document.querySelector("#submit");
const day = document.querySelectorAll("#day");
const weatherCondition = document.querySelectorAll("#ten-day-type");
const tenDayMinTemp = document.querySelectorAll("#ten-day-min");
const tenDayMaxTemp = document.querySelectorAll("#ten-day-max");
const weatherImage = document.querySelectorAll("#weather-condition");
const cityName = document.querySelector("#city-name");
const countryName = document.querySelector("#country-name");
const currentTemprature = document.querySelector("#current-temp");
const currentWeatherType = document.querySelector("#day-type");
const sunriseTime = document.querySelector("#sunrise-time");
const sunsetTime = document.querySelector("#sunset-time");
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#humidity");
const visibility = document.querySelector("#visibility");
const loading = document.querySelector("#loading");

//On Submit Event call searchcity function
form.addEventListener("submit", searchcity);

//Detects Current Location with the help of GeoLocation API
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getCurrentLocationWeather(latitude, longitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

//Function searchcity
function searchcity(event) {
  loading.classList.add("display-block");
  event.preventDefault();
  const cityName = city.value;
  getWeather(cityName);
  city.value = "";
}

// function to get weather after getting current location latitude and longitude
async function getCurrentLocationWeather(latitude, longitude) {
  //fetching data using API
  const options = await fetch(
    "https://yahoo-weather5.p.rapidapi.com/weather?lat=" +
      latitude +
      "&long=" +
      longitude,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4479430c1msh8dd78333e4543e5p1ae3d7jsnf6e09b486059",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  ).then((options) => options.json()); //converting it from json format to js object format
  printing(options);
  loading.classList.add("display-none");
}

// function to get weather opf the city searched in search box
async function getWeather(city) {
  //fetching data using API
  const options = await fetch(
    "https://yahoo-weather5.p.rapidapi.com/weather?location=" + city,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "786c09f3d1msh4c66591151866d2p153687jsn00533245dc04",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  ).then((options) => options.json()); //converting it from json format to js object format
  loading.classList.remove("display-block");
  printing(options);
}

// function to print the data to DOM
function printing(options) {
  // printing the city name
  cityName.innerText = options.location.city;
  //printing the country name
  countryName.innerText = options.location.country;
  //printing current temp converted to C
  currentTemprature.innerText = (
    (options.current_observation.condition.temperature - 32) *
    (5 / 9)
  ).toFixed(2);
  //printing current weather condition
  currentWeatherType.innerText = options.current_observation.condition.text;
  //printing sunrise time
  sunriseTime.innerText = options.current_observation.astronomy.sunrise;
  // printing sunset time
  sunsetTime.innerText = options.current_observation.astronomy.sunset;
  // printing wind speed
  windSpeed.innerText = options.current_observation.wind.speed;
  // printing humidity
  humidity.innerText = options.current_observation.atmosphere.humidity;
  //printing visibility
  visibility.innerText = options.current_observation.atmosphere.visibility;

  // printing 10 day forecast days
  for (let i = 0; i < day.length; i++) {
    day[i].innerText = options.forecasts[i].day;
  }

  // printing 10 day forecast weather conditions
  for (let i = 0; i < weatherCondition.length; i++) {
    weatherCondition[i].innerText = options.forecasts[i].text;
  }

  //converting F mintemp to C mintemp
  for (let i = 0; i < tenDayMinTemp.length; i++) {
    tenDayMinTemp[i].innerText = (
      (options.forecasts[i].low - 32) *
      (5 / 9)
    ).toFixed(2);
  }

  // converting F maxtemp to C maxtemp
  for (let i = 0; i < tenDayMaxTemp.length; i++) {
    tenDayMaxTemp[i].innerText = (
      (options.forecasts[i].high - 32) *
      (5 / 9)
    ).toFixed(2);
  }

  //different image for different weather conditions
  for (let i = 0; i < weatherCondition.length; i++) {
    if (options.forecasts[i].text == "Haze") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/haze.png");
    } else if (options.forecasts[i].text == "Partly Cloudy") {
      weatherImage[i].setAttribute(
        "src",
        "./Weather-Condition/partly-cloudy.png"
      );
    } else if (options.forecasts[i].text == "Mostly Sunny") {
      weatherImage[i].setAttribute(
        "src",
        "./Weather-Condition/mostly-sunny.png"
      );
    } else if (options.forecasts[i].text == "Sunny") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/sunny.png");
    } else if (options.forecasts[i].text == "Cloudy") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/clouds.png");
    } else if (options.forecasts[i].text == "Fog") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/foggy.png");
    } else if (options.forecasts[i].text == "Clear") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/clear.png");
    } else if (options.forecasts[i].text == "Thunderstorms") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/storm.png");
    } else if (options.forecasts[i].text == "Showers") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/rainy.png");
    } else if (options.forecasts[i].text == "Mostly Cloudy") {
      weatherImage[i].setAttribute(
        "src",
        "./Weather-Condition/mostly-sunny.png"
      );
    } else if (options.forecasts[i].text == "Fair") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/sunny.png");
    } else if (options.forecasts[i].text == "Snow") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/snowy.png");
    } else if (options.forecasts[i].text == "Windy") {
      weatherImage[i].setAttribute("src", "./Weather-Condition/windy.png");
    }
  }
}
