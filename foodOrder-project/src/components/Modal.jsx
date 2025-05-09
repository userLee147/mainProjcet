import React from 'react'
import useUserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import {ModalWrap,ModalLayOutBox,ModalCloseDiv, CloseBtn,ModalContent, ModalBtonBox } from '../styled/modal'

const Modal = ({setIsOpen}) => {
  const { currentUser, removeUser } = useUserStore();
  const navigate = useNavigate()
 
  const onRemove = async (id) => {
    try {
      await removeUser(id);
      alert('회원탈퇴가 되었습니다.');
      navigate('/');
    } catch (error) {
      alert('정보 수정 중 오류가 발생했습니다.');
      console.error('업데이트 실패:', error);
    }
  };

  return (
    <>
        <ModalWrap >
        <ModalLayOutBox>
            <ModalCloseDiv >
              <CloseBtn onClick={() =>setIsOpen(false)} > x </CloseBtn>
              </ModalCloseDiv>
            <ModalContent >정말로 탈퇴하시겠습니까</ModalContent>
            <ModalBtonBox> 
                <button onClick={() => onRemove(currentUser.id)}>예</button>
            </ModalBtonBox>
        </ModalLayOutBox>
    </ModalWrap>
    </>

  )
}

export default Modal