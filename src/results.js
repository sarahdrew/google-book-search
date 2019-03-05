import React, { Component } from "react";

class Results extends Component {
  render() {
    const title = this.book.volumeInfo.title;
    const image = this.book.volumeInfo.imageLinks.thumbnail;
    const author = this.book.volumeInfo.authors;
    const description = this.book.volumeInfo.description;
    const price =
      this.book.saleInfo.saleability === "FOR_SALE"
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(this.book.saleInfo.listPrice.amount)
        : this.book.saleInfo.saleability === "FOR_SALE"
        ? "Free"
        : "Not for sale";

    return (
      <div className="results">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <div>
          <p>Author: {author}</p>
          <p>Price: {price}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Results;
