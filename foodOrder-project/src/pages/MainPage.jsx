import React from 'react';

import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import SearchContent from '../components/SearchContent';

import { NavDiv, NavButton, Wrap } from '../styled/common/common';

//icon
import { FaStore } from 'react-icons/fa';
import { PiForkKnife } from 'react-icons/pi';
import { PiMegaphoneBold } from 'react-icons/pi';
import { LuSandwich } from 'react-icons/lu';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/styles.css';
import { UserStoreV2 } from '../store/UserStoreV2';

const MainPage = () => {
  const { currentUser } = UserStoreV2();
  const navigator = useNavigate();

  const checkUser = () => {
    if (currentUser) {
      navigator('/order');
    } else {
      alert('로그인 후 이용가능합니다.');
    }
  };

  return (
    <div>
      {/* <Header> </Header> */}
      <SearchContent> </SearchContent>
      <SwiperContainer>
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="main-swiper"
        >
          <SwiperSlide>도시락 세트 할인중 </SwiperSlide>
          <SwiperSlide>광고배너 준비중</SwiperSlide>
          <SwiperSlide>광고배너 준비중</SwiperSlide>
        </Swiper>
      </SwiperContainer>

      <NavDiv>
        <NavButton onClick={() => navigator('/menu', { state: currentUser })}>
          <PiForkKnife color="black" size={30}></PiForkKnife>
          메뉴정보
        </NavButton>

        <NavButton onClick={checkUser}>
          <FaStore color="black" size={30}></FaStore>
          <p>단체주문</p>
        </NavButton>

        <NavButton>
          <PiMegaphoneBold color="black" size={30}></PiMegaphoneBold>
          <p>공지</p>
        </NavButton>

        <NavButton>
          <LuSandwich color="black" size={30}></LuSandwich>
          <p>준비중</p>
        </NavButton>
      </NavDiv>

      <div>
        <ContentTitle>오늘샌드 단체주문 예시</ContentTitle>
        <CardWrapper>
          <Image src="/public/img/교회샌드위치.PNG" />
          <TextOverlay>
            <div>
              <Title>샌드위치set NO1</Title>
              <Description>교회 행사도시락으로 보내드린 맛난 간식세트</Description>
            </div>

            <a href="https://blog.naver.com/todaysand_/223692018798">
              <IoArrowForwardCircleOutline size={50} color="black"></IoArrowForwardCircleOutline>
            </a>
          </TextOverlay>
        </CardWrapper>
        <CardWrapper>
          <Image src="/public/img/버스대절.jpg" />
          <TextOverlay>
            <div>
              <Title>샌드위치set NO1</Title>
              <Description>강남 결혼식 답례품으로 샌드위치세트 준비하세요</Description>
            </div>

            <a href="https://blog.naver.com/todaysand_/223658623296">
              <IoArrowForwardCircleOutline size={50} color="black"></IoArrowForwardCircleOutline>
            </a>
          </TextOverlay>
        </CardWrapper>
      </div>
    </div>
  );
};

export default MainPage;

const SwiperContainer = styled.div`
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: black;
  margin: 20px;
`;

const CardWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;

const TextOverlay = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-top: 150px;
  display: flex;
  align-items: end;
  background: linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0) 90%);
  position: absolute;
  bottom: 0px;

  color: black;
  text-align: left;

  a {
    padding: 100px;
    display: flex;
    align-items: end;
    padding: 10px;
  }
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
