import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [woeid, setwoeid] = useState(null);
  const [searchValue, setsearchValue] = useState("");

  return (
    <AppContext.Provider
      value={{
        getwoeid: woeid,
        setwoeid: setwoeid,
        getsearchValue: searchValue,
        setsearchValue: setsearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
