import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = ({ book }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <Button text="Remove(Milestone 4)" />
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
};

export default Book;
