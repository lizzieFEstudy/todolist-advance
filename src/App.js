import './reset.css';
import './App.css';

function App() {
    return (
        <div id="wrap">
            <header>
                <h1>My Todo List</h1>
            </header>

            <main id="main">
                <form className="add-form-box">
                    <label>
                        제목
                        <input className="form" type="text"></input>
                    </label>

                    <label>
                        내용
                        <input className="form" type="text"></input>
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
