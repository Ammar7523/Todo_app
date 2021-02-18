import React, { useState } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Avatar, Button } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Todo = ({ todo }) => {
    const classes = useStyles();
    const [opens, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        db.collection('Todos').doc(todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }

    return (
        <>
            <Modal open={opens} onClose={() => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>I m a Modal</h1>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                    <Button variant="outlined" color="secondary" onClick={updateTodo}>Close</Button>
                </div>
            </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary={todo.todo} />
                    <Button onClick={() => db.collection('Todos').doc(todo.id).delete()}><FaTimes /></Button>
                    <Button onClick={() => setOpen(true)}><FaEdit /></Button>
                </ListItem>

            </List>
        </>
    )
}

export default Todo;

