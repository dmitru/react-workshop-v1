/**
 * Module that SIMULATES a REST API
 */

export const BOOKS = [
  {
    id: 1,
    title: '30 Days without jQuery',
    summary:
      'A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem!',
    reviewsCount: 10,
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Harry Potter and the Virtual DOM',
    summary:
      'A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem!',
    reviewsCount: 0,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Harry Potter and the One-Way Data Flow',
    summary:
      'A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem!',
    reviewsCount: 7,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Alice in the Reactland',
    summary:
      'A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem!',
    reviewsCount: 123,
    isFavorite: true,
  },
  {
    id: 5,
    title: '30 Ways of Shooting in your Feet',
    summary:
      'A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem! A great masterwork, a true gem!',
    reviewsCount: 43,
    isFavorite: false,
  },
];

export const fetchBooks = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(BOOKS);
    }, 1000);
  });
};
