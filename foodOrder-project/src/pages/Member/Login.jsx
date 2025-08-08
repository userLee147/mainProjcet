import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiX, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CloseBtnV2, ModalCloseDiv, ModalWrap,InfoWrap, InfoContent  } from '../../styled/modal';

import { userService } from '../../api/user';
import { UserStoreV2 } from '../../store/UserStoreV2';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userPwd, setUserPWd] = useState('');
  const [inputError, setInputError] = useState(false);

  const { JWTLogin} = UserStoreV2();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!email || !userPwd) {
      setInputError(true);
      return;
    }

    setInputError(false);

    const userData = {
      email: email,
      userPwd: userPwd,
    };
    
 

    try {
      await userService.login(userData);
      const member = await userService.getMyInfo();
      
      JWTLogin({...member})
  
      alert(`${member.userName}님 환영합니다.`)
      
      navigate('/')

    } catch ({response}) {
      console.log("test", response?.data)
      alert(response?.data.message)
    }

  
  };
  
  return (
    <div>
      <ModalWrap>
        <ContentWrap>
          <ModalCloseDiv>
            <CloseBtnV2>
              <FiX color="#828282" />
            </CloseBtnV2>
          </ModalCloseDiv>

          <HeaderSection>
            <button onClick={() => navigate("/snsLogin")}>
              <FiChevronLeft />
            </button>

            <p> 이메일로 로그인</p>
          </HeaderSection>

          <LoginWrapper>
            <LoginContetDiv>
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                placeholder="ID@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LoginContetDiv>
            {inputError === true && !email && <p>이메일을 입력해주세요</p>}

            <LoginContetDiv>
              <label htmlFor="userPwd">비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                id="userPwd"
                value={userPwd}
                onChange={(e) => setUserPWd(e.target.value)}
              />
            </LoginContetDiv>
            {inputError === true && !userPwd && <p>비밀번호를 입력해주세요</p>}

            <RegisterBtn onClick={(e) => handleSubmit(e)}>로그인하기</RegisterBtn>

            <InfoWrap>
              <InfoContent>
                <p>비밀번호를 잊어버리셨나요</p>
                <a href="">비밀번호찾기</a>
              </InfoContent>

              <InfoContent>
                <p>아직 회원이 아니신가요</p>
                <a href="/signup">회원가입</a>
              </InfoContent>
            </InfoWrap>
          </LoginWrapper>
        </ContentWrap>
      </ModalWrap>
    </div>
  );
};

export default Login;

const ContentWrap = styled.div`
  width: 400px;
  padding: ${({ theme }) => theme.spacing[6]};
  position: absolute;
  top: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin: 40px ${({ theme }) => theme.spacing[3]};
`;

const RegisterBtn = styled.button`
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.orangeMain};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
`;
const LoginContetDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  label {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: left;
  }

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]};
    border: 1px solid ${({ theme }) => theme.colors.gray[4]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`;


const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
