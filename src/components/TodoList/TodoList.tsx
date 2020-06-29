import React, { useMemo } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { Todo } from '../../domains/todo/type';

type Props = {
  todos: Todo[];
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  listType: 'completed' | 'uncompleted';
};

export const TodoList: React.FC<Props> = ({ todos, checkTodo, deleteTodo, listType }) => {
  // 指定された todo のcompletedを反転する関数
  // カリー化（関数を返す関数）を使用して，idごとに処理をする
  const handleTodoChecked = (id: string) => () => {
    checkTodo(id);
  };

  // todoのゴミ箱ボタンがクリックされたときに実行される関数
  // todosの中から引数のidで指定されたtodoを1つ削除する
  const handleDeleteClicked = (id: string) => () => {
    deleteTodo(id);
  };

  const headerText = useMemo(() => {
    switch (listType) {
      case 'completed':
        return '完了タスク';
      case 'uncompleted':
        return '未完了タスク';
    }
  }, [listType]);

  const completed = listType === 'completed';

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" component="h2">
          {headerText}
        </Typography>
      </Box>

      <List>
        {todos.map((todo) =>
          todo.completed === completed ? (
            <ListItem button onClick={handleTodoChecked(todo.id)}>
              <ListItemIcon>
                <Checkbox checked={todo.completed} />
              </ListItemIcon>
              <ListItemText>{todo.content}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={handleDeleteClicked(todo.id)}>
                  <DeleteOutline />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ) : (
            <></>
          )
        )}
      </List>
    </>
  );
};
