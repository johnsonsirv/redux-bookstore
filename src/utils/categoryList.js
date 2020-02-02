const BookCategories = [
  { id: 0, name: ' ' },
  { id: 1, name: 'Action' },
  { id: 2, name: 'Biography' },
  { id: 3, name: 'History' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Kids' },
  { id: 6, name: 'Learning' },
  { id: 7, name: 'Sci-Fi' },
];

export const FilterCategories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Action' },
  { id: 2, name: 'Biography' },
  { id: 3, name: 'History' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Kids' },
  { id: 6, name: 'Learning' },
  { id: 7, name: 'Sci-Fi' },
];

export const getVisibilityFilters = () => {
  const categories = {};
  FilterCategories.map(({ name }) => {
    categories[name] = name;
    return categories;
  });
  return categories;
};

export default BookCategories;
