import React, { useState, useCallback, useMemo } from 'react'
import ViewItem from './ViewItem'

const UseCallbackTest = () => {
    const [num, setNum] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => num ? [num, num+1, num+2] : [0,0,0]);


    const theme = useMemo(() => ({
        backgroundColor : dark? "#333" : "#fff",
        color : dark?"#fff" : "#333",
        padding : "12px",
    }),[dark]);

    return (

        <div style={theme}>
            <h2>UseCallbackTest</h2>
            <input
                type="number"
                value={num}
                onChange={(ev) => setNum(parseInt(ev.target.value))}
            />
            <button onClick={() => setDark(prev => !prev)}>
                테마 변경
            </button>
            <ViewItem getItems = {getItems}></ViewItem>
            
        </div>
    )
}

export default UseCallbackTest