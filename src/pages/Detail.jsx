import { S } from "components/DetailStyle";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "redux/modules/todos";

const Detail = () => {
  const paramId = useParams().id;
  const dispatch = useDispatch();
  dispatch(getTodoById(paramId));

  const { id, title, contents } = useSelector(state => {
    return state.todos.todo;
  });

  //   const { id, title, contents } = useSelector(({ todos }) => {
  //     return todos.todos.filter(item => item.id == paramId)[0];
  //   });

  const navigate = useNavigate();

  return (
    <S.DetailBox>
      <S.DetailSpan>id: {id}</S.DetailSpan>
      <S.DetailStrong>{title}</S.DetailStrong>
      <S.DetailParagraph>{contents}</S.DetailParagraph>
      <S.DetailButton
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </S.DetailButton>
    </S.DetailBox>
  );
};

export default Detail;
