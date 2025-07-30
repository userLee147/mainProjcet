import React, { useState } from 'react';
import { ModalWrap, ModalLayOutBox, ModalCloseDiv, ModalContent, ModalBtonBox } from '../../styled/modal';
import styled from 'styled-components';
import useUserStore from '../../store/UserStore';

const CheckPwModal = ({ setIsCheckOpen }) => {
  const { currentUser, updateUser } = useUserStore();
  const [newPwd, setNewPwd] = useState('');

  const handleUpDate = async () => {
    const user = {
      id: currentUser.id,
      pwd: newPwd,
    };
    await updateUser(user);
    navigator('/');
  };

  return (
    <ModalWrap>
      <ModalLayOutBox>
        <ModalCloseDiv>
          <CloseBtn onClick={() => setIsCheckOpen(false)}> x </CloseBtn>
        </ModalCloseDiv>
        <ModalContent>비밀번호를 변경하시겠습니까</ModalContent>
        <label>비밀번호 변경</label>
        <input type="text" onChange={(e) => setNewPwd(e.target.value)} placeholder="새로운 비밀번호를 입력하세요" />

        <ModalBtonBox>
          <button onClick={handleUpDate}>예</button>
          <p>비밀번호가 변경되면 홈화면으로 돌아갑니다.</p>
        </ModalBtonBox>
      </ModalLayOutBox>
    </ModalWrap>
  );
};

export default CheckPwModal;

const CloseBtn = styled.button`
  padding: 0px 5px;
  background-color: white;
`;
