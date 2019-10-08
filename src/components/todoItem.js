import React from 'react';
import './todoItem.css'

const TodoItem = ( { label, important = false } ) => {
const style = {
  color: important ? 'tomato' : 'black'
};

  return <span className="todoItem" 
               style={ style }>
            { label }
          </span>;
};

export default TodoItem;