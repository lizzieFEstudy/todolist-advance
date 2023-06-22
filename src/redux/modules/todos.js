import uuid from "react-uuid";

// Action Value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "todos/GET_TODO_BY_ID";

// Action Creator
export const addTodo = (title, contents) => {
  let newTodo = {
    id: uuid(),
    title,
    contents,
    isDone: false
  };

  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};
export const toggleStatusTodo = payload => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload
  };
};
export const getTodoById = payload => {
  return {
    type: GET_TODO_BY_ID,
    payload
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트 공부하기✏️",
      contents: "리액트를 공부해봅시다.",
      isDone: false
    },
    {
      id: uuid(),
      title: "폰 게임 30분만 하기🎲",
      contents: "하루 30분 초과 금지",
      isDone: true
    }
  ],
  todo: {}
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id == action.payload) {
            return {
              ...item,
              isDone: !item.isDone
            };
          } else {
            return item;
          }
        })
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find(item => item.id == action.payload)
      };
    default:
      return state;
  }
};

// export default reducer
export default todos;
