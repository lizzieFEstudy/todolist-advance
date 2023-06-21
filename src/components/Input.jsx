import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "redux/modules/todos";

const Input = () => {
  const dispatch = useDispatch();

  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");

  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    let newTodos = {
      id: uuid(),
      title,
      contents,
      isDone: false
    };

    dispatch(addTodo(newTodos));

    setTitle("");

    setContents("");
  };

  return (
    <form className="add-form-box" onSubmit={onSubmitHandler}>
      <label>
        제목
        <input
          className="form"
          type="text"
          value={title}
          onChange={e => onChangeHandler(e, setTitle)}
        ></input>
      </label>

      <label>
        내용
        <input
          className="form"
          type="text"
          value={contents}
          onChange={e => onChangeHandler(e, setContents)}
        ></input>
      </label>

      <button>추가하기</button>
    </form>
  );
};

export default Input;
