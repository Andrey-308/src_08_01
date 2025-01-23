import { observer } from 'mobx-react-lite';
import todoState from '../state/todo';
// import React, { useEffect } from 'react';

function TodoList() {
  // console.log('TodoList', todoState.todoList);
  // useEffect(() => {
  //   console.log('todoList', todoState.todoList);
  // }, [todoState.todoList]);

  return (
    <div>
      {todoState.todoList.map((todo) => (
        <div key={todo.div}>
          <p style={{color: todo.done ? 'green':'black'}}>{todo.title}</p>
          <button onClick={()=> todoState.remove(todo.id)}>Remove</button>
          <button onClick={()=> todoState.changeDone(todo.id)}>Change Done</button>
        </div>
      ))}
    </div>
  );
}

export default observer(TodoList);
