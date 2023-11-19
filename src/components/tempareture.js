import React from "react";

function roundToOneDecimalPlaces(temperature) {
  console.log(temperature)
	return Math.round(temperature * 10) / 10;
}

const Tempareture = (props) => {
  const FAHRENHEIT = 273.15 // variable used to convert from fahrenheit to celsius 
  return(
  <div>
    <p>Temperature: {roundToOneDecimalPlaces(props.tempareture.main.temp - FAHRENHEIT)}°C</p>
  </div>
  );
}

export default Tempareture