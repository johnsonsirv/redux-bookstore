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
      <div className="flex-row mt-1 bd-1 bd-secondary">
        <div className="w-5 pd-1">
          <h3 className="text-bold text-secondary">ADD NEW BOOK</h3>
          <form>
            <input
              name="title"
              value={title}
              type="text"
              onChange={this.handleChange}
              placeholder="book title"
            />
            <select
              onChange={this.handleChange}
              name="category"
              value={category}
              placeholder="book title"
            >
              {BookCategories.map(c => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
