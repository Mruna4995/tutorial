// script.js

document.addEventListener("DOMContentLoaded", function () {
    const weatherForm = document.querySelector('.weather-form');
    const weatherInfoElement = document.getElementById('weather-info');

    weatherForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const cityInput = document.getElementById('city');
        const city = cityInput.value;

        if (city.trim() !== '') {
            getWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    function getWeatherData(city) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeatherInfo(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    }

    function displayWeatherInfo(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const condition = data.weather[0].description;

        weatherInfoElement.innerHTML = `
            <h2>Weather Information</h2>
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${condition}</p>
        `;
    }
});
