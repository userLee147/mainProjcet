import React, {useState} from 'react'
import Grade from './Grade'
import Toolbar from './Toolbar'


const LandPage = () => {
   const [isLogin, setIsLogin] =  useState(false) 
   const onclickLogin = () => {
        setIsLogin(true) 
   }
   const onclickLogout = ()=> {
    setIsLogin(false) // 상태값을 바꾼다 ex> !isLogin -> x  / fasle -> o 
}
  return (
    <>
        <Grade isLogin={isLogin}  />
        <Toolbar isLogin={isLogin} onclickLogin={onclickLogin} onclickLogout={onclickLogout}/>
    </>
  )
}

export default LandPage