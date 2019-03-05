import React, { Component } from "react";

import "./App.css";
import BookSearch from "./bookSearch";

import Filter from "./filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      books: []
    };
  }

  handleChange = books => {
    this.setState({
      books
    });
  };

  componentDidMount() {
    const APIKey = `AIzaSyBoXs7DLtFxdVuTpVOhA4gR0RzY3Rt-0t0`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.searchQuery
    }&projection=full&key=${APIKey}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
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
      <div className="App">
        <div className="static-page">
          <h1>Google Books Search</h1>
          <BookSearch handleChange={this.handleChange} />
        </div>
        <div className="booksList" />

        <Filter />
      </div>
    );
  }
}

export default App;
