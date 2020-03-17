import React, { useState, useRef, useCallback }from 'react';
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

  //id that is unique
  //using ref to put variable
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
