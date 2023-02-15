const form = document.querySelector("#search");
const city = document.querySelector("#city");
const searchButton = document.querySelector("#submit");
form.addEventListener("submit", searchcity);

function searchcity(event) {
  event.preventDefault();
  const cityName = city.value;
  getWeather(cityName);
}

async function getWeather(city) {
  const options = await fetch(
    "https://yahoo-weather5.p.rapidapi.com/weather?location=" + city,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d7afdd6f86mshe5cb3ab2531f125p1d35b2jsnfeea94144949",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  ).then((options) => options.json());
  console.log(options);
}
