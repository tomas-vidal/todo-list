import React from "react";
import "../App.css";
import { RxCross2 } from "react-icons/rx";

function TodoList({ todos, select, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="input-check">
            <div className="input-left">
              <input
                type="checkbox"
                id="scales"
                name="todo-item"
                onChange={() => select(todo.id)}
                defaultChecked={todo.isDone}
              />
              <a className={todo.isDone ? "todo-name-isDone" : "todo-name"}>
                {todo.text}
              </a>
            </div>
            <RxCross2
              className="todo-icon-delete"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
