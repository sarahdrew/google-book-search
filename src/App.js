import React, { Component } from "react";
import BookSearch from "./bookSearch";
import Results from "./results";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "Search Google Books",
      printType: "",
      bookType: "",
      searchLoading: false,
      error: null
    };
  }

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.searchTerm.value
    });

    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.searchTerm
    }`;

    if (this.state.printType && this.state.bookType) {
      const params = {
        api_key: "AIzaSyBoXs7DLtFxdVuTpVOhA4gR0RzY3Rt-0t0",
        q: this.state.searchTerm,
        filter: this.state.bookType,
        printType: this.state.printType
      };
      const queryString = Object.keys(params)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");

      let searchURL = `${searchURL}?${queryString}`;
    }

    if (this.state.printType) {
      const params = {
        api_key: "AIzaSyBoXs7DLtFxdVuTpVOhA4gR0RzY3Rt-0t0",
        q: this.state.searchTerm,
        printType: this.state.printType
      };
      const queryStr = Object.keys(params)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");

      let searchURL = `${searchURL}?${queryStr}`;
    }
    if (this.state.bookType) {
      const params = {
        api_key: "AIzaSyBoXs7DLtFxdVuTpVOhA4gR0RzY3Rt-0t0",
        q: this.state.searchTerm,
        filter: this.state.bookType
      };
      const queryStr = Object.keys(params)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");

      let searchURL = `${searchURL}?${queryStr}`;
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(searchURL, options)
      .then(res =>
        res.ok ? res.json() : Promise.reject("Something went wrong")
      )
      .then(books => {
        this.setState({
          books: books.items,
          searchLoading: false
        });
      })
      .catch(error => this.setState({ error, searchLoading: false }));

    console.log(this.state);
  };

  handleFilter = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    } else if (this.state.searchLoading) {
      return <div>Laoding..</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Search Google Books</h1>
        </header>
        <BookSearch
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          state={this.state}
        />
        <Results books={this.state.books} />
      </div>
    );
  }
}

export default App;
