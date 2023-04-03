import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
