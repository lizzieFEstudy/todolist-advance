// Action Value
const ADD_TODO = "todos/ADD_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// Action Creator
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};
export const updateTodo = payload => {
  return {
    type: UPDATE_TODO,
    payload
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 0,
      title: "리액트 공부하기✏️",
      contents: "리액트를 공부해봅시다.",
      isDone: false
    },
    {
      id: 1,
      title: "폰 게임 30분만 하기🎲",
      contents: "하루 30분 초과 금지",
      isDone: true
    }
  ]
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case UPDATE_TODO:
      return {
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        todos: action.payload
      };
    default:
      return state;
  }
};

// export default reducer
export default todos;
