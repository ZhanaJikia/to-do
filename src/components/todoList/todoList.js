import React from 'react';
import TodoItem from '../todoItem/todoItem';
import './todoList.css';


const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
  
  const { id, ...itemProps } = item;

  return (
    <li key={ id } className="list-group-item">
     <TodoItem { ...itemProps } />
    </li>
  )
  });

  return (
    <ul className="list-group todoList">
      { elements }
    </ul>
  );
};

export default TodoList;