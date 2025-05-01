import React from 'react'

const Heading = ({type, children}) => {
    //const {type, childeren} = props ? 구조분해할당으로 props 키워드를 생략
    if(type === "h2"){
        return <h2>안녕하세요.Props입니다.</h2>
    }
    return (
    <>
     <h1>안녕하세요. Props입니다.</h1>
     <h2>{children}</h2>
    </>
  )
}

export default Heading