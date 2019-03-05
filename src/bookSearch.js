import React, { Component } from "react";

class BookSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      results: []
    };
  }

  searchChange(search) {
    this.setState({
      search: search
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getSearch(this.state.search);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.search
    }`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.props.getData(data); // pushes results back to app

        this.setState({
          results: data
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div>
        <form className="searchBar_form" onSubmit={e => this.handleSubmit(e)}>
          <label>Search: </label>
          <input
            type="text"
            name="search"
            id="searchBar"
            placeholder="Search Google Books"
            value={this.state.search}
            onChange={e => this.searchChange(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default BookSearch;
