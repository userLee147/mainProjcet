import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import UserDetail from './UserDetail'
import Useritem from '../components/Useritem'
import { useUser } from '../components/context/UserContext'
import { ThemeContext } from '../components/context/ThemeContext'


const Header = styled.header`
display: flex;
justify-content: space-between;
border: 1px solid #fbfbfd;
height: 50px;
padding: 10px;
text-align: center;

`
const HeaderTitle = styled.h4`
display: flex;
background-color: white;
`
const StrongP = styled.p`
    color : #0057ff; 
`
const MainDiv = styled.section`
background-color: #fbfbfd;
display: flex;
`
const CardList = styled.div`
    display: flex;
    gap: 10px;
/* 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier()cubic-bezier(.25,.8, 0.25, 1); */

    :hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`
const Img = styled.img`
    width: 100px;
    height: 100px;
    margin: 20px 40px;
   
`
const AdminP1 = styled.p`
display: flex;
margin-top: 40px ;
justify-content: center;
align-items: right;
font-size: 15px;
font-weight: bolder;
`

const AdminP2 = styled.p`
display: flex;
justify-content: center;
align-items: center;
text-align: right;
font-size: 20px;
`


const ImgDiv = styled.div`
justify-content: center;
align-items: center;
`


const UserList = () => {
    const {users} = useUser();
    const {userInfo, setUserInfo} = useState();
    const {isDark, setIsDark} = useContext(ThemeContext)
    
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/user/");
    }

    const toggleTheme = () =>{
        setIsDark(!isDark)
    }

    return (
        <>
            <Header>
                <HeaderTitle>Test Company&emsp; <StrongP>관리자</StrongP>님 환영합니다</HeaderTitle> 
            </Header>
            <MainDiv
                style={{
                backgroundColor: isDark?'#b7d3f8': '#fbfbfd',
                }}>
                    <ImgDiv>
                        <Img src="/public/static/iconmonstr-user-circle-thin-240.png" alt="" />
                        <p> 🟢 온라인</p>
                    </ImgDiv>
                    <div>
                       
                        <AdminP1>관리자</AdminP1>
                        <AdminP2> 00 대표</AdminP2>
                    </div>

                    <div>
                        <button onClick={() => handleClick()}>유저 등록</button>
                    </div>
            </MainDiv>
            <section>
                <h2>유저목록페이지</h2>
                <CardList >
                    {users.map(userItem =>
                        <Useritem key={userItem.id} userItem={userItem} />
                    )}
                </CardList>
            </section>
            <footer>
                <button onClick={toggleTheme}>색변화</button>
            </footer>
         

        </ >
     

    )
}

export default UserList