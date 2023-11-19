// display local temperarture and description
import React, { useState, useEffect } from 'react';
// import Tempareture from './components/tempareture';
import Tempareture from './tempareture';

function roundToOneDecimalPlaces(temp) {
	return Math.round(temp * 10) / 10;
}

export default function Weather() {
	const [weather, setWeather] = useState(null);
	const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
	let city = "Tokyo";  // TODO: get value dynamicallyroundToTwoDecimalPlaces(weather.main.temp - 273.15)

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
			.then(response => response.json())
			.then(data => {
				setWeather(data);
			})
			.catch(error => {
				console.error("Error fetching weather data:", error);
			}
			);
	}, [API_KEY, city]);

	if (!weather) return <div>Loading...</div>;

	return (
	<div>
		<h2><Tempareture/></h2>
		<p>Temperature: {roundToOneDecimalPlaces(weather.main.temp - 273.15)}°C</p> 
		{/* <p>Temperature: {weather.main.temp - 273.15}°C</p> convert from kelvin to celsius */}
		<p>Condition: {weather.weather[0].description}</p>
	</div>
	);
};