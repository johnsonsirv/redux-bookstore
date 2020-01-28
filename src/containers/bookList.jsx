import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';

const getBooksToDisplay = books => books;

const mapStateToProps = state => ({
  books: getBooksToDisplay(state.books),
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
});

const BookList = ({ books, handleRemoveBook }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemoveBook={() => handleRemoveBook(book)}
        />
      ))}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
