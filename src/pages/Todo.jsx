import React from "react";
import "pages/Todo.css";
import Input from "components/Input";
import TodoList from "components/TodoList";
import { useSelector } from "react-redux";

const Todo = () => {
  // let getData = () =>
  //   JSON.parse(localStorage.getItem("todos")) || [
  //     {
  //       id: 0,
  //       title: "리액트 공부하기✏️",
  //       contents: "리액트를 공부해봅시다.",
  //       isDone: false
  //     },
  //     {
  //       id: 1,
  //       title: "폰 게임 30분만 하기🎲",
  //       contents: "하루 30분 초과 금지",
  //       isDone: true
  //     }
  //   ];

  // let [todos, setTodos] = useState(getData);
  // localStorage.setItem("todos", JSON.stringify(todos));

  const todos = useSelector(state => {
    return state.todos.todos;
  });

  return (
    <>
      <Input todos={todos} />

      <TodoList todos={todos} listIsDone={false} />
      <TodoList todos={todos} listIsDone={true} />
    </>
  );
};

export default Todo;
