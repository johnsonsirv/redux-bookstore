import React from 'react';
import PropTypes from 'prop-types';
import { FilterCategories } from '../utils/categoryList';

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = ({ currentTarget: input }) => {
    handleFilterChange(input.value);
  };

  return (
    <select name="" id="" onChange={handleChange}>
      {FilterCategories.map(c => (
        <option key={c.id} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
