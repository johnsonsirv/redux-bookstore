import React from 'react';
import NavBar from './navBar';
import BookForm from '../containers/bookForm';
import BookList from '../containers/bookList';
import '../assets/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
