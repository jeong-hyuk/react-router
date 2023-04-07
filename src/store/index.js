import { combineReducers } from 'redux';
import mbti from './modules/mbti';
import todo from './modules/todo';
import weightReducer from './modules/weight';
import user from './modules/user';

//store라는 코드를 관리해주는 코드

export default combineReducers({
  todo,
  weightReducer,
  mbti,
  user,
});
