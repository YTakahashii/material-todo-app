import React, { useState } from 'react';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { Todo } from '../../domains/todo/type';
import { uuid } from 'uuidv4';

// 呼び出し時に親から受け取る値を指定する
type Props = {
  addTodo: (todo: Todo) => void;
};

export const InputForm: React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState('');

  // inputで値が変更されたときに呼ばれる関数
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputText(e.currentTarget.value); // 入力された値をinputTextにセット
  };

  const handleAddClicked = () => {
    // 入力された値をもとにtodoを作成
    const newTodo: Todo = {
      id: uuid(),
      content: inputText,
      completed: false,
    };
    // newTodoを todos に追加
    // setTodos((prevTodos) => [...prevTodos, newTodo]);
    props.addTodo(newTodo);
  };

  return (
    <FormControl>
      <InputLabel>Todo</InputLabel>
      <Input
        value={inputText}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleAddClicked}>
              <AddOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
