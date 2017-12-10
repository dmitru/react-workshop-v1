import PropTypes from 'prop-types';

export const BookShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
});
