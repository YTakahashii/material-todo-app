import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Todo } from './domains/todo/type';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
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

  return (
    <Container>
      <Header />
      <InputForm addTodo={addTodo} />
      <TodoList listType="uncompleted" todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      <TodoList listType="completed" todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default App;
