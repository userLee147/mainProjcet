import React, { useState } from 'react'
import MainContext from './MainContext';
import { ThemeContext } from 'styled-components';

const BlackOrWhite = () => {
    const [theme, setTheme] = useState("white")

    const toggleTheme = () => {
        setTheme(theme === "white"? "black": "white");
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContext /> 
    </ThemeContext.Provider>
  )
}

export default BlackOrWhite