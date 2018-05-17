import React, { Component} from "react";
import "./App.css";
import MovieList from "./MovieList"
import collection from "./fakeData"

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentMovieList: collection
    }
  }

  render() {
    return(
      <div className="App">
      <h2> App</h2>
      <MovieList movies= {collection}/>
      </div>
    );
  }
}

export default App;

window.App = App;