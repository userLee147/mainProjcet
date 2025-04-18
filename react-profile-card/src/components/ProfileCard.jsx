import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const ContentBox = styled.div`
    width : 150px;
    height: 200px;
    background-color: #e7e4e2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;

`
const Ul = styled.ul`
    border-radius: 10px;
    margin: 0px;
    padding: 0px;
`
const Li = styled.li`
    width : 100%;
    list-style: none;
`
const Img = styled.img`
    width : 50px;
    height: 50px;
    margin: 20px;
`

const ProfileCard = ({userList}) => {
  return (
    <>
        <Content>
        {
            userList.map((u) =>
                <ContentBox>
                 <Ul>
                    <Li><Img src="/public/static/iconmonstr-user-circle-thin-240.png"/> </Li>
                    <Li>이름 : {u.name} </Li>
                    <Li>나이 : {u.age} </Li>
                    <Li>{u.isOnline? "🟢 온라인": "🔴 오프라인 " }</Li>
                </Ul>
                </ContentBox> 

            )
        }
        </Content>
    </>

  )
}

export default ProfileCard