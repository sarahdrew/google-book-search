import React, { Component } from "react";

class FilterBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      search: "",
      type: null,
      error: null
    };
  }

  handleChange(value) {
    this.props.getFilter(value);

    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.props.search
    }&filter=${value}`;

    let error = false;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          error = true;
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        if (error) throw new Error(data.message);
        this.props.getData(data);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
        this.props.getError(err.message);
      });
  }

  render() {
    console.log(this.state.error);
    return (
      <div>
        <select onChange={e => this.handleChange(e.target.value)}>
          <option value="full">Full</option>
          <option value="partial">Partial</option>
          <option value="free-ebooks">Free eBook</option>
          <option value="paid-ebooks">Paid eBook</option>
          <option value="ebooks">eBook</option>
        </select>
      </div>
    );
  }
}

FilterBook.defaultProps = {
  type: "all"
};

export default FilterBook;
