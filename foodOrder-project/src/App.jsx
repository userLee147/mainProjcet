import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Login from './pages/Login'
import UserRegistration from './pages/UserRegistration'
import SearchMenu from './pages/SearchMenu'
import DetailMenu from './pages/DetailMenu'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user" element={<UserRegistration />}></Route>
          <Route path="/search" element={<SearchMenu />}></Route>
          <Route path="/detail/:id" element={<DetailMenu />}></Route>
          {/* <Route path="/Menu" element={<MenuList />} />
          <Route path="/MenuOrder" element={<MenuOrder />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
