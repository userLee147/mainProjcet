import React, { useState } from 'react'
import SignUp from './SignUp'
import styled from 'styled-components'

const Btn = styled.button`
display: flex;
flex-direction: row;
`

function Toolbar({isLogin, onclickLogin, onclickLogout}) {
    const [formState, SetFormState] = useState(false)
    const formOUt = ()=>{
        SetFormState(true)
    }
    

    return (
    <div>
        {
            isLogin ? 
            <div>환영합니다. <button onClick={onclickLogout}>로그아웃</button></div>
            :
            <div>로그인을 하세요 
                <Btn onClick={onclickLogin}>로그인</Btn>
        
                <Btn onClick={formOUt}>회원가입</Btn>
                 {formState && <SignUp ></SignUp>}
                
            </div>

        }

    </div>
  )
}

export default Toolbar