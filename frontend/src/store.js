import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  //   const [articles, setArticles] = useState([
  //     { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
  //     { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  //   ]);
  //   const [addressValue, setAddressValue] = useState("1612 Oline Place");

  const [woeid, setwoeid] = useState(null);
  const [searchValue, setsearchValue] = useState("");
  const [testValue, settestValue] = useState("test value here");

  return (
    <AppContext.Provider
      value={{
        getwoeid: woeid,
        setwoeid: setwoeid,
        getsearchValue: searchValue,
        setsearchValue: setsearchValue,
        gettestValue: testValue,
        settestValue: settestValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
