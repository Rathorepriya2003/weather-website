async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        } else {
            document.getElementById('cityName').textContent = 'City not found';
            document.getElementById('description').textContent = '';
            document.getElementById('temperature').textContent = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
