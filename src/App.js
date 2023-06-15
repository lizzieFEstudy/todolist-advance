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
                        <li>
                            <strong>제목</strong>
                            <p>내용</p>
                            <div className="btn-wrap">
                                <button className="btn-del">삭제하기</button>
                                <button className="btn-done">완료</button>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Done..! 🎉</h2>
                    <ul className="todo-list done">
                        <li>
                            <strong>제목</strong>
                            <p>내용</p>
                            <div className="btn-wrap">
                                <button className="btn-del">삭제하기</button>
                                <button className="btn-done">완료</button>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
