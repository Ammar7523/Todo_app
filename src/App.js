import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import List from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todolist, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  //when the app loads we need to listen database and fetch new todos
  useEffect(() => {
    db.collection('Todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodoList(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('Todos').add({
      todo: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('');
  }
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <form>
        <FormControl>
          <InputLabel >Write a Todo</InputLabel>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button disabled={value ? false : true} type="submit" variant="outlined" color="primary" onClick={addTodo}>Primary</Button>
        </FormControl>

      </form>


      <ul style={{ listStyle: 'none' }}>
        {todolist.map((todo) => {
          return <List todo={todo} />
        })}
      </ul>
    </div>
  );
}

export default App;
