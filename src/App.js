import "./App.css";
import TodoList from "./components/TodoList.js";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const [writingText, setWritingText] = useState("");

  const [newTodo, setNewTodo] = useState({
    text: writingText,
    isDone: false,
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (writingText == "") {
      return;
    } else {
      setTodos([
        ...todos,
        {
          ...newTodo,
          id: uuid(),
        },
      ]);
      setWritingText("");
    }
  };

  const handleChange = (e) => {
    setWritingText(e);
    setNewTodo({ ...newTodo, text: writingText });
  };

  const select = (todoID) => {
    console.log(todoID);
    setTodos(
      todos.map((item) => {
        if (item.id === todoID) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((item) => item.id !== todoID));
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
            <span className="submit-add">+</span>
          </button>
        </form>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          select={select}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
