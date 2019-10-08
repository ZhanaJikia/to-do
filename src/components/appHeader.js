import React from 'react';
import './appHeader.css';

const Appheader = ({toDo, done}) => {
  return (
    <div className="appHeader d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
}

export default Appheader;