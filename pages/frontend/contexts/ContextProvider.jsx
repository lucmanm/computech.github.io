import React, { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [sideMenuR, setSideMenuR] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const loginAuth = localStorage.getItem("auth");
  useEffect(() => {
    if (loginAuth === null) {
      localStorage.clear();
    } else {
      loginAuth === "auth";
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        sideMenuR,
        setSideMenuR,
        loggedIn,
        setLoggedIn,
        loginAuth,
      }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);