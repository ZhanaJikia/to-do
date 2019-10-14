import React, { Component} from 'react';
import "../addItemForm/addItemForm.css";

export default class AddItemForm extends Component {
  render() {
    return (
      <div className="addItemForm">
        <button className="btn btn-outline-secondary"
        onClick={ () => this.props.addItem('Hi there...')}>
          Add Item...
        </button>
      </div>
    )
  }
}