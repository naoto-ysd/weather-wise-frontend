import React from "react";

function roundToOneDecimalPlaces(temp) {
	return Math.round(temp * 10) / 10;
}

const Tempareture = (tempareture) => {
  const FAHRENHEIT = 273.15 // variable used to convert from fahrenheit to celsius 
  return(
  <div>
    <p>Temperatureaaa: {roundToOneDecimalPlaces(tempareture - FAHRENHEIT)}°C</p> 
  </div>
  );
}

export default Tempareture