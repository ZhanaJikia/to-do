import React, { Component} from 'react';
import "../addItemForm/addItemForm.css";

export default class AddItemForm extends Component {

  state = {
    label: '',
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label)
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="addItemForm  d-flex"
            onSubmit={this.onSubmit}>
        <input 
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What Needs to be Done..."
          value={this.state.label} /> 
        <button 
          className="btn btn-outline-secondary">
            Add
        </button>
      </form>
    )
  }
}