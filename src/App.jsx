import React from 'react';
import Number from './Components/Number';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div>
      MOBX 
      <hr></hr>
      
      <Number />
      <hr />
      Addtodo
      <AddTodo />
      <TodoList />
     </div>
  );
}

export default App;
