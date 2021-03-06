import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

function requestBooks() {
  return {
    type: types.REQUEST_BOOKS
  };
}

function receiveBooks(json) {
  return {
    type: types.RECEIVE_BOOKS,
    books: json.books
  };
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks());

    return fetch('/api/v1/books/')
      .then((response) => response.json())
      .then((json) => dispatch(receiveBooks(json)));
  };
}
