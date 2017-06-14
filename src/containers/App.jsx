import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BookShelf from '../components/BookShelf';
import * as BookActions from '../actions/book';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchBooks();
  }

  render() {
    return (
      <div>
        <Header />
        <BookShelf books={this.props.books}/>
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.array
};

// Appコンポーネントにstateを流し込む
function mapStateToProps(state, props) {
  return state.book;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BookActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
