import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = props => {
  const {
    book: { title, category },
    handleRemoveBook,
  } = props;
  return (
    <div className="flex-row mt-1 bd-1 bd-secondary">
      {/* <div>{id}</div> */}
      <div className="book-details pd-1">
        <h4 className="text-bold text-secondary">{category}</h4>
        <h2 className="text-bold text-title">{title}</h2>
      </div>
      <div className="book-actions">
        <Button text="Remove" onClick={handleRemoveBook} />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
