import React, { Component} from "react";

var MovieListEntry = (props) => {
  return (
  <td>{props.movie.title}</td>
  )
};

export default MovieListEntry;