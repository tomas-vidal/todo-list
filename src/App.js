import "./App.css";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
      <div>
        <h1>TODO LIST</h1>
        <form className="input-form">
          <input className="input-form-todo" type="text"></input>
          <button>
            <span>+</span>
          </button>
        </form>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
