import React, { Component } from 'react';
import AppHeader from '../appHeader';
import TodoList from '../todoList';
import SearchPanel from '../searchPanel';
import ItemStatusFilter from '../itemStatusFilter';


export default class App extends Component {

  state = {
    todoData : [
      {label: 'Drink Coffee', important: false, id: 1 },
      {label: 'Create App', important: true, id: 2 },
      {label: 'Have a lunch', important: false , id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState( ({ todoData }) => {
      const index = todoData.findIndex( (el) => el.id === id);
      
      const newTodoData = [ 
        ...todoData.slice( 0, index),
        ...todoData.slice( index + 1) 
      ];

      return {
        todoData: newTodoData
      }
    })
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }/>
      </div>
    );   
  }
};



