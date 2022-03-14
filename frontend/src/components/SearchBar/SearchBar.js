import React, { useState, useContext } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchIcon.svg";
import mapMarker from "../../images/mapMarker.svg";

import { AppContext } from "../../store";

const SearchBar = () => {
  const store = useContext(AppContext);
  const [searchResults, setsearchResults] = useState([]);
  const [showSearchResults, setshowSearchResults] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  function onResultItemClicked(e) {
    store.setwoeid(e.target.attributes[1].value);
    setsearchValue(e.target.innerHTML);
    setshowSearchResults(false);
  }

  function onSearchInputChange(e) {
    //query API and set search results state
    setsearchValue(e.target.value);

    if (e.target.value !== "") {
      const weatherAPIURL =
        "http://localhost:4000/meta-weather/location/search/?query=";
      const weatherAPIURLWithQuery = weatherAPIURL + e.target.value;

      fetch(weatherAPIURLWithQuery)
        .then((response) => response.json())
        .then(function (data) {
          if (data.length > 0) {
            setshowSearchResults(true);
            const slicedArray = data.slice(0, 5);
            setsearchResults(slicedArray);
          } else {
            setshowSearchResults(false);
          }
        });
    } else {
      setshowSearchResults(false);
      store.setwoeid(null);
    }
  }

  function onLocationIconClicked(e) {
    let currentPosition = navigator.geolocation.getCurrentPosition(function (
      position
    ) {
      let currentLat = position.coords.latitude.toFixed(2);
      let currentLon = position.coords.longitude.toFixed(2);

      let weatherAPIURL =
        "http://localhost:4000/meta-weather/location/search/?lattlong=";

      let weatherAPIURLWithLatLon =
        weatherAPIURL + currentLat + "," + currentLon;

      fetch(weatherAPIURLWithLatLon)
        .then((response) => response.json())
        .then(function (data) {
          if (data.length > 0) {
            setsearchResults(data);
            setshowSearchResults(false);
            setsearchValue(data[0].title);
            store.setwoeid(data[0].woeid);
          }
        });
    });
  }

  function setSearchBlur() {
    setTimeout(function () {
      setshowSearchResults(false);
    }, 500);
  }

  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} alt="search icon" width="17px" />
        </div>
        <div className="searchInputHolder">
          <div className="searchInputNested">
            <input
              className="searchInput"
              value={searchValue}
              onChange={(event) => onSearchInputChange(event)}
              autoComplete="off"
              onBlur={setSearchBlur}
              type="text"
              placeholder="search a location..."
            ></input>
          </div>

          {showSearchResults ? (
            <div className="searchDropdown">
              {searchResults.map((searchResult) => (
                <div
                  className="searchResults"
                  key={searchResult.woeid}
                  data-key={searchResult.woeid}
                  onClick={(event) => onResultItemClicked(event)}
                >
                  {searchResult.title}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div
          className="locationIcon"
          onClick={(event) => onLocationIconClicked(event)}
        >
          <img src={mapMarker} alt="map marker icon" width="22px" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
