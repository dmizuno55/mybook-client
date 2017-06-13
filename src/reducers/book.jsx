import { LIST } from '../constants/ActionTypes';

const initialState = {
  books: []
};

export default function fetchBooks(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return action;
    case 'RECEIVE_BOOKS':
      return {books: action.books};
    default:
      return state
  }
}
