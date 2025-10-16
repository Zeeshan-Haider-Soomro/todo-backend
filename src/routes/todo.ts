// src/routes/todo.ts
import { Router } from 'express';
import { todos, Todo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// GET all todos
router.get('/', (req, res) => res.json(todos));

// POST create todo
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo: Todo = { id: uuidv4(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update todo
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  todo.title = title ?? todo.title;
  todo.completed = completed ?? todo.completed;
  res.json(todo);
});

// DELETE todo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });
  todos.splice(index, 1);
  res.json({ message: 'Deleted successfully' });
});

export default router;
