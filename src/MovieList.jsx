import React, { Component} from "react";
import MovieListEntry from "./MovieListEntry"

var MovieList = function(props) {
  console.log(props)
    return (
    <table>
      <tbody>
        {props.movies
          .filter((movie) => movie.title.includes(props.val))
          .map((movie, index) => <tr key= {index}><MovieListEntry movie= {movie} index= {index}/></tr>)} 
      </tbody>  
    </table>
  )
}

export default MovieList;
