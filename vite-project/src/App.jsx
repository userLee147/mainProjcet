import './App.css'
import Heading from './components/Heading'
import Hello from './components/Hello'
import JavaScript from './components/JavaScript'
import Products from './components/Products'
import Style from './components/Style'
import Videos from './components/Videos'
import Greeting from './components/Greeting'
import LifecycleTest from './components/classComponent/LifecycleTest'
import Comment from './components/classComponent/Comment'
import CommentList from './components/classComponent/CommentList'
import React, { useState } from 'react';
import UseStateTest from './components/useState/UseStateTest'
import SignUp from './components/useState/SignUp'
import LandPage from './components/useState/LandPage'
import UserRefTest from './components/useRef/UserRefTest'
import UseRefScroll from './components/useRef/UseRefScroll'
import Todolist from './components/todoList/Todolist'
import UseMemoTest from './components/useMemo/UseMemoTest'
import UseCallbackTest from './components/useCallback/UseCallbackTest'
import UseEffectTest from './components/useEffect/UseEffectTest'
import EffectView from './components/useEffect/EffectView'
import BlackOrWhite from './components/useContext/BlackOrWhite'
import ToggleBox from './components/customHook/ToggleBox'
import Header from './components/useContext/Header'
import { UserProvider } from './components/useContext/UserContext'
import MyHome from './components/customHook/MyHome'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Home from './pages/Home'


const videoDate = [{
  sumbnail: "https://i.ytimg.com/an_webp/hhQ7hRKD8U4/mqdefault_6s.webp?du=3000&sqp=CJaxh8AG&rs=AOn4CLAFspa7etJvBd5dJeoZdgQJfBMqRQ",
  title: "흥달쌤",
  logo: "https://yt3.googleusercontent.com/ijjNX25bL-eN4lilVswfX6oBhICXEEaVVv2kECu4u09t-an98ybstZ87p1Puri-Q6eVJn0xd=s160-c-k-c0x00ffffff-no-rj",
  views: '8.3만',
  date: '2시간'
},
{
  sumbnail: "https://i.ytimg.com/an_webp/Ob4CW59AhTU/mqdefault_6s.webp?du=3000&sqp=CJ2gh8AG&rs=AOn4CLCxYQbMRE7WO_HcA7j9lEElWmqpOA",
  title: "빵빵이",
  logo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
  channelName: "빵빵이의 일상",
  views: '8.3만',
  date: '2시간'
},
{
  sumbnail: "https://i.ytimg.com/an_webp/Ob4CW59AhTU/mqdefault_6s.webp?du=3000&sqp=CJ2gh8AG&rs=AOn4CLCxYQbMRE7WO_HcA7j9lEElWmqpOA",
  title: "빵빵이",
  logo: "https://yt3.googleusercontent.com/wYRkjS6E0mMZ-np2jNwjVaCNzQMpxs1VkdQ_p25oe0aaSj0awd7f9xRUcrwI6rVOQE7kjZQ6l4A=s160-c-k-c0x00ffffff-no-rj",
  channelName: "빵빵이의 일상",
  views: '8.3만',
  date: '2시간'
},
]



function App() {
  // const [isButton , setIsButton] = useState(true);
  // const toggleButton = () =>{
  //   setIsButton(!isButton);
  // }

  return (
    <>
      {/*
            <Heading type = "h2" />
        <Heading />
        <Heading>안녕</Heading>
        <Hello />
        <Greeting name="Alice" age={30} location="New York"/>
        <Videos videos ={videoDate}></Videos> */
        /* <JavaScript /> <Style /> <Products />*/
      }

      {/* {isButton && <LifecycleTest/>
      <button onClick={toggleButton}>count없애기</button> */
        /* <Comment message = {"안녕하세요"}/>  */
        /* <CommentList/> */
        /* <UseStateTest/> */
        /* <SignUp></SignUp> */
        /* <LandPage/> */
      }

      {/* <UserRefTest/> */}
      {/* <UseRefScroll></UseRefScroll> */}
      {/* <Todolist></Todolist> */}

      {/* <UseMemoTest></UseMemoTest> */}
      {/* <UseCallbackTest></UseCallbackTest> */}
      {/* <EffectView></EffectView> */}
      {/* <BlackOrWhite></BlackOrWhite> */}
      <MyHome></MyHome>
      {/* <ToggleBox></ToggleBox> */}
      {/* <UserProvider>
        <Header></Header>
      </UserProvider> */}
      {/* <BrowserRouter>
          <nav style={{marginBotton: 20}}>
            {/*Link : a태그와 동일한 역할을 하지만 react-router-dom을 활용해 spa방식으로 자연스럽게 화면 전환  }
            <Link to='/'style={{marginRight: 12}}>홈</Link>
            <Link to='/about' style={{marginRight: 12}}>소개</Link>
            <Link to='/profile/최지원' style={{marginRight: 12}}>프로필</Link>
          </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile/:username' element={<Profile />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> */}

    </>


  )
}

export default App
