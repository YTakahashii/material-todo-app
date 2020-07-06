import { Todo } from './type';
import { useState } from 'react';
import { uuid } from 'uuidv4';

// Todoの処理に関するロジック
export function useTodos(initial: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(initial);

  const addTodo = (content: string) => {
    const todo: Todo = {
      id: uuid(),
      content: content,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const checkTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const deleteTodo = (id: string) => {
    const deleteIndex = todos.findIndex((todo) => todo.id === id);
    setTodos((prevTodos) => [...prevTodos.slice(0, deleteIndex), ...prevTodos.slice(deleteIndex + 1)]);

    // [0, 1, 2, 3, 4, 5]
    // deleteIndex = 3
    // [0, 1, 2, 3, 4, 5].slice(0, 3) -> [0, 1, 2]
    // [0, 1, 2, 3, 4, 5].slice(4) -> [4, 5]
    // [...[0, 1, 2], ...[4, 5]] -> [0, 1, 2, 4, 5]
  };

  return {
    todos,
    addTodo,
    checkTodo,
    deleteTodo,
  };
}
