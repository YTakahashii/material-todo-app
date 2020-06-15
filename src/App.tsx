import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
} from '@material-ui/core';
import { DeleteOutline, AddOutlined } from '@material-ui/icons';
import { Todo } from './domains/todo/type';
import { uuid } from 'uuidv4';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
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
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  console.log(JSON.stringify(todos, null, 2));
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Todo App
      </Typography>

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

      <Typography variant="h6" component="h2">
        未完了タスク
      </Typography>
      <List dense>
        <ListItem button onClick={() => setChecked(!checked)}>
          <ListItemIcon>
            <Checkbox checked={checked} />
          </ListItemIcon>
          <ListItemText>タスク1</ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Container>
  );
};

export default App;
