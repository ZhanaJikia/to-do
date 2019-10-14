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
      this.createTodoItem('Create React App'),
      this.createTodoItem('Have a lunch')
    ],
    typed: '',
    filter: ''
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

  onSearchChange = (typed) => {
    this.setState({ typed });
  }

  searchItem = (items, typed) => {
    if(typed.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
            .toLowerCase()
            .indexOf(typed.toLowerCase()) > -1;
    });
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  filterItems = (items, filter) => {
    switch(filter) {
      case('all'):
        return items;
      case('active'):
        return items.filter((item) => !item.done);
      case('done'):
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, typed, filter } = this.state;
    const visibleItems = this.filterItems (
      this.searchItem(todoData, typed), filter);

    const doneItemsCount = todoData
                        .filter((el) => el.done).length;

    const toDoItemsCount = todoData.length - doneItemsCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoItemsCount} done={doneItemsCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange} />
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
        
        <TodoList 
          todos={visibleItems}
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <AddItemForm addItem={this.addItem} />
      </div>
    );   
  }
};



