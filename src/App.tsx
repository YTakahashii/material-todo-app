import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './domains/todo/useTodos';

const App: React.FC = () => {
  const { todos, addTodo, checkTodo, deleteTodo } = useTodos([]);

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
