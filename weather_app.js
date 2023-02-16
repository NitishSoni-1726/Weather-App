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
form.addEventListener("submit", searchcity);

function searchcity(event) {
  loading.classList.add("display-block");
  event.preventDefault();
  const cityName = city.value;
  getWeather(cityName);
  city.value = "";
}

async function getWeather(city) {
  const options = await fetch(
    "https://yahoo-weather5.p.rapidapi.com/weather?location=" + city,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0c05ca972bmsh6653910830035bfp11fc4fjsn40cd7a929c7d",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  ).then((options) => options.json());
  loading.classList.remove("display-block");
  console.log(options);

  cityName.innerText = options.location.city;
  countryName.innerText = options.location.country;
  currentTemprature.innerText = (
    (options.current_observation.condition.temperature - 32) *
    (5 / 9)
  ).toFixed(2);
  currentWeatherType.innerText = options.current_observation.condition.text;
  sunriseTime.innerText = options.current_observation.astronomy.sunrise;
  sunsetTime.innerText = options.current_observation.astronomy.sunset;
  windSpeed.innerText = options.current_observation.wind.speed;
  humidity.innerText = options.current_observation.atmosphere.humidity;
  visibility.innerText = options.current_observation.atmosphere.visibility;

  day[0].innerText = options.forecasts[0].day;
  day[1].innerText = options.forecasts[1].day;
  day[2].innerText = options.forecasts[2].day;
  day[3].innerText = options.forecasts[3].day;
  day[4].innerText = options.forecasts[4].day;
  day[5].innerText = options.forecasts[5].day;
  day[6].innerText = options.forecasts[6].day;
  day[7].innerText = options.forecasts[7].day;
  day[8].innerText = options.forecasts[8].day;
  day[9].innerText = options.forecasts[9].day;

  weatherCondition[0].innerText = options.forecasts[0].text;
  weatherCondition[1].innerText = options.forecasts[1].text;
  weatherCondition[2].innerText = options.forecasts[2].text;
  weatherCondition[3].innerText = options.forecasts[3].text;
  weatherCondition[4].innerText = options.forecasts[4].text;
  weatherCondition[5].innerText = options.forecasts[5].text;
  weatherCondition[6].innerText = options.forecasts[6].text;
  weatherCondition[7].innerText = options.forecasts[7].text;
  weatherCondition[8].innerText = options.forecasts[8].text;
  weatherCondition[9].innerText = options.forecasts[9].text;

  tenDayMinTemp[0].innerText = (
    (options.forecasts[0].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[1].innerText = (
    (options.forecasts[1].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[2].innerText = (
    (options.forecasts[2].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[3].innerText = (
    (options.forecasts[3].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[4].innerText = (
    (options.forecasts[4].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[5].innerText = (
    (options.forecasts[5].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[6].innerText = (
    (options.forecasts[6].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[7].innerText = (
    (options.forecasts[7].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[8].innerText = (
    (options.forecasts[8].low - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMinTemp[9].innerText = (
    (options.forecasts[9].low - 32) *
    (5 / 9)
  ).toFixed(2);

  tenDayMaxTemp[0].innerText = (
    (options.forecasts[0].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[1].innerText = (
    (options.forecasts[1].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[2].innerText = (
    (options.forecasts[2].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[3].innerText = (
    (options.forecasts[3].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[4].innerText = (
    (options.forecasts[4].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[5].innerText = (
    (options.forecasts[5].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[6].innerText = (
    (options.forecasts[6].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[7].innerText = (
    (options.forecasts[7].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[8].innerText = (
    (options.forecasts[8].high - 32) *
    (5 / 9)
  ).toFixed(2);
  tenDayMaxTemp[9].innerText = (
    (options.forecasts[9].high - 32) *
    (5 / 9)
  ).toFixed(2);

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
