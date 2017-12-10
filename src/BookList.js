import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import BookSearchForm from './BookSearchForm';
import './BookList.css';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(value) {
    this.setState({
      searchInputValue: value,
    });
  }

  getFilteredBooks() {
    const { searchInputValue } = this.state;
    const { books } = this.props;
    if (!bookSearchValue) {
      return books;
    }

    return books.filter(
      b => b.title.toLowerCase().search(searchInputValue.toLowerCase()) > -1
    );
  }

  render() {
    const { showSearch } = this.props;
    const { searchInputValue } = this.state;

    const filteredBooks = this.getFilteredBooks();

    return (
      <div className="BookList">
        {showSearch && (
          <BookSearchForm onChange={this.handleSearchChange} defaultValue="" />
        )}

        {filteredBooks.map(
          ({ id, title, summary, isFavorite, reviewsCount }) => (
            <Book
              key={id}
              title={title}
              isFavorite={isFavorite}
              reviews={reviewsCount}
            />
          )
        )}
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      reviewsCount: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ),
  showSearch: PropTypes.bool,
};

BookList.defaultProps = {
  showSearch: true,
};
