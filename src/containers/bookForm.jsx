import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const mapDispatchToProps = dsipatch => ({
  onSubmit: book => {
    dsipatch(createBook(book));
  },
});

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: { title: '', category: '' },
    };
    this.categories = [
      { id: 0, name: ' ' },
      { id: 1, name: 'Action' },
      { id: 2, name: 'Biography' },
      { id: 3, name: 'History' },
      { id: 4, name: 'Horror' },
      { id: 5, name: 'Kids' },
      { id: 6, name: 'Learning' },
      { id: 7, name: 'Sci-Fi' },
    ];
  }

  handleChange = ({ currentTarget: input }) => {
    const { book } = this.state;
    book[input.name] = input.value;
    this.setState({ book });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { book } = this.state;
    const { onSubmit } = this.props;
    onSubmit(book);
    book = { title: '', category: '' };
    this.setState({ book });
  };

  render() {
    const {
      book: { title, category },
    } = this.state;

    return (
      <form>
        <input
          name="title"
          value={title}
          type="text"
          onChange={this.handleChange}
          placeholder="book title"
        />
        <select onChange={this.handleChange} name="category" value={category}>
          {this.categories.map(c => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.handleSubmit}>
          Save
        </button>
      </form>
    );
  }
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
