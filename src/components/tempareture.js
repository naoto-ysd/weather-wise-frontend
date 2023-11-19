import React from "react";

function roundToOneDecimalPlaces(temp) {
	return Math.round(temp * 10) / 10;
}

const Tempareture = (tempareture) => {
  const FAHRENHEIT = 273.15 // variable used to convert from fahrenheit to celsius 
  return(
  <>
  <h2>
    plan to show temperature here dynamically
  </h2>
  <div>
    <p>Temperature: {roundToOneDecimalPlaces(tempareture - FAHRENHEIT)}°C</p> 
  </div>
  </>
  );
}

export default Tempareture