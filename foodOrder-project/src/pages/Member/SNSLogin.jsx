import React, { useState } from 'react';
import useUserStore from '../../store/UserStore';
import { CommonBtn, ContentTitle, NonebackgroudBtn } from '../../styled/common/common';

import styled from 'styled-components';
import { FiX, FiVoicemail, FiMail } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { CloseBtn, CloseBtnV2, InfoContent, InfoWrap, ModalCloseDiv, ModalWrap } from '../../styled/modal';

const SNSLogin = () => {
  const { VITE_kakaoClientId } = import.meta.env;
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const { login, errors, sessionLogin } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (id.trim() === '' || pwd.trim() === '') {
      return;
    }

    await sessionLogin(id, pwd);

    if (errors != null) {
      alert(errors);
    } else {
      navigate('/');
    }
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:8888/oauth2/authorization/naver';
  };

  const kakaoLogin = async () => {
    window.location.href = 'http://localhost:8888/oauth2/authorization/kakao';

    // const url = 'https://kauth.kakao.com/oauth/authorize';
    // const redirectUri = 'http://localhost:5173/oauth/kakao/redirect';
    // const scope = 'profile_nickname account_email';

    // window.location.href = `${url}?client_id=${VITE_kakaoClientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  };

  const handleGoogleLogin = () => {
    // /oauth2/authorization/{provider}
    window.location.href = 'http://localhost:8888/oauth2/authorization/google';
  };

  return (
    <div>
      <ModalWrap>
        <ContentWrap>
          <ModalCloseDiv>
            <CloseBtnV2 onClick={() =>navigate("/")}>
              <FiX color="#828282" />
            </CloseBtnV2>
          </ModalCloseDiv>

          <HeaderSection>
            <p> 오늘샌드에 오신 것을 환영합니다.</p>
          </HeaderSection>

          <FormWrapper>
            <button alt="Naver Login" onClick={handleNaverLogin}>
              <ImgBtnWrap>
                <div>
                  <img
                    src="/src/assets/naver_log(green).png
                "
                    alt="naverlogo"
                  />
                </div>

                <p>네이버로 로그인</p>
              </ImgBtnWrap>
            </button>

            <button alt="Google Login" onClick={handleGoogleLogin}>
              <ImgBtnWrap>
                <div>
                  <img src="/src/assets/google_logo.png" alt="googlelogo" />
                </div>
                <p>구글로 로그인</p>
              </ImgBtnWrap>
            </button>

            <button type="submit" onClick={() => navigate('/login')}>
              <ImgBtnWrap>
                <div>
                  <FiMail color='#4F4F4F' size={'18px'}></FiMail>
                </div>
                <p> 이메일로 로그인</p>
              </ImgBtnWrap>
            </button>
          </FormWrapper>

          <LineWrap>
            <hr />
            <p>다른 소셜 로그인</p>
            <hr />
          </LineWrap>

          <div>
            <button alt="Kakao Login" onClick={kakaoLogin}>
              <SnsIconBtn src="/src/assets/kakao(wavve_com).png" alt="" />
            </button>
          </div>
          
          <InfoWrap>
            <InfoContent>
            <p>아직 회원이 아니신가요? </p>
            <a href="">회원가입</a>
            </InfoContent>
          </InfoWrap>
          

        </ContentWrap>
      </ModalWrap>
    </div>
  );
};

export default SNSLogin;

const ContentWrap = styled.div`
  width: 400px;
  padding: ${({ theme }) => theme.spacing[6]};
  position: absolute;
  top: 50px;
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
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 15px 0 20px 0;

  font-size: ${({ theme }) => theme.fontSizes.lg};
  color : ${({ theme }) => theme.colors.gray[1]};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin: 20px ${({ theme }) => theme.spacing[6]};



  button {
    display: flex;
    justify-content: left;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    color : ${({ theme }) => theme.colors.gray[2]};


    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    border: 1px solid ${({ theme }) => theme.colors.gray[5]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-shadow:  ${({ theme }) => theme.shadows.sm};
    ;
    cursor: pointer;
  }
`;

const ImgBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  div {
    padding-top: 2px;
    width: 18px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const SnsIconBtn = styled.img`
  width: 50px;
  height: 50px;

`;

const LineWrap = styled.div`

  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing[6]} ;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  
  hr {
    flex: 1;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[5]};
  }

  p {
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.gray[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  
    white-space: nowrap;
  }
`;
