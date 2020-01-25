import React from 'react';
import Book from '../components/book';

const BookList = books => {
  return (
    <table>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </table>
  );
};

export default BookList;
