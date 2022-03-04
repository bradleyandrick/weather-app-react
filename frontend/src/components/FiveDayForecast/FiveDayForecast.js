import React, { useState } from "react";
import "./FiveDayForecast.css";
import ForecastWeather from "../ForecastWeather/ForecastWeather";

const FiveDayForecast = (props) => {
  const [futureDays, setfutureDays] = useState(props.allWeather.slice(1, 6));

  return (
    <div className="fiveDayForecast">
      <div className="fiveDayTitle"> 5 Day Forecast</div>
      <div className="fiveDayContainer">
        {futureDays.map((forecastDay) => (
          <ForecastWeather
            key={forecastDay.id}
            weather={forecastDay}
          ></ForecastWeather>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
