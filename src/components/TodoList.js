import React from "react";
import "../App.css";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="input-check">
            <input type="checkbox" id="scales" name="todo-item" />
            <a classname="todo-name">{todo.text}</a>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
