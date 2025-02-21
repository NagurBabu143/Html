const API_KEY = "926b182670d1bac148721925866e0a6d";
const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("result");

searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    console.log("No city entered");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        alert("City not found.");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
      `;

      resultDiv.innerHTML = weatherInfo;

      console.log("Weather info :", weatherInfo);
    })
    .catch((error) => {
      console.log("Error:", error);
      resultDiv.textContent = error.message;
    });
});
