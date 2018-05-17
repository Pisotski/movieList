import React, { Component} from "react";
import MovieListEntry from "./MovieListEntry"

var MovieList = function(props) {
    return (
    <table>
      <tbody>
        {props.movies.map((movie, index) => <tr key= {index}><MovieListEntry movie= {movie} index= {index}/></tr>)} 
      </tbody>  
    </table>
  )
}

export default MovieList;
