import React, { Component } from 'react';
import './todoItem.css'

export default class TodoItem  extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done } = this.props;

    let classNames = "todoItem";
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames } >
        <span
          className='todoItem-label'
          onClick={ onToggleDone } >
            { label }
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ onToggleImportant } >
          <i className="fa fa-exclamation" />
        </button>

        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right" 
          onClick={ onDeleted } >
          <i className="fa fa-trash-o"/>
        </button>
      </span>
    )
  }
}
