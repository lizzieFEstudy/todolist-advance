import { useState } from 'react';

const ListItem = ({ item, todo, setTodo }) => {
    const toggleDoneButtonHandler = (id) => {
        let copyTodo = [...todo];
        let ind;
        copyTodo.forEach((todo, i) => {
            if (todo.id == id) ind = i;
        });
        copyTodo[ind].isDone = !copyTodo[ind].isDone;
        setTodo(copyTodo);
        localStorage.setItem('todo', JSON.stringify(copyTodo));
    };

    const clickRemoveButtonHandler = (id) => {
        let filteredTodo = todo.filter((item) => item.id !== id);
        setTodo(filteredTodo);
        localStorage.setItem('todo', JSON.stringify(filteredTodo));
    };

    return (
        <li>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
            <div className="btn-wrap">
                <button className="btn-del" onClick={() => clickRemoveButtonHandler(item.id)}>
                    삭제하기
                </button>
                <button className="btn-done" onClick={() => toggleDoneButtonHandler(item.id)}>
                    {item.isDone == false ? '완료' : '계속'}
                </button>
            </div>
        </li>
    );
};

const AddForm = ({ todo, setTodo }) => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const onChangeHandler = (e, setState) => {
        setState(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let newTodo = {
            id: todo[todo.length - 1].id + 1,
            title,
            body,
            isDone: false,
        };

        setTodo([...todo, newTodo]);

        setTitle('');

        setBody('');
    };

    return (
        <form className="add-form-box" onSubmit={onSubmitHandler}>
            <label>
                제목
                <input className="form" type="text" value={title} onChange={(e) => onChangeHandler(e, setTitle)}></input>
            </label>

            <label>
                내용
                <input className="form" type="text" value={body} onChange={(e) => onChangeHandler(e, setBody)}></input>
            </label>

            <button>추가하기</button>
        </form>
    );
};

export { ListItem, AddForm };
