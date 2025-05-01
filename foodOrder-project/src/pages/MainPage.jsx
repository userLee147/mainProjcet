import React from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useUserStore from '../store/UserStore';

const MainPage = () => {
  const { currentUser, login, logout } = useUserStore();
  console.log(currentUser)
  return (
    <div>
      <header>
        <p>테이블링</p>
     
        <LoginBtn to="/login">
          로그인안되있으면<IoMdLogIn></IoMdLogIn>
        </LoginBtn>
        <button>
          로그인되면<FaRegUserCircle></FaRegUserCircle>
        </button>
      </header>

      <section>
        <p>오늘은 뭐 먹지? 맛집 검색은 테이블링</p>
        <div>
          <IoSearch></IoSearch>
          <input type="text" placeholder="매장을 검색해보세요" />
        </div>
      </section>

      <section>
        {/* 여기는 이미지 반복 */}
        <div>이미지1</div>
      </section>
      <nav>
        {/* 여기는 버튼 컴포넌트 반복..? */}
        <button></button>
      </nav>
      <footer>

      </footer>
    </div>
  );
};

export default MainPage;

const LoginBtn = styled(Link)`
background-color: none;
`
