import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = ({ id, title, category }) => {
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
