import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

const userInfo = [{
  name: "user01",
  age : 30,
  images : "./static/iconmonstr-user-circle-thin-240.png",
  isOnline : false,
},
{
  name: "user02",
  age : 20,
  images : "./static/iconmonstr-user-circle-thin-240.png",
  isOnline : true,
},
{
  name: "user03",
  age : 18,
  images : "./static/iconmonstr-user-circle-thin-240.png",
  isOnline : true,
}]

function App() {
  return (
    <>
      <ProfileCard userList = {userInfo} />
    </>
  )
}

export default App
