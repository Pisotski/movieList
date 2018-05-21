import React, { Component} from "react";
import "./App.css";
import collection from "./fakeData"
import MovieList from "./MovieList"
import Search from "./Search"


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currentMovieList: collection
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    var filteredMovieList = this.state.currentMovieList.filter((movie) => 
      movie.title.includes(event.target.value)
      )
    this.setState({value: event.target.value})
  }

  // handleSubmit(event) {
  //   console.log(event.target.value);

  // }

  render() {
    return(
      <div className="App">
        <Search handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
        <div>{this.state.value}</div>
        <h2>MovieList</h2>
        <MovieList movies= {collection} val= {this.state.value}/>
      </div>
    );
  }
}

export default App;

window.App = App;