import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: {text: string}) => {
    setTodos((prevTodos => [...prevTodos, {...todo, id: Math.random()}]))
  };

  const deleteTodo = (todoId: number) => {
    setTodos( prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
