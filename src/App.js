import { useState } from 'react';
import './reset.css';
import './App.css';

function App() {
    let [todo, setTodo] = useState([
        { id: 0, title: '리액트 공부하기✏️', body: '리액트를 공부해봅시다.', isDone: false },
        { id: 1, title: '폰 게임 30분만 하기🎲', body: '하루 30분 초과 금지', isDone: true },
    ]);
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
        <div id="wrap">
            <header>
                <h1>My Todo List</h1>
            </header>

            <main id="main">
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

                <section>
                    <h2>Working.. 🔥</h2>
                    <ul className="todo-list">
                        {todo
                            .filter((item) => item.isDone == false)
                            .map((item) => {
                                return (
                                    <li key={item.id}>
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
                            })}
                    </ul>
                </section>

                <section>
                    <h2>Done..! 🎉</h2>
                    <ul className="todo-list done">
                        {todo
                            .filter((item) => item.isDone == true)
                            .map((item) => {
                                return (
                                    <li key={item.id}>
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
                            })}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
