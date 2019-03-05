import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="filter-input"
          placeholder="filter search"
        />
      </div>
    );
  }
}
export default Filter;
