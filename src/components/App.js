import React from 'react';
import BookForm from '../containers/bookForm';
import BookList from '../containers/bookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
