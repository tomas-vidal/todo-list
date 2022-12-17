import "./App.css";
import TodoList from "./components/TodoList.js";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [writingText, setWritingText] = useState("");

  const [newTodo, setNewTodo] = useState({
    text: writingText,
    isDone: false,
  });

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        ...newTodo,
      },
    ]);
    setWritingText("");
  };

  const handleChange = (e) => {
    setWritingText(e);
    setNewTodo({ ...newTodo, text: writingText });
  };

  return (
    <div className="App">
      <div>
        <h1>TODO LIST</h1>
        <form className="input-form" onSubmit={(e) => addTodo(e)}>
          <input
            className="input-form-todo"
            type="text"
            value={writingText}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          <button type="submit">
            <span>+</span>
          </button>
        </form>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
