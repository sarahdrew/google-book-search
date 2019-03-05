import React, { Component } from "react";

class FilterType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      search: "",
      filter: null,
      error: null
    };
  }

  handleChange(value) {
    console.log("changing the print type");
    this.props.getType(value);
    this.setState({
      search: this.props.search
    });
    const url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.props.search
    }&printType=${value}`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.props.getData(data);
        console.log(data);
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
        <select onChange={e => this.handleChange(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    );
  }
}

export default FilterType;
