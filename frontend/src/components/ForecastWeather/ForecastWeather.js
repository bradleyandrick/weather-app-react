import React, { useState, useEffect } from "react";
import "./ForecastWeather.css";

const ForecastWeather = (props) => {
  const [iconURL, seticonURL] = useState("");

  useEffect(() => {
    const iconURL = "https://www.metaweather.com/static/img/weather/";
    const finalIconURL = iconURL + props.weather.weather_state_abbr + ".svg";
    seticonURL(finalIconURL);
  });

  function convertDate(date) {
    const dt = new Date(date);
    const newDT =
      dt.getMonth() + 1 + "/" + (dt.getDate() + 1) + "/" + dt.getFullYear();
    return newDT;
  }

  return (
    <div className="forecastWeather">
      <div className="forecastWeatherDate">
        {convertDate(props.weather.applicable_date)}
      </div>
      <div className="forecastWeatherBody">
        <div className="forecastWeatherBodyLeft">
          <img src={iconURL} height="60px"></img>
          <span className="forecastWeatherStateName">
            {props.weather.weather_state_name}
          </span>
        </div>
        <div className="forecastWeatherBodyCenter">
          <div className="forecastWeatherDetailsCenter">
            High: {Math.round(props.weather.max_temp * 1.8 + 32)}&#176; F
          </div>
          <div className="forecastWeatherDetailsCenter">
            Low: {Math.round(props.weather.min_temp * 1.8 + 32)}&#176; F
          </div>
        </div>
        <div className="forecastWeatherBodyRight">
          <div className="forecastWeatherDetailsRight">
            Humidity: {props.weather.humidity}&#37;
          </div>
          <div className="forecastWeatherDetailsRight">
            Visibility: {Math.round(props.weather.visibility)} Miles
          </div>
          <div className="forecastWeatherDetailsRight">
            Pressure: {Math.round(props.weather.air_pressure)}mB
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastWeather;
