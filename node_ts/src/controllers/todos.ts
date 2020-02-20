import { RequestHandler } from 'express';
import { Todo } from '../models/todos';

const TodoData: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text:string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TodoData.push(newTodo);

  res.status(201).json({message: "todo created", id: newTodo.id});
};


export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({todos: TodoData});
}

export const updateTodo: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const newText =(req.body as { text: string}).text;
  const updatedData = TodoData.map(todo => {
    if (todo.id !== id) return todo;
    return new Todo(id, newText);
  });
  res.status(200).json(updatedData.find(todo => todo.id === id));
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const updatedData = TodoData.filter(todo => todo.id !== id);
  res.status(200).json(updatedData);
}