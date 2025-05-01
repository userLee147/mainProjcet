import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const MainContext = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div
    style={{
        width :"100vw",
        height:"100vh",
        padding:"1.5rem",
        background : theme,
        color : theme === "white" ? "black":"white"
    }

    }
    
    >
        <p>안녕하세요, 테마변경 테스트 중입니다.</p>
        <button onClick={toggleTheme}></button>
    </div>
  )
}

export default MainContext