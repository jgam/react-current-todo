import React, { useState }from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'learn the basics of react',
      checked: false,
    },
    {
      id:2,
      text: 'component styling done',
      checked: true,
    },
    {
      id:3,
      text: 'lets create scheduler management app',
      checked: true,
    },
  ])
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
