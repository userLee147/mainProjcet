import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useUserStore from '../store/UserStore';
import Header from '../components/Header';
import SearchContent from '../components/SearchContent';
import useMenuStore from '../store/MenuStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
  const { currentUser } = useUserStore();
  const { menuList, getMenuList } = useMenuStore();
  const nevigate = useNavigate()

  useEffect(() => {
    const fetchMenu = async () => {
      await getMenuList();
    };
    fetchMenu();
  }, []);

  return (
    <Wrap>
      <Header currentUser={currentUser}> </Header>

      <SearchContent> </SearchContent>

      <NoticeCard>
        <Text>광고배너 준비중입니다.</Text>
      </NoticeCard>

      <section>
        <p>메뉴정보</p>
        {menuList.map((item) => 
              <CardWrapper onClick={() => nevigate(`/detail/${item.id}`)}>
              <Image src={item.img} alt={item.name} />
              <TextOverlay>
                <Title>{item.name}</Title>
                <Description>{item.description}</Description>
              </TextOverlay>
            </CardWrapper>
        )}
      </section>

      <nav>
        {/* 여기는 버튼 컴포넌트 반복..? */}
        <button></button>
      </nav>
      <footer></footer>
    </Wrap>
  );
};

export default MainPage;

const Wrap = styled.div`
  width: 100%;
`;

const NoticeCard = styled.div`
  width: 100%;
  height: 150px;
  margin: 10px;
  border: 1px solid black;
  /* background-image: url('/public/img/다운로드.jpg');
  background-position: center;
  background-size: cover; */
  border-radius: 10px;
  position: relative;
`;

const Text = styled.p`
  color:black;
  padding: auto;
`;


const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;

const TextOverlay = styled.div`
width: 100%;
background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  position: absolute;
  bottom: 0;
  
  color: black;
  text-align: left;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  padding-left: 10px;
`;

const Description = styled.p`
  margin: 4px 0 20px 0;
  font-size: 16px;
  padding-left: 10px;
 
`;
