import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const book = this.props.value;
    return (
      <tr>
      <td>{book.id}</td>
      <td>{book.name}</td>
      <td>{book.publisher}</td>
      <td>{book.page}</td>
      </tr>
    );
  }
}

export default Book;
