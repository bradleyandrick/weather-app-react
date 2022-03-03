import "./App.css";
import AppProvider from "./store";
import TestComp from "./components/TestComp/TestComp";
import headLogo from "./images/WeatherOpen_crop.png";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="headLogoImage">
        <img src={headLogo} alt="weather logo" height="92px" />
      </div>
      <AppProvider>
        {/* <TestComp></TestComp> */}
        <SearchBar></SearchBar>
      </AppProvider>
    </div>
  );
}

export default App;
