import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCardOutline } from 'react-icons/io5';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { NonebackgroudBtn, HeaderWrap, CommonBtn, CommonBtn2 } from '../../styled/common/common';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserStoreV2 } from '../../store/UserStoreV2';
import { userService } from '../../api/user';

const UserPage = () => {
  const navigator = useNavigate();
  const { currentUser, JWTLogout, JWTLogin } = UserStoreV2();

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem('token');
      await JWTLogout();
      await navigator('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <>
      <div>
        <HeaderWrap>
          <HeadTitle>
            {currentUser?.userName} 님
            <NonebackgroudBtn onClick={() => navigator('/userEdit')}>
              <IoIosArrowForward></IoIosArrowForward>
            </NonebackgroudBtn>
          </HeadTitle>
        </HeaderWrap>

        {/* 주문 정보 */}
        <div>
          <OrderTable>
            <colgroup>
              <col width={'5%'} />
              <col width={'80%'} />
              <col width={'10%'} />
            </colgroup>
            <thead></thead>
            <tbody>
              <tr>
                <th colSpan={3}>
                  <p>주문정보</p>
                </th>
              </tr>

              <tr>
                <td>
                  <FaRegCalendarCheck></FaRegCalendarCheck>
                </td>
                <td>예약내역</td>
                <td>
                  <button onClick={() => navigator(`/order/${currentUser.code}`, { state: currentUser })}>
                    <IoIosArrowForward></IoIosArrowForward>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <IoCardOutline></IoCardOutline>
                </td>
                <td>결제내역</td>
                <td>
                  <NonebackgroudBtn>
                    <IoIosArrowForward></IoIosArrowForward>
                  </NonebackgroudBtn>
                </td>
              </tr>
              <tr>
                <td>
                  <IoCardOutline></IoCardOutline>
                </td>
                <td>준비중</td>
                <td>
                  <NonebackgroudBtn>
                    <IoIosArrowForward></IoIosArrowForward>
                  </NonebackgroudBtn>
                </td>
              </tr>
            </tbody>
          </OrderTable>
        </div>
        <div>
          <CommonBtn2 onClick={handleLogout}>로그아웃</CommonBtn2>
          <CommonBtn to="/">홈으로</CommonBtn>
        </div>
      </div>
    </>
  );
};

export default UserPage;

const OrderTable = styled.table`
  width: 100%;
  margin: 20px 10px;
  border-collapse: collapse;
  text-align: left;

  p {
    margin: ${({ theme }) => theme.spacing[6]};
    font-size: 18px;
    font-weight: bold;
  }

  td {
    padding: 8px;
  }

  td:last-child {
    text-align: right;
  }

  button {
    background: none;
  }
`;
const HeadTitle = styled.div`
  margin-left: 10px;

  font-size: 24px;
  font-weight: bold;
`;
