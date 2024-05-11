
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('https://softwium.com/api/books');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BooksPage;
