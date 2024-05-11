import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`https://softwium.com/api/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    }

    fetchBook();
  }, [id]);

  return (
    <div>
      <h1>Book Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Title: {book.title}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Authors: {book.authors.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
