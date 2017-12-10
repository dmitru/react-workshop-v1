import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import './BookList.css';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState(
      {
        searchInputValue: event.target.value,
      },
      () => {
        console.log('async: ' + this.state.searchInputValue);
      }
    );
    console.log('sync: ' + this.state.searchInputValue);
  }

  render() {
    const { showSearch, books } = this.props;

    console.log('render: ', this.state.searchInputValue);

    return (
      <div className="BookList">
        {showSearch && (
          <input
            onChange={this.handleSearchInputChange}
            className="SearchBooksInput"
            type="text"
            placeholder="Search books..."
          />
        )}

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
