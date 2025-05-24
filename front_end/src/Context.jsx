import React, { useContext, useState,useEffect } from 'react'
import { createContext } from 'react'

export const contextCreate=createContext()

const Context = (props) => {
  const[mode,setMode]=useState('dark');
    const [name,setName]=useState(()=>{
        return localStorage.getItem("name") || "User"
      });
      useEffect(()=>{
        localStorage.setItem("name",name)
      },[name])
      return(
    <contextCreate.Provider value={{name,setName,mode,setMode}}>
        {props.children}
    </contextCreate.Provider>
  )
}

export default Context
