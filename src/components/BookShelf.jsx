import React, { PropTypes, Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    return (
      <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>書籍</th>
        <th>出版社</th>
        <th>ページ数</th>
      </tr>
      </thead>
      <tbody>
      {(this.props.books).map((book) => <Book key={book.id} value={book} />)}
      </tbody>
      </table>
    );
  }
}
export default BookShelf;
