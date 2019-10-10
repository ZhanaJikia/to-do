import React, { Component } from 'react';
import './todoItem.css'

export default class TodoItem  extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick={ this.onLabelClick } >
            { label }
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ this.onMarkImportant } >
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
