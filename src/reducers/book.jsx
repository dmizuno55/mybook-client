import * as types from '../constants/ActionTypes';

const initialState = {
  books: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_BOOKS:
      return state;
    case types.RECEIVE_BOOKS:
      return Object.assign({}, state, {books: action.books});
    default:
      return state
  }
}
