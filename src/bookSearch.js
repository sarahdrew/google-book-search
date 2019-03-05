import React, { Component } from "react";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      books: []
    };
  }
  handleSearchInput(event) {
    this.setState({
      searchQuery: event.target.val()
    });

    if (this.state.searchQuery === "") {
      alert("Please enter a search query");
    }
  }

  render() {
    return (
      <div className="search-form">
        <input
          type="text"
          className="search-text"
          placeholder="Search Google Books"
          value={this.state.searchQuery}
          onChange={this.handleSearchInput}
        />
        <button onClick={this.componentDidMount}>Search</button>
      </div>
    );
  }
}
export default BookSearch;
