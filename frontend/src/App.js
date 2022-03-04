import "./App.css";
import AppProvider from "./store";

import headLogo from "./images/WeatherOpen_crop.png";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";

function App() {
  return (
    <div className="App">
      <div className="headLogoImage">
        <img
          src={headLogo}
          className="LogoImage"
          alt="weather logo"
          height="92px"
        />
      </div>
      <AppProvider>
        <SearchBar></SearchBar>
        <WeatherContainer></WeatherContainer>
      </AppProvider>
    </div>
  );
}

export default App;
