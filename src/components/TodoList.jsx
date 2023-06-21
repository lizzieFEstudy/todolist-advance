import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "redux/modules/todos";

const TodoList = ({ todos, listIsDone }) => {
  const dispatch = useDispatch();

  const clickDoneButtonHandler = id => {
    const newTodos = todos.map(item => {
      if (item.id == id) {
        return {
          ...item,
          isDone: !item.isDone
        };
      } else {
        return item;
      }
    });
    dispatch(updateTodo(newTodos));
  };

  const clickRemoveButtonHandler = id => {
    const deletedTodos = todos.filter(item => item.id !== id);
    dispatch(deleteTodo(deletedTodos));
  };

  return (
    <section>
      <h2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
      <ul className={listIsDone ? "todos-list done" : "todos-list"}>
        {todos
          .filter(item => item.isDone == listIsDone)
          .map(item => {
            return (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <p>{item.contents}</p>
                <div className="btn-wrap">
                  <button
                    className="btn-del"
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="btn-done"
                    onClick={() => clickDoneButtonHandler(item.id)}
                  >
                    {item.isDone == false ? "완료" : "취소"}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default TodoList;
