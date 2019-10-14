import React from 'react';
import TodoItem from '../todoItem/todoItem';
import './todoList.css';

const TodoList = ({ 
  todos, onDeleted,
  onToggleImportant,
  onToggleDone
 }) => {
  const elements = todos.map((item) => {
  
  const { id, ...itemProps } = item;

  return (
    <li key={ id } className="list-group-item">
     <TodoItem
      { ...itemProps }
      onDeleted={ () => { onDeleted(id) }}
      onToggleImportant={ () => { onToggleImportant(id)}}
      onToggleDone={ () => {onToggleDone(id)}} />
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