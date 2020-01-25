import React from 'react';

const BookForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <input type="text" placeholder="book title" />
      <select>
        {categories.map(category => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <input type="submit" value="Save" />
    </form>
  );
};

export default BookForm;
