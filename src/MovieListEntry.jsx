import React, { Component} from "react";

//create template for single movie in the list
var MovieListEntry = (props) => {
  return (
  <div><ul><h4>{props.movie.title}</h4></ul>
</div>
  )
};

window.MovieListEntry = MovieListEntry;
export default MovieListEntry;