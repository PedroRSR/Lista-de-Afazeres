import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTodoDialog({open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler();
  }

  return (
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Editar tarefa"}
        </DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={ (e) => setEditedText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler} autoFocus>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}
