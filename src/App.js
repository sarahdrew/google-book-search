import React, { Component } from "react";
import BookSearch from "./bookSearch";
import Results from "./results";
import FilterBook from "./filterBook";
import FilterType from "./filterType";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      filter: "",
      type: null,
      error: null
    };
  }

  getSearch(term) {
    this.setState({
      search: term
    });
  }

  getFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  getType(type) {
    this.setState({
      type: type
    });
  }

  getData(data) {
    this.setState({
      results: data.items
    });
  }

  getError(err) {
    this.setState({
      error: err
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Search Google Books</h1>
        <BookSearch
          getSearch={term => this.getSearch(term)}
          getData={data => this.getData(data)}
        />

        <FilterType
          getFilter={filter => this.getFilter(filter)}
          search={this.state.search}
          getType={type => this.getType(type)}
          getData={data => this.getData(data)}
        />

        <FilterBook
          getType={filter => this.getType(filter)}
          getFilter={filter => this.getFilter(filter)}
          search={this.state.search}
          getData={data => this.getData(data)}
          getError={err => this.getError(err)}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
