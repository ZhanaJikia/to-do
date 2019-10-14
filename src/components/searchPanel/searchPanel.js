import React, { Component } from 'react';
import './searchPanel.css';

export default class SearchPanel extends Component {
state = {
  typed: ''
};

onSearchChange = (event) => {
  const typed = event.target.value;
  this.setState({ typed });
  this.props.onSearchChange(typed);
}

  render() {
    return (
      <input type="text"
      className="form-control searchInput"
      placeholder="type to search..."
      value={this.state.typed}
      onChange={this.onSearchChange} />
    );
  };
};
