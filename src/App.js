import React, { Component } from 'react';
import './App.css';

function Book() {
  return (
    <div className="Book">
      <h1>Title</h1>
    </div>
  );
}

class BookList extends Component {
  render() {
    return (
      <div className="BookList">
        <Book />
        <Book />
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
