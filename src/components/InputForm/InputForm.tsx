import React, { useState, useMemo } from 'react';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

// 呼び出し時に親から受け取る値を指定する
type Props = {
  addTodo: (content: string) => void;
};

export const InputForm: React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState('');
  const disabledAddButton = inputText.length === 0;

  // inputで値が変更されたときに呼ばれる関数
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputText(e.currentTarget.value); // 入力された値をinputTextにセット
  };

  const handleAddClicked = () => {
    props.addTodo(inputText);
    setInputText('');
  };

  return (
    <FormControl>
      <InputLabel>Todo</InputLabel>
      <Input
        value={inputText}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleAddClicked} disabled={disabledAddButton}>
              <AddOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
