import React from 'react';
import PropTypes from 'prop-types';

import './Book.css';

export default function Book({ title, reviews, isFavorite }) {
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
