import React, { useState } from "react";
import { createContext } from "react";

export const ExploreContext = createContext(null);

const ExploreProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const [platformName, setPlatformName] = useState("all");
  const contestValue = {
    platformName,
    setPlatformName,
    currentRoute,
    setCurrentRoute,
  };
  return (
    <ExploreContext.Provider value={contestValue}>
      {children}
    </ExploreContext.Provider>
  );
};

export default ExploreProvider;
