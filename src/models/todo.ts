// src/models/todo.ts
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export let todos: Todo[] = [];
