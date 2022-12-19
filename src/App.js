import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Do exercise", "Sleep well"]);
  const deleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  };
  return (
    <>
      <ToastContainer />
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
