import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";
import { S } from "./InputStyle";

const Input = () => {
  const dispatch = useDispatch();

  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");

  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!title) return window.alert("제목을 입력해주세요");

    dispatch(addTodo(title, contents));

    setTitle("");
    setContents("");
  };

  useEffect(() => {
    return () => {
      setTitle("");
      setContents("");
    };
  }, []);

  return (
    <S.InputForm onSubmit={onSubmitHandler}>
      <S.InputLabel>
        제목
        <S.InputInput
          type="text"
          value={title}
          onChange={e => onChangeHandler(e, setTitle)}
        ></S.InputInput>
      </S.InputLabel>

      <S.InputLabel>
        내용
        <S.InputInput
          type="text"
          value={contents}
          onChange={e => onChangeHandler(e, setContents)}
        ></S.InputInput>
      </S.InputLabel>

      <S.InputButton>추가하기</S.InputButton>
    </S.InputForm>
  );
};

export default Input;
