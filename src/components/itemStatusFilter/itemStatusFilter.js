import React, { Component } from 'react';
import './itemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name : 'all', label: 'All'},
    {name : 'active', label: 'Active'},
    {name : 'done', label: 'Done'}
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const btns = this.buttons.map(({name, label}) => {
       
      const isActive = filter === name;
      const addClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button 
          type="button"
          className={`btn ${addClass}`}
          key={name}
          onClick={ () => onFilterChange(name) }>
        {label}
        </button>
      )
    });

    return (
      <div className="btn-group">
        {btns}
      </div>
    );    
  }
}

