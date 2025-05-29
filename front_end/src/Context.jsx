import React, { createContext, useState, useEffect } from 'react';

export const contextCreate = createContext();

const Context = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [name, setName] = useState('User'); // Default value

  useEffect(() => {
    // Client-side only initialization
    const loadInitialState = () => {
      try {
        const savedName = window.localStorage.getItem("name");
        if (savedName) setName(savedName);
        
        const savedMode = window.localStorage.getItem("mode");
        if (savedMode) setMode(savedMode);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    };
    
    loadInitialState();
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("mode", mode);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [name, mode]);

  return (
    <contextCreate.Provider value={{ name, setName, mode, setMode }}>
      {children}
    </contextCreate.Provider>
  );
};

export default Context;
