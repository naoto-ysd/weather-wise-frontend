import React, { useState, useEffect } from 'react';

function Weather() {
    const [weather, setWeather] = useState(null);
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const city = "Tokyo";  // TODO: get value dynamically

    useEffect(() => {
      console.log(process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    }, [API_KEY, city]);

    if (!weather) return <div>Loading...</div>;

    return (
        <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main?.temp - 273.15}°C</p> {/* convert from kelvin to celsius */}
            {/* <p>Condition: {weather.weather[0].description}</p> */}
        </div>
    );
}

export default Weather;
