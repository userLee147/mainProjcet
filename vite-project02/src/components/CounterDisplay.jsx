import React from 'react';
import styled from 'styled-components';
import useCountStore from '../store/post/useCountStore';

const DisplayContainer = styled.div`
  font-size: 32px;
  margin: 16px;
  padding: 20px;
  border-radius: 8px;
`;

const CountText = styled.span`
  font-weight: bold;
`;
const CounterDisplay = () => {
  //const count = useCountStore((state) => state.count);
  // 전체객체를 가져옴 객체할당해서 사용하면됨
  const { count } = useCountStore();

  return (
    <DisplayContainer>
      현재 카운트 : <CountText>{count}</CountText>
    </DisplayContainer>
  );
};

export default CounterDisplay;
