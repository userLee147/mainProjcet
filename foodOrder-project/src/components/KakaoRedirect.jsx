import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UserStoreV2 } from '../store/UserStoreV2'
import { userService } from '../api/user'
import { useNavigate } from 'react-router-dom'


const KakaoRedirect = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code")
    sendCodeToServer(code);
  }, [])

  const { JWTLogin } = UserStoreV2();

  const sendCodeToServer = async (code) => {
    try {

      await userService.snsLogin(code);
      const member = await userService.getMyInfo();
      
      JWTLogin({...member})
  
      alert(`${member.userName}님 환영합니다.`)
      
      navigate('/')
    } catch (error) {
      console.error("Kakao 로그인 실패:", error)
      alert("Kakao 로그인에 실패했습니다.")
    }
  }

  return (
    <div>
      <LoadingContainer>
        <Spinner />
        <Title>카카오 로그인 진행중...</Title>
      </LoadingContainer>
    </div>
  )
}

export default KakaoRedirect 

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid  ${({theme}) => theme.colors.white };
  border-top: 4px solid ${({theme}) => theme.colors.orangeMain };;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Title = styled.h2`
  color:${({theme})=> theme.colors.gray[1]};
  font-size: 1.25rem;
`