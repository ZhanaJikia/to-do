import React, { Component } from 'react';
import AppHeader from '../appHeader';
import TodoList from '../todoList';
import SearchPanel from '../searchPanel';
import ItemStatusFilter from '../itemStatusFilter';
import AddItemForm from '../addItemForm';
import "./app.css";

export default class App extends Component {
  maxId =  100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++ 
    };
  }

  deleteItem = (id) => {
    this.setState( ({ todoData }) => {
      const index = todoData.findIndex( (el) => el.id === id);

      const newTodoData = [ 
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1) 
      ];
      
      return {
        todoData: newTodoData
      }
    })
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState( ({todoData}) => {
      const newItems = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newItems
      };
    });
  };

  toggleProperty(arr, id, name) {
      const index = arr.findIndex( (el) => el.id === id);

      const oldItem = arr[index];
      const newItem = {
        ...oldItem,
        [name]: !oldItem[name]
      };

      return [ 
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index + 1) 
      ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });  
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });  
  };

  render() {
    const { todoData } = this.state;
    const doneItemsCount = todoData
                        .filter((el) => el.done).length;

    const toDoItemsCount = todoData.length - doneItemsCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoItemsCount} done={doneItemsCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          todos={todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <AddItemForm addItem={this.addItem} />
      </div>
    );   
  }
};



