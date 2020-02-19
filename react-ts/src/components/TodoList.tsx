import React from "react";

interface TodoListProps {
  todos: { id: number; text: string }[];
  deleteTodo: (todoId: number) => void;
}

const TodoList: React.FC<TodoListProps> = props => (
  <ol>
    {props.todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <span><button onClick={props.deleteTodo.bind(null, todo.id)} >Delete this todo </button></span>
      </li>
    ))}
  </ol>
);

export default TodoList;
