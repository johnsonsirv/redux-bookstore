import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook, changeFilter, visibilityFilters } from '../actions';
import CategoryFilter from '../components/categoryFilter';

const getBooksToDisplay = (state, books, filter) => {
  switch (filter) {
    case visibilityFilters.All:
      return books;
    default:
      return books.filter(book => book.category === filter);
  }
};

const mapStateToProps = state => ({
  books: getBooksToDisplay(state, state.books, state.filter),
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
  handleFilterChange: filter => {
    dispatch(changeFilter(filter));
  },
});

const BookList = ({ books, handleRemoveBook, handleFilterChange }) => (
  <>
    <CategoryFilter handleFilterChange={filter => handleFilterChange(filter)} />
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
  </>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
