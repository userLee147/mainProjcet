import './App.css';
import theme from './styled/common/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Member/Login';

import SearchMenu from './pages/SearchMenu';
import DetailMenu from './pages/DetailMenu';
import MenuList from './pages/MenuList';
import MenuOrder from './pages/MenuOrder';
import UserPage from './pages/Member/UserPage';
import UserEdit from './pages/Member/UserEdit';
// import OrderList from './pages/OrderList';
import NotFound from './pages/NotFound';
import KakaoRedirect from './components/KakaoRedirect';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import SNSLogin from './pages/Member/SNSLogin';
import SignUp from './pages/Member/SiginUP';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/snsLogin" element={<SNSLogin />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />

              <Route path="/user" element={<UserPage />}></Route>
              <Route path="/userEdit" element={<UserEdit />}></Route>


              <Route path="/search" element={<SearchMenu />}></Route>
              <Route path="/detail" element={<DetailMenu />}></Route>
              <Route path="/menu" element={<MenuList />} />
              <Route path="/order" element={<MenuOrder />} />
              {/* <Route path="/order/:id" element={<OrderList />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
