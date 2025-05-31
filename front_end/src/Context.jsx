import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const contextCreate = createContext();

const Context = ({ children }) => {
  // Lazy initialization from localStorage for each state
  const [mode, setMode] = useState("light");
  const [name, setName] = useState(() => window.localStorage.getItem("name") || "User");
  const [userType, setUserType] = useState(() => window.localStorage.getItem("userType") || "");

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("userType", userType);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [name, userType]);

  return (
    <contextCreate.Provider value={{ name, setName, mode, setMode, userType, setUserType }}>
      {children}
    </contextCreate.Provider>
  );
};

export default Context;
