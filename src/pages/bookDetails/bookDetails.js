import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../../api/books";
import "./bookDetails.css"; // Import the CSS file for styling

function BookDetail() {
  const { id } = useParams(); // Get the book ID from the URL parameters
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const bookData = await fetchBookDetails(id);
        setBook(bookData);
      } catch (err) {
        setError(err.message); // Use the error message from the fetch function
      } finally {
        setLoading(false);
      }
    };

    getBookDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>No book data available.</p>;
  }

  return (
    <div className="book-detail-container">
      <h1>{book.name}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
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
    </div>
  );
}

export default BookDetail;
