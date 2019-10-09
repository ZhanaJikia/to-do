import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../appHeader';
import TodoList from '../todoList';
import SearchPanel from '../searchPanel';
import ItemStatusFilter from '../itemStatusFilter';


const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1 },
    {label: 'Create App', important: true, id: 2 },
    {label: 'Have a lunch', important: false , id: 3 }
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel />
      <TodoList todos={ todoData }/>
    </div>
  );
};

export default App;



