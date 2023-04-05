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
  buyList: ['닌텐도', '자동자'],
  todoListCount: 3,
};

let counts = initState.todoList.length;
initState['nextID'] = counts;

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
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          // map 함수는 반드시 return을 해줘야 배열로 반환시켜준다
          if (el.id === action.id) {
            return {
              ...el, //el에 있던 나머지 구문은 그대로 return시켜 주세요
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
