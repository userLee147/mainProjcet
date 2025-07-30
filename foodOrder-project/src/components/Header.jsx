import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { HiOutlineUserCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { UserStoreV2 } from '../store/UserStoreV2';
import { userService } from '../api/user';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, JWTLogin, JWTLogout } = UserStoreV2();

  useEffect(() => {
    const token = Cookies.get('token');
    
    const fetchMember = async () => {
      if (token) {
        sessionStorage.setItem('token', token);
        Cookies.remove('token');

        try {
          const member = await userService.getMyInfo();
          JWTLogin(member);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchMember();
  }, []);

  return (
    <HeaderWrap>
      <HeadTitle onClick={() => navigate('/')}>오늘샌드</HeadTitle>
      {currentUser ? (
        <Container onClick={() => navigate('/user')}>
          <CircleBtn>
            <HiOutlineUserCircle size={30} color="white"></HiOutlineUserCircle>
          </CircleBtn>
          <p>내 정보</p>
        </Container>
      ) : (
        <BtnWrap>
          <LoginLink to="/SNSlogin">
            <FiPower />
            <p>로그인</p>
          </LoginLink>

          <SignUpBtn to="/signup">가입하기</SignUpBtn>
        </BtnWrap>
      )}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[6]};

  position: sticky;
  top: 0; // 고정 위치
  height: 60px; // 적절한 높이 설정
  background-color: ${({ theme }) => theme.colors.white}; // 배경 설정 (스크롤 시 투명하면 안 보일 수 있음)
  z-index: ${({ theme }) => theme.zIndices.docked};
`;

const HeadTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.orangeMain};
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.orangeMain};
  }
`;
const CircleBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orangeMain};
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

const BtnWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
  justify-content: center;
  align-items: center;
`;

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors.orangeMain};
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
  align-items: center;
`;

const SignUpBtn = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orangeMain};
  padding: 5px 14px;
  /* padding : ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]}; */
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
