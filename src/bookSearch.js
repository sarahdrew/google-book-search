import React, { Component } from "react";

class BookSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSearch}>
        <label>
          Search:
          <input
            name="searchTerm"
            ref="search"
            type="text"
            placeholder="Search Google Books"
            required
          />
        </label>
        <button type="submit">Submit</button>

        <label>
          Print Type:
          <select name="printType" onChange={this.props.handleFilter}>
            <option value="all" selected>
              All
            </option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </label>
        <label>
          Book Type:
          <select name="bookType" onChange={this.props.handleFilter}>
            <option value="no filter" selected disabled>
              No filter
            </option>
            <option value="ebooks">Ebooks</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="full">Full</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="partial">Partial</option>
          </select>
        </label>
      </form>
    );
  }
}

export default BookSearch;
