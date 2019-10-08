import React from 'react';
import TodoItem from './todoItem';


const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
  
  const { id, ...itemProps } = item;

  return (
    <li key={ id }>
     <TodoItem { ...itemProps } />
    </li>
  )
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;