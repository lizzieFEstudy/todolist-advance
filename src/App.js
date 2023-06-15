import { useState } from "react";
import "reset.css";
import "App.css";
import Layout from "components/Layout";
import { ListItem, AddForm } from "components/Todo";

function App() {
  let getData = () =>
    JSON.parse(localStorage.getItem("todo")) || [
      {
        id: 0,
        title: "리액트 공부하기✏️",
        body: "리액트를 공부해봅시다.",
        isDone: false
      },
      {
        id: 1,
        title: "폰 게임 30분만 하기🎲",
        body: "하루 30분 초과 금지",
        isDone: true
      }
    ];

  let [todo, setTodo] = useState(getData);
  localStorage.setItem("todo", JSON.stringify(todo));

  return (
    <Layout>
      <AddForm todo={todo} setTodo={setTodo} />

      <section>
        <h2>Working.. 🔥</h2>
        <ul className="todo-list">
          {todo
            .filter(item => item.isDone == false)
            .map(item => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })}
        </ul>
      </section>

      <section>
        <h2>Done..! 🎉</h2>
        <ul className="todo-list done">
          {todo
            .filter(item => item.isDone == true)
            .map(item => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })}
        </ul>
      </section>
    </Layout>
  );
}

export default App;
