import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/appHeader';
import TodoList from './components/todoList';
import SearchPanel from './components/searchPanel';

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
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'));