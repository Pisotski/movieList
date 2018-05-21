import React, { Component} from "react";

var MovieListEntry = (props) => {
  return (
  <span>{props.movie.title}</span>
  )
};

export default MovieListEntry;