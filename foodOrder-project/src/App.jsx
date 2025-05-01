import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Login from './pages/Login'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          {/* <Route path="/user" element={<UserRegistration />}></Route> */}
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
