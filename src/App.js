import { useState } from "react";
import "reset.css";
import "App.css";
import Layout from "components/Layout";
import Input from "components/Input";
import TodoList from "components/TodoList";

function App() {
  let getData = () =>
    JSON.parse(localStorage.getItem("todos")) || [
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
    ];

  let [todos, setTodos] = useState(getData);
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <Layout>
      <Input todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
    </Layout>
  );
}

export default App;
