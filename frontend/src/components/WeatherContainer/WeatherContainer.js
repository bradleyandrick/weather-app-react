import React, { useContext } from "react";
import "./WeatherContainer.css";
import WeatherResults from "../WeatherResults/WeatherResults";
import { AppContext } from "../../store";

const WeatherContainer = () => {
  const store = useContext(AppContext);
  return (
    <div className="weatherContainer">
      {store.getwoeid !== null ? <WeatherResults></WeatherResults> : null}
    </div>
  );
};

export default WeatherContainer;
