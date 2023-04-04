import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import TestRedux from './components/TestRedux';
import TodoList from './components/TodoList';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<TestRedux />} />
      </Routes> */}
    </div>
  );
}

export default App;
