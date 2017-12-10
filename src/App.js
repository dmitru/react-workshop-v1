import React, { Component } from 'react';
import './App.css';

import BookList from './BookList';

import { fetchBooks } from './apiClient';

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
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      isLoading: true,
    };

    this.handleBookFavoriteClick = this.handleBookFavoriteClick.bind(this);
  }

  componentDidMount() {
    fetchBooks().then(books => {
      this.setState({
        books: books,
        isLoading: false,
      });
    });
  }

  handleBookFavoriteClick(bookId) {
    const updatedBooks = this.state.books.map(book => {
      if (book.id !== bookId) {
        return book;
      }
      return {
        ...book,
        isFavorite: !book.isFavorite,
      };
    });

    this.setState({
      books: updatedBooks,
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <AppLayout>
        {isLoading ? (
          <h1 className="Loading">Loading...</h1>
        ) : (
          <BookList
            books={this.state.books}
            onBookFavoriteClick={this.handleBookFavoriteClick}
          />
        )}
      </AppLayout>
    );
  }
}

export default App;
