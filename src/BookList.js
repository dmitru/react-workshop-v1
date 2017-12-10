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
    this.handleBookFavoriteClick = this.handleBookFavoriteClick.bind(this);
  }

  handleFiltersChange(filters) {
    this.setState({ filters });
  }

  handleBookFavoriteClick(bookId) {
    this.props.onBookFavoriteClick(bookId);
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

        {filteredBooks.length > 0 &&
          filteredBooks.map(
            ({ id, title, summary, isFavorite, reviewsCount }) => (
              <Book
                key={id}
                title={title}
                isFavorite={isFavorite}
                reviews={reviewsCount}
                onFavoriteClick={() => this.handleBookFavoriteClick(id)}
              />
            )
          )}

        {filteredBooks.length === 0 && <p>No books matching the filters.</p>}
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
  onBookFavoriteClick: PropTypes.func.isRequired,
  showSearch: PropTypes.bool,
};

BookList.defaultProps = {
  showSearch: true,
};
