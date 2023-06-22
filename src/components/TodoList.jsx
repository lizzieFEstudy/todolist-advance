import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "redux/modules/todos";
import { S } from "./TodoListStyle";

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
      <S.TodoListH2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</S.TodoListH2>
      <S.TodoListList>
        {todos
          .filter(item => item.isDone == listIsDone)
          .map(item => {
            return (
              <S.TodoListItem $IsDone={item.isDone} key={item.id}>
                <S.TodoListStrong>{item.title}</S.TodoListStrong>
                <S.TodoListParagraph>{item.contents}</S.TodoListParagraph>
                <S.TodoListBox>
                  <S.TodoListButton
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제하기
                  </S.TodoListButton>
                  <S.TodoListButton
                    $IsDone={item.isDone}
                    onClick={() => clickDoneButtonHandler(item.id)}
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
