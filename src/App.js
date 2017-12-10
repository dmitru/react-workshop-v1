import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { BOOKS } from './data';

function Book({ title, reviews, isFavorite }) {
  const favoriteIcon = isFavorite ? '★' : '✩';
  return (
    <div className="Book">
      <h1>
        {favoriteIcon} {title}
      </h1>
      {reviews > 0 ? `${reviews} review(-s)` : <em>No reviews</em>}
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  reviews: PropTypes.number,
  isFavorite: PropTypes.bool,
};

Book.defaultTypes = {
  reviews: 0,
  isFavorite: false,
};

class BookList extends Component {
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

function AppLayout({ children }) {
  return (
    <div className="AppLayout">
      <header className="AppLayoutHeader">Best Reads</header>
      <main className="AppLayoutMain">{children}</main>
      <footer className="AppLayoutFooter">2017 (c)</footer>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <AppLayout>
        <BookList books={BOOKS} />
      </AppLayout>
    );
  }
}

export default App;
