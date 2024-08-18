import React from "react";
import {  Link } from "react-router-dom";

import "./card.css";

function Card({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="book-card">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-author">by {book.author}</p>
      <p>
        <strong>Pages:</strong> {book.number_of_pages}
      </p>
      <p>
        <strong>Chapters:</strong> {book.number_of_chapters}
      </p>
      <p>
        <strong>Price:</strong> ${book.price.toFixed(2)}
      </p>
      <p>
        <strong>Published Year:</strong> {book.published_year}
      </p>
      <p>
        <strong>ID:</strong> {book.id}
      </p>
    </Link>
  );
}

export default Card;
