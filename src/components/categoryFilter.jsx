import React from 'react';
import PropTypes from 'prop-types';
import { FilterCategories } from '../utils/categoryList';

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = ({ currentTarget: input }) => {
    handleFilterChange(input.value);
  };

  return (
    <div className="flex-container flex-right mt-1">
      <h3 className="text-secondary mr-1">CATEGORIES</h3>
      <select name="" id="" onChange={handleChange} className="filter">
        {FilterCategories.map(c => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
