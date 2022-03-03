import React, { useState, useEffect, useContext } from "react";
import "./TestComp.css";
import { AppContext } from "../../store";

const TestComp = () => {
  const store = useContext(AppContext);

  return <div className="TestComp">{store.gettestValue}</div>;
};

export default TestComp;
