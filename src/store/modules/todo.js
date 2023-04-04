const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: true,
    },
    { id: 2, text: '프로젝트 잘 마무리', done: false },
  ],
};
// 액션 타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return console.log('DONE 호출');
    default:
      return state;
  }
}
