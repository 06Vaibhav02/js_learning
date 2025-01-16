document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-messag");

    const API_key = "6bb392c2f51f6832c5d48fa836097f05" //env variable

    getWeatherBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (!city) return;
    })


    function fetchWeatherData(city) {
        //get weather data
    }

    function displayWeatherData(weatherData) {
        //display weather data
    }

    function showError() {
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }



})