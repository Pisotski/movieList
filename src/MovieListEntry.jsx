import React, { Component} from "react";

//create template for single movie in the list
var MovieListEntry = () => {
  return (
  <div><ul><h4>Movie 1</h4></ul>
  <ul><h4>Movie 2</h4></ul>
  <ul><h4>Movie 3</h4></ul>
  <ul><h4>Movie 4</h4></ul>
  <ul><h4>Movie 5</h4></ul></div>
  )
};

window.MovieListEntry = MovieListEntry;
export default MovieListEntry;