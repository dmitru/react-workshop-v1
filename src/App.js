import React, { Component } from 'react';
import './App.css';

function Book({ title, reviews, isFavorite }) {
  const favoriteIcon = isFavorite ? '★' : '✩';
  return (
    <div className="Book">
      <h1>
        {favoriteIcon} {title}
      </h1>
      {reviews ? `${reviews} review(-s)` : <em>No reviews</em>}
    </div>
  );
}

class BookList extends Component {
  render() {
    return (
      <div className="BookList">
        <Book title="30 days without jQuery" reviews={3} />
        <Book title="Harry Potter and the Virtual DOM" isFavorite={true} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
      </div>
    );
  }
}

export default App;
