import React, { useEffect, useState } from 'react';
import useUserStore from '../store/UserStroe';

const Login = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const { users, getUsers, getLoginUsers } = useUserStore();



  const handleLogin = (e) => {
    e.preventDefault();
    getLoginUsers(id, pwd)
  };

  useEffect(() => {
    console.log("유저 상태 변화:", users);
  },[users]);

  
  return (
    
    <div className="login-container">
      <form onSubmit={() => handleLogin(id, pwd)}>
        <h1>로그인 화면</h1>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />

        <label htmlFor="pwd">패스워드</label>
        <input type="password" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
