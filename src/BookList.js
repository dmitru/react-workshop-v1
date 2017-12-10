import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import BookSearchForm from './BookSearchForm';
import './BookList.css';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
    };

    this.handleFiltersChange = this.handleFiltersChange.bind(this);
  }

  handleFiltersChange(filters) {
    this.setState({ filters });
  }

  getFilteredBooks() {
    const { books } = this.props;
    const { filters: { search, isFavoriteOnly } } = this.state;

    const booksFilteredByTitle = search
      ? books.filter(
          b => b.title.toLowerCase().search(search.toLowerCase()) > -1
        )
      : books;

    const booksFilteredByTitleAndFavorite = isFavoriteOnly
      ? booksFilteredByTitle.filter(b => b.isFavorite)
      : booksFilteredByTitle;

    return booksFilteredByTitleAndFavorite;
  }

  render() {
    const { showSearch } = this.props;

    const filteredBooks = this.getFilteredBooks();

    return (
      <div className="BookList">
        {showSearch && (
          <BookSearchForm onChange={this.handleFiltersChange} defaultValue="" />
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
