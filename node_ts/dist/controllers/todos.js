"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("../models/todos");
const TodoData = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TodoData.push(newTodo);
    res.status(201).json({ message: "todo created", id: newTodo.id });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({ todos: TodoData });
};
exports.updateTodo = (req, res, next) => {
    const id = req.params.id;
    const newText = req.body.text;
    const updatedData = TodoData.map(todo => {
        if (todo.id !== id)
            return todo;
        return new todos_1.Todo(id, newText);
    });
    res.status(200).json(updatedData.find(todo => todo.id === id));
};
exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const updatedData = TodoData.filter(todo => todo.id !== id);
    res.status(200).json(updatedData);
};
