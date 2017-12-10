import React, { Component } from 'react';
import './App.css';

import BookList from './BookList';

import { BOOKS } from './data';

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
