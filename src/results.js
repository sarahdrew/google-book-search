import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      books: []
    };
  }

  render() {
    return (
      <div className="results">
        <p>Here are the results</p>
      </div>
    );
  }
}
export default Results;
