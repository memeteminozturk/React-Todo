import React from "react";
import { useState} from "react";
import { toast } from "react-toastify";

function TodoForm({ setTodos, todos }) {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTodo = todoValue.trim();
    if (trimmedTodo === "") {
      toast.error("Please enter a todo!");
    } else if (todos.includes(trimmedTodo)) {
      toast.error("Todo already exists!");
    } else if (trimmedTodo.length > 30) {
      toast.error("Todo is too long!");
    } else if (trimmedTodo.length < 3) {
      toast.error("Todo is too short!");
    } else {
      setTodos([...todos, trimmedTodo]);
      setTodoValue("");
      toast.success("Todo Added!");
    }
  };
  const onChange = (e) => {
    setTodoValue(e.target.value);
  };
  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Your Todo"
        onChange={onChange}
        value={todoValue}
      />
      <button onClick={handleSubmit}>
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default TodoForm;
