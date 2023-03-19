import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';
import { green, red } from '@mui/material/colors';

export default function TodoItem({ todo, deleteTodo, editTodo }) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const dialogHandler = () => {
        setOpenDialog(!openDialog);
    };

  return (
    <>
    <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} todo={todo} />
    <Paper style={{ padding: '0.5em 0em' }}>
    <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="excluir" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
            </IconButton>
        }
        disablePadding
    >
        <ListItemButton role={undefined}  dense>
            <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple sx={{ color: green[800], '&.Mui-checked': { color: green[600], }, }} />
                <Checkbox edge="start" tabIndex={-1} disableRipple sx={{ color: red[800], '&.Mui-checked': { color: red[600], }, }} />
            </ListItemIcon>
            <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
        </ListItemButton>
    </ListItem>
    </Paper>
    </>
  );
}
