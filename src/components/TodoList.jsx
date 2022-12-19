import React from "react";
import { toast } from "react-toastify";

function TodoList({ todos, deleteTodo, todo }) {
  return (
    <div className="todo-container">
      {todos.map((todo, i) => (
        <div key={i} className="todo-item">
          <input type="checkbox" className="checkbox"/><p className="aa">{todo}</p>
          <i
            className="fa fa-times-circle"
            onClick={() => {
              deleteTodo(todo);
              toast.error("Todo Deleted!");
            }}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
