import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
// import TodoList from './components/todo/TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/post/HomePage';
import PostListPage from './pages/post/PostListPage';
import IconButton from './components/theme/IconButton';
import GlobalStyle from './GlobalStyle';
import ThemeBox from './components/theme/ThemeBox';
import { darkTheme, lightTheme } from './components/Themes';
import { ToastContainer } from 'react-toastify';
import { performToast } from './utils/PperformToast';
import LoaderDemo from './components/theme/LoaderDemo';
import SimpleForm from './components/theme/SimpleForm';
import TodoList from './components/theme/TodoList';

performToast({ mag: '요청에 성공하였습니다', type: 'success' });
performToast({ mag: '실패하였습니다', type: 'error' });
performToast({ mag: '요청이 올바르지 않습니다.', type: 'waring' });

// const AppContainer = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// min-height: 100vh;
// width: 100vw;
// padding: 24px;
// text-align: center;
// transition: all 0.3s;
// `
// const Section = styled.section`
// width: 100%;
// max-width: 800px;
// margin: 0 auto;
// padding: 18px;
// border-radius: 8px;
// margin-bottom: 20px;
//`

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleThem = () => setIsDark(!isDark);

  // const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      {/* <AppContainer>
      <Section>
        <h2>Zustand 전역 상태 관리</h2>
        <CounterDisplay></CounterDisplay>
        <CounterControls></CounterControls>
      </Section>
      <Section>
        <h2>Zustand TodoList</h2>
        <TodoList></TodoList>
      </Section>
    </AppContainer> */}

      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/posts' element={<PostListPage></PostListPage>}></Route>
    </Routes>
    </BrowserRouter> */}
      {/* <IconButton></IconButton> */}
      {/* 
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle></GlobalStyle>
        <ThemeBox onToggleTheme={toggleThem}></ThemeBox>
      </ThemeProvider> */}

      <ToastContainer></ToastContainer>

      <LoaderDemo></LoaderDemo>
      {/* <SimpleForm></SimpleForm> */}
      {/* <TodoList></TodoList> */}
    </>
  );
}

export default App;
