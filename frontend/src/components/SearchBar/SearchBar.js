import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchIcon.svg";
import mapMarker from "../../images/mapMarker.svg";

const SearchBar = () => {
  const [searchResults, setsearchResults] = useState([
    { woeid: "num1", title: "num one" },
    { woeid: "num2", title: "num two" },
  ]);

  const [searchValue, setsearchValue] = useState("");

  function onResultItemClicked(event) {
    //console.log(event.target.attributes[1]);
  }

  function onSearchInputChange(e) {
    setsearchValue(e.target.value);
  }

  return (
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
            // onFocus={setFocusStore}
            // onBlur={setBlur}
            type="text"
            placeholder="search a location..."
          ></input>
        </div>

        {searchValue !== "" ? (
          <div className="searchDropdown">
            {searchResults.map((searchResult) => (
              <div className="searchResults" key={searchResult.woeid} data-key={searchResult.woeid} onClick={(event) => onResultItemClicked(event)}>
                {searchResult.title}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="locationIcon">
        <img src={mapMarker} alt="map marker icon" width="22px" />
      </div>
    </div>
  );
};

export default SearchBar;
