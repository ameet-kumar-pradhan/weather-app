import React from 'react';
const Weather = (props) => {
   return (
      <div>
         {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
         {props.temperature && <p>Temperature: {Math.floor(props.temperature - 273)} °C</p>}
         {props.humidity && <p>Humidity: {props.humidity} %</p>}
         {props.description && <p>Conditions:  {props.description}</p>}
         {props.error && <p>{props.error}</p>}
      </div>
   )
}
export default Weather;