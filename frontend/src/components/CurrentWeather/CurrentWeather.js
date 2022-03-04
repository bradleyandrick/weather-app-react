import React, { useEffect, useState } from "react";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const [iconURL, seticonURL] = useState("");

  useEffect(() => {
    const iconURL = "https://www.metaweather.com/static/img/weather/";
    const finalIconURL = iconURL + props.current.weather_state_abbr + ".svg";
    seticonURL(finalIconURL);
  });

  function convertDate(date) {
    const dt = new Date(date);
    const newDT =
      dt.getMonth() + 1 + "/" + (dt.getDate() + 1) + "/" + dt.getFullYear();
    return newDT;
  }

  return (
    <div className="currentWeather">
      <div className="currentWeatherHeader">
        <div className="currentWeatherTitle">Current Weather:</div>
        <div className="currentWeatherDate">
          {convertDate(props.current.applicable_date)}
        </div>
      </div>
      <div className="currentWeatherBody">
        <div className="currentWeatherBodyLeft">
          <img src={iconURL} height="100px"></img>
          <span className="currentWeatherStateName">
            {props.current.weather_state_name}
          </span>
        </div>
        <div className="currentWeatherBodyRight">
          <div className="currentWeatherDetails">
            Current Temp: {Math.round(props.current.the_temp * 1.8 + 32)}&#176;
            F
          </div>
          <div className="currentWeatherDetails">
            High: {Math.round(props.current.max_temp * 1.8 + 32)}&#176; F
          </div>
          <div className="currentWeatherDetails">
            Low: {Math.round(props.current.min_temp * 1.8 + 32)}&#176; F
          </div>
          <div className="currentWeatherDetails">
            Humidity: {props.current.humidity}&#37;
          </div>
          <div className="currentWeatherDetails">
            Visibility: {Math.round(props.current.visibility)} Miles
          </div>
          <div className="currentWeatherDetails">
            Pressure: {Math.round(props.current.air_pressure)}mB
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
