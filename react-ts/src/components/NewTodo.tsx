import React, { useRef } from "react";

interface NewTodoProps {
  addTodo: (todo: {text: string}) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = textInputRef.current!.value;
    props.addTodo({text: inputText});
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default NewTodo;
