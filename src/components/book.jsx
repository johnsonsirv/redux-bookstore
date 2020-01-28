import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = props => {
  const {
    book: { id, title, category },
    handleRemoveBook,
  } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <Button text="Remove Book" onClick={handleRemoveBook} />
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
