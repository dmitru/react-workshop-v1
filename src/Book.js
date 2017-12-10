import React from 'react';
import PropTypes from 'prop-types';

import './Book.css';

export default function Book({ title, reviews, isFavorite, onFavoriteClick }) {
  const favoriteIcon = isFavorite ? '★' : '✩';
  return (
    <div className="Book">
      <h1>
        <button className="FavoriteIconButton" onClick={onFavoriteClick}>
          {favoriteIcon}
        </button>{' '}
        {title}
      </h1>
      {reviews > 0 ? `${reviews} review(-s)` : <em>No reviews</em>}
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  reviews: PropTypes.number,
  isFavorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func,
};

Book.defaultTypes = {
  reviews: 0,
  isFavorite: false,
  onFavoriteClick: null,
};
