import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import user from './store/modules/user';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;
function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
