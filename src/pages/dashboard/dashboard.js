import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../api/books";
import Card from "../../components/card";

import "./dashboard.css";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksList = await fetchBooks();
        setBooks(booksList.splice(0,16));
      } catch (err) {
        setError(err.message); // Use the error message from the fetch function
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!books.length) {
    return <p>No books available.</p>;
  }


  return (
    <div className="grid-container">
      {books.map((book, index) => (
        <Card key={index} book={book} />
      ))}
    </div>
  );
}

export default Dashboard;
