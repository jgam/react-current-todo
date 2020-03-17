import React, { useState, useRef, useCallback }from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i<= 2500; i++){
    array.push({
      id:1,
      text: `todos ${i}`,
      checked:false,
    })
  }
  return array;
}

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

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,),
      );
    },[todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default React.memo(App);
