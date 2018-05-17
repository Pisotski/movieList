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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isMovieOnTheList(val) {
    let obj = this.state.collection;
    for (let key in obj) {
      if (obj[key] === value) {
        alert('hooray we got your movie');
      } else {
        alert('bad news');
      }
    }

  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    isMovieOnTheList(event.target.value);
    event.preventDefault();
  }

  render() {
    return(
      <div className="App">
        <Search handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
        <h2>MovieList</h2>
        <MovieList movies= {collection}/>
      </div>
    );
  }
}

export default App;

window.App = App;