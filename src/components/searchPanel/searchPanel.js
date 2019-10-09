import React from 'react';
import './searchPanel.css';

const SearchPanel = () => {
  return (
    <input type="text"
            className="form-control searchInput"
            placeholder="type to search" />
  );
}

export default SearchPanel;