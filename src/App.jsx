import React, { Component} from "react";
import "./App.css";
import collection from "./fakeData"
import AddMovieTitle from "./AddMovieTitle"
import MovieList from "./MovieList"
import Search from "./Search"



class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      collection: collection,
      newMovieTitle: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.handleMovieAdd = this.handleMovieAdd.bind(this);
  }

  handleChange(event) {
    var lowVal = event.target.value.toLowerCase();
    this.setState({collection: lowVal});
  }

  addMovie(event) {
    event.preventDefault();
    console.log(this.state.collection);
    let title = this.state.newMovieTitle;
    if(title.length > 0) {
      this.setState({
        collection: this.state.collection.concat({title})
      })
    };
  }

  handleMovieAdd(event) {
    this.setState({newMovieTitle: event.target.value});
  }

  render() {
    return(
      <div className="App">
        <AddMovieTitle addMovie={this.addMovie} handleMovieAdd={this.handleMovieAdd}/>
        <Search handleChange={this.handleChange}/>
        <div>{this.state.value}</div>
        <h2>MovieList</h2>
        <MovieList movies={this.state.collection} val={this.state.value}/>
      </div>
    );
  }
}

export default App;

window.App = App;