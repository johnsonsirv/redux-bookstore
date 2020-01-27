import React from 'react';

const BookForm = () => {
  const categories = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Biography' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Horror' },
    { id: 5, name: 'Kids' },
    { id: 6, name: 'Learning' },
    { id: 7, name: 'Sci-Fi' },
  ];
  return (
    <form>
      <input type="text" placeholder="book title" />
      <select>
        {categories.map(c => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <input type="submit" value="Save(Mileston 3)" />
    </form>
  );
};

export default BookForm;
