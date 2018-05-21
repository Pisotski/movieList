import React, { Component} from "react";
import MovieListEntry from "./MovieListEntry"

var MovieList = function(props) {
  console.log(props)
    return (
    <div>
      {props.movies
        .filter((movie) => movie.title.toLowerCase().includes(props.val))
        .map((movie, index) => <ul key= {index}><MovieListEntry movie= {movie} index= {index}/><span><button className="watched">watched</button></span></ul>)} 
    </div>
  )
}

export default MovieList;
