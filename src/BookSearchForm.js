import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BookSearchForm.css';

export default class BookSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.defaultValue,
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChange(this.state.searchInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleSearchInputChange}
          value={this.state.searchInputValue}
          className="SearchBooksInput"
          type="text"
          placeholder="Search books..."
        />
        <button type="submit" className="SearchButton">
          Search!
        </button>
      </form>
    );
  }
}

BookSearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

BookSearchForm.defaultProps = {
  defaultValue: '',
};
