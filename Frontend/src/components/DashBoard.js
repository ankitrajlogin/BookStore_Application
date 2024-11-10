import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <h2>Uploaded Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
