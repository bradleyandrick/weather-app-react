import React, { useState, useEffect, useContext } from "react";
import "./WeatherResults.css";
import { AppContext } from "../../store";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import FiveDayForecast from "../FiveDayForecast/FiveDayForecast";

const WeatherResults = () => {
  const store = useContext(AppContext);
  const [currentCity, setcurrentCity] = useState("");
  const [weatherData, setweatherData] = useState(null);

  useEffect(() => {
    setcurrentCity("");
    if (store.getwoeid !== null) {
      const weatherAPIURL = "http://localhost:4000/meta-weather/location/";
      const weatherAPIURLLocation = weatherAPIURL + store.getwoeid + "/";

      fetch(weatherAPIURLLocation)
        .then((response) => response.json())
        .then(function (data) {
          setcurrentCity(data.title + ", " + data.parent.title);
          if (data.consolidated_weather.length > 0) {
            setweatherData(data.consolidated_weather);
          }
        });
    }
  }, [store.getwoeid]);

  return (
    <div className="WeatherResults">
      {currentCity !== "" && weatherData !== null ? (
        <div>
          <div className="weatherTitle">Weather for {currentCity}</div>
          <CurrentWeather current={weatherData[0]}></CurrentWeather>
          <FiveDayForecast allWeather={weatherData}></FiveDayForecast>
        </div>
      ) : (
        <div className="loadingWeatherText">Loading...</div>
      )}
    </div>
  );
};

export default WeatherResults;
