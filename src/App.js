import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

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
    return (
      <div className="BookList">
        {this.props.showSearch && <input className="SearchBooksInput" type="text" placeholder="Search books..." />}
        <Book title="30 days without jQuery" reviews={3} />
        <Book title="Harry Potter and the Virtual DOM" isFavorite={true} />
      </div>
    );
  }
}

BookList.propTypes = {
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
        <BookList />
      </AppLayout>
    );
  }
}

export default App;
