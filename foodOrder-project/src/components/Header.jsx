import React from 'react'
import styled from 'styled-components';
import { NonebackgroudBtn } from '../styled/common';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = ({currentUser}) => {

  return (
    <HeaderWrap>
                <HeadTitle>테이블링</HeadTitle>
                { 
                currentUser?.log ? (
                  <Container>
                    <p>{currentUser.name} 안녕하세요</p>
                    <NonebackgroudBtn>
                      <FaRegUserCircle></FaRegUserCircle>
                    </NonebackgroudBtn>
                  </Container>
                ) : (
                  <LoginBtn to="/login">
                    로그인을 해주세요 <IoMdLogIn></IoMdLogIn>
                  </LoginBtn>
                )}
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
display: flex;
align-items: center;
`

const HeadTitle = styled.p`
font-size: 20px;
margin: 10px;
font-weight: 400;
color: #ff5100 ;
`

const LoginBtn = styled(Link)`
  background-color: none;
`;

