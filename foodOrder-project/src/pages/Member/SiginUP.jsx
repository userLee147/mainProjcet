import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiX, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CloseBtnV2, ModalCloseDiv, ModalWrap } from '../../styled/modal.js';
import { useSignupForm } from '../../hooks/useSginUpForm.js';
import { CommonBtn, CommonBtn2 } from '../../styled/common/common.js';
import { userService } from '../../api/user.js';
import Timer from '../../components/Timer.jsx';

const SignUp = () => {
  const {
    register,
    onSubmit,
    errors,
    emailVerified,
    emailAuthStarted,
    setEmailAuthStarted,
    handleSubmit,
    handleEmailAuth,
    handleVerifyCode,
  } = useSignupForm();
  const navigate = useNavigate();

  const [authCode, setAuthCode] = useState('');

  const handleTimeout = () => {
    alert('시간이 초과되었습니다');
    setEmailAuthStarted(false);
    setAuthCode('');
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
            <button onClick={() => navigate('/snsLogin')}>
              <FiChevronLeft />
            </button>
            <p> 이메일로 가입하기</p>
          </HeaderSection>

          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <LoginContetDiv>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" placeholder="이름을 입력하세요" {...register('userName')} />
            </LoginContetDiv>
            {errors.userName && errors.userName.message}

            <LoginContetDiv>
              <label htmlFor="email">이메일</label>
              <ButtonWrap $emailAuthStarted ={emailAuthStarted}>
                <input
                  type="text"
                  id="email"
                  placeholder="ID@example.com"
                  {...register('email')}
                  disabled={emailVerified}
                />

                {!emailVerified && !emailAuthStarted && (
                  <CommonBtn2 type="button" onClick={handleEmailAuth}
                  >
                    인증하기
                  </CommonBtn2 >
                )}

                {emailVerified && 
                <div style={{ width : '38%' , margin: "auto" ,color: '#388e3c', fontWeight: 'bold'}}> 인증완료</div>}
              </ButtonWrap>

              {!emailVerified && emailAuthStarted && (
                <EmailVerifiedWrap>
                  <input type="text" value={authCode} onChange={(e) => setAuthCode(e.target.value)} />
                  <div>
                    <CommonBtn2 type="button" onClick={() => handleVerifyCode(authCode)}>
                      확인
                    </CommonBtn2>
                    <Timer
                      seconds={180} // 유효시간설정
                      isActive={emailAuthStarted} //인증키 메일 송부여부
                      onTimeout={handleTimeout} // 초기화
                      colorChangeSecout={30}
                    ></Timer>
                  </div>
                </EmailVerifiedWrap>
              )}
            </LoginContetDiv>
            {errors.email && errors.email.message}

            <LoginContetDiv>
              <label htmlFor="userPwd">비밀번호</label>
              <input type="password" id="userPwd" placeholder="영문자 조합 5자리 이상" {...register('userPwd')} />
            </LoginContetDiv>
            {errors.userPwd && errors.userPwd.message}

            <CheckBoxWrap>
              <CheckedContent>
                <input type="checkbox" />
                <p>모두동의(선택포함)</p>
              </CheckedContent>

              <CheckedContent>
                <button>
                  <FiCheck size={'20px'} />
                </button>
                <a>(필수 이용약관)</a>
              </CheckedContent>
              <CheckedContent>
                <button>
                  <FiCheck size={'20px'} />
                </button>
                <a>(필수 이용약관)</a>
              </CheckedContent>
              <CheckedContent>
                <button>
                  <FiCheck size={'20px'} />
                </button>
                <a>(필수 이용약관)</a>
              </CheckedContent>
            </CheckBoxWrap>

            <RegisterBtn type="submit">가입하기</RegisterBtn>
          </FormWrapper>
        </ContentWrap>
      </ModalWrap>
    </div>
  );
};

export default SignUp;

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

const FormWrapper = styled.form`
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
  border-radius: 6px;
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
    border-radius: 4px;
    border-radius: 8px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  gap: 2%;
  input {
    width: ${({$emailAuthStarted}) => $emailAuthStarted ? '100%': '60%' };
  }

  button {
    width: 38%;
    margin: 0;
    padding: 0;
  }
`;
const EmailVerifiedWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  gap: 2%;

  input {
    width: 50%;
  }

  div {
    display: flex;
    align-items: center;
    width: 45%;
    gap: 5%;
    margin: 0;
    padding: 0;

    button {
      width: 50%;
      padding: ${({ theme }) => theme.spacing[2]};
      margin: 0;
    }
  }
`;


const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    margin: ${({ theme }) => theme.spacing[3]} 0;
  }
`;

const CheckedContent = styled.div`
  display: flex;

  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};

  button {
    color: ${({ theme }) => theme.colors.orangeMain};
  }
  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
