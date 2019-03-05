import React, { Component } from "react";

class Results extends Component {
  render() {
    const results = this.props.results.map((element, key) => {
      return (
        <li key={key}>
          <img
            src={
              "imageLinks" in element.volumeInfo
                ? element.volumeInfo.imageLinks.smallThumbnail
                : ""
            }
            alt={element.title}
          />
          <strong>{element.volumeInfo.title}</strong>
          <p>
            {"authors" in element.volumeInfo
              ? element.volumeInfo.authors.map(i => <i>{i} </i>)
              : ""}
          </p>
          <p>{element.volumeInfo.description}</p>
          <p>
            {"listPrice" in element.saleInfo
              ? element.saleInfo.listPrice.amount
              : ""}
          </p>
        </li>
      );
    });
    return (
      <div className="BooksearchList">
        <ul>{results}</ul>
      </div>
    );
  }
}

export default Results;
