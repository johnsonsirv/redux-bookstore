import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import BookCategories from '../utils/categoryList';

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
          {BookCategories.map(c => (
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
