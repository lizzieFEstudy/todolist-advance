import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "redux/modules/todos";
import { S } from "./TodoListStyle";
import { Link } from "react-router-dom";

const TodoList = ({ listIsDone }) => {
  const todos = useSelector(state => {
    return state.todos.todos;
  });

  const dispatch = useDispatch();

  // const clickDoneButtonHandler = id => {
  //   dispatch(toggleStatusTodo(id));
  // };

  // const clickRemoveButtonHandler = id => {
  //   dispatch(deleteTodo(id));
  // };

  return (
    <section>
      <S.TodoListH2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</S.TodoListH2>
      <S.TodoListList>
        {todos
          .filter(item => item.isDone == listIsDone)
          .map(item => {
            return (
              <S.TodoListItem $IsDone={item.isDone} key={item.id}>
                <S.TodoListStrong>{item.title}</S.TodoListStrong>
                <S.TodoListParagraph>{item.contents}</S.TodoListParagraph>
                <Link to={`/detail/${item.id}`}>상세보기</Link>
                <S.TodoListBox>
                  <S.TodoListButton
                    onClick={() => dispatch(deleteTodo(item.id))}
                  >
                    삭제하기
                  </S.TodoListButton>
                  <S.TodoListButton
                    $IsDone={item.isDone}
                    onClick={() => dispatch(toggleStatusTodo(item.id))}
                  >
                    {item.isDone == false ? "완료" : "취소"}
                  </S.TodoListButton>
                </S.TodoListBox>
              </S.TodoListItem>
            );
          })}
      </S.TodoListList>
    </section>
  );
};

export default TodoList;
