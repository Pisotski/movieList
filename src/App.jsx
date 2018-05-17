import React, { Component} from "react";
import "./App.css";
import MovieList from "./MovieList"

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentMovieList: window.collection
    }
  }
  render() {
    return(
      <div className="App">
      <h2>hello App</h2>
      <MovieList />
      </div>
    );
  }
}

export default App;

window.App = App;