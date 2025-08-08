import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FiShoppingCart } from 'react-icons/fi';
const Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  background: #f9f9fb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1e1e25;
`;

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  margin: 0 16px 32px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
`;

const TopBar = styled.div`
  position: absolute;
  width: 100%;
  top: 12px;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
  z-index: 10;
`;

const CircleBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0;
  border: none;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    background: #ff9f1a;
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 24px 20px 32px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PriceSmall = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 6px 0 0;
  color: #ff9f1a;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff6f0;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
`;

const DescriptionTitle = styled.div`
  font-weight: 700;
  margin: 16px 0 6px;
  font-size: 18px;
`;

const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #616270;
  margin: 0;
`;

const QuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0 0;
`;

const QuantityPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  user-select: none;
`;

const QtyBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #e6e6ee;
  background: white;
  line-height: 1;
  padding: 0;
`;

const QtyDisplay = styled.div`
  min-width: 24px;
  text-align: center;
`;

const TotalPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #ff9f1a;
  min-width: 140px;
  text-align: right;
`;

const AddCartWrapper = styled.div`
  margin-top: 16px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #ff9f1a;
  border: none;
  border-radius: 32px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(255, 159, 26, 0.35);
  border: none;
`;

const SafeBar = styled.div`
  height: 6px;
  width: 100px;
  background: #1e1e25;
  border-radius: 3px;
  margin: 12px auto 0;
  opacity: 0.12;
`;

const BadgeIcon = styled.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Img = styled.img`
  width: 100%;
  height: 450px;
`;

export default function Detailmenu({
  images = ['/public/img/치킨텐더샐러드.jpeg', '/public/img/치킨텐더샐러드.jpg'],
  title = 'Burger With Meat',
  unitPrice = 12230,
  initialQty = 4,
  description = 'Burger With Meat is a typical food from our restaurant that is much in demand by many people, this is very recommended for you.',
  deliveryInfo = 'Free Delivery',
  timeRange = '20 - 30',
  rating = '4.5',
  onAddToCart = (details) => {
    console.log('Add to cart:', details);
  },
}) {
  const [qty, setQty] = useState(initialQty);
  const total = useMemo(() => unitPrice * qty, [unitPrice, qty]);

  const fmt = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <Container>
      <Card>
        <TopBar>
          <CircleBtn aria-label="뒤로가기">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CircleBtn>
          <CircleBtn aria-label="즐겨찾기">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-6.716-4.42-9.084-9.066C1.547 8.996 3.694 6 7.5 6c1.95 0 3.75.998 4.5 2.5C12.75 6.998 14.55 6 16.5 6 20.306 6 22.453 8.996 21.084 11.934 18.716 16.58 12 21 12 21z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </CircleBtn>
        </TopBar>

        <SwiperWrapper>
          <Swiper modules={[Pagination]} loop pagination={{ clickable: true }} slidesPerView={1}>
            {images.length
              ? images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Img src={src} alt={`${title} ${i + 1}`} />
                  </SwiperSlide>
                ))
              : [1, 2, 3].map((n) => (
                  <SwiperSlide key={n}>
                    <img src={`https://via.placeholder.com/600x450?text=Burger+${n}`} alt={`placeholder ${n}`} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </SwiperWrapper>

        <Content>
          <TitleRow>
            <div>
              <Title>
                {title} <span aria-label="burger">🍔</span>
              </Title>
              <PriceSmall>$ {fmt(unitPrice)}</PriceSmall>
            </div>
          </TitleRow>

          <BadgeRow>
            <Badge>
              <BadgeIcon>💲</BadgeIcon>
              <div>{deliveryInfo}</div>
            </Badge>
            <Badge>
              <BadgeIcon>⏱</BadgeIcon>
              <div>{timeRange}</div>
            </Badge>
            <Badge>
              <BadgeIcon>⭐</BadgeIcon>
              <div>{rating}</div>
            </Badge>
          </BadgeRow>

          <div>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{description}</DescriptionText>
          </div>

          <QuantityPrice>
            <QuantityPicker aria-label="수량 선택">
              <QtyBtn aria-label="감소" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </QtyBtn>
              <QtyDisplay aria-live="polite">{qty}</QtyDisplay>
              <QtyBtn aria-label="증가" onClick={() => setQty((q) => q + 1)}>
                +
              </QtyBtn>
            </QuantityPicker>
            <TotalPrice>$ {fmt(total)}</TotalPrice>
          </QuantityPrice>

          <AddCartWrapper>
            <AddButton
              aria-label="장바구니에 추가"
              onClick={() => onAddToCart({ title, unitPrice, qty, total, images })}
            >
              <FiShoppingCart size={'30px'} />
              Add to Cart
            </AddButton>
          </AddCartWrapper>
        </Content>
      </Card>
      <SafeBar aria-hidden="true" />
    </Container>
  );
}
