import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BookSearchForm.css';

export default class BookSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: props.defaultValue,
      favoriteOnly: false,
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleFavoriteOnlyCheckboxChange = this.handleFavoriteOnlyCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState(
      {
        searchInput: event.target.value,
      },
      this.afterFieldChange
    );
  }

  handleFavoriteOnlyCheckboxChange(event) {
    this.setState(
      {
        favoriteOnly: event.target.checked,
      },
      this.afterFieldChange
    );
  }

  afterFieldChange() {
    this.props.onChange({
      search: this.state.searchInput,
      isFavoriteOnly: this.state.favoriteOnly,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChange({
      search: this.state.searchInput,
      isFavoriteOnly: this.state.favoriteOnly,
    });
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

        <label>
          Only favorites?
          <input type="checkbox" value={this.state.favoriteOnly} onChange={this.handleFavoriteOnlyCheckboxChange} />
        </label>

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
