import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">홈 페이지 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
