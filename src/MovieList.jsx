import React, { Component} from "react";
import MovieListEntry from "./MovieListEntry"

var MovieList = function() {
    return (
    <div>MovieList
    <MovieListEntry />
    </div>
  )
  //append each movie to the movieList and pass each movie to the props of MovieListEntry
    //<div className= "movie-list">
    //  {props.movies.map((movie) => <MovieListEntry movie={movie}/>)}
    //</div>
}

// MovieList.propTypes = {
//   movies: React.PropTypes.object.isRequired
// };

window.MovieList = MovieList;
export default MovieList;
