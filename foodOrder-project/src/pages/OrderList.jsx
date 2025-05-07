import React from 'react';
import useOrderStore from '../store/OrderStore';
import { Wrap } from '../styled/common';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import { NonebackgroudBtn } from '../styled/common';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from 'react-icons/fa';

const OrderList = () => {
  const { loading, getOrderId, orderList, getOrderList } = useOrderStore();
  const location = useLocation();
  const currentUser = location.state;
  const navigator = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      getOrderId(currentUser.id);

    };
    fetchMenu();
  }, []);

  return (
    <Wrap>
      <Header currentUser={currentUser}></Header>
      <OrderTitle>예약목록</OrderTitle>
      {loading ? (
        <Wrapdiv>
          <BounceLoader size={100} color=" #ff5100" />
          <p>불러오는 중...</p>
        </Wrapdiv>
      ) : (
        <>
          {orderList.length === 0 ? (
            <p>주문 내역이 없습니다.</p>
          ) : (
            <OrderTable>
              <col style={{ width: '10%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '15%' }} />
              <OrderThead>
                <tr>
                  <OrderTh>번호</OrderTh>
                  <OrderTh>예약날짜</OrderTh>
                  <OrderTh>예약내역</OrderTh>
                  <OrderTh>총금액</OrderTh>
                  <OrderTh>수정/삭제</OrderTh>
                </tr>
              </OrderThead>
              <tbody>
                {orderList.map((order) => (
                  <OrderTr key={order.id}>
                    <td></td>
                    <td>{order.date}</td>
                    <td>
                      {order.sandwich}
                      set
                    </td>
                    <td>{order.totalPrice.toLocaleString()}</td>
                    <td>
                    <Btn>
                      <FaEdit></FaEdit>
                      </Btn>
                      <Btn>
                        <FaRegTrashAlt color="#ff5100"></FaRegTrashAlt>
                      </Btn>

                    </td>
                  </OrderTr>
                ))}
              </tbody>
            </OrderTable>
          )}
        </>
      )}
    </Wrap>
  );
};

export default OrderList;

const Wrapdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`;

const Btn =styled.button`
background: none;
padding: 5px;
`
export const OrderTable = styled.table`
width: calc(100% - 20px);
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;

  word-break: break-all;
  height: auto;
`;

export const OrderThead = styled.thead`
  background:  #ff5100;
  font-weight: bold;
  color: white;
  
`;

export const OrderTh =styled.th`
padding: 8px;
font-size: 16px;
`


export const OrderTr = styled.tr`
  &:nth-child(odd) {
    background-color: none;
  }
  &:nth-child(even) {
   
    background-color:#fff7eb ;
  }
`;



const OrderTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 20px;
`;