import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import './BookList.css';

export default class BookList extends Component {
  render() {
    const { showSearch, books } = this.props;
    return (
      <div className="BookList">
        {showSearch && <input className="SearchBooksInput" type="text" placeholder="Search books..." />}

        {books.map(({ id, title, summary, isFavorite, reviewsCount }) => (
          <Book key={id} title={title} isFavorite={isFavorite} reviews={reviewsCount} />
        ))}
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
