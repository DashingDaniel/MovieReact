import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import MovieList from '../containers/movie_list.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <br/><br/>
        <MovieList />
      </div>
    );
  }
}
