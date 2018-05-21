import React, { Component} from "react";

var AddMovieTitle = function(props) {
  return (
    <form onSubmit={props.addMovie}>
      <label>
        <input className="form" type="text" placeholder="Add movie title here" onChange={props.handleMovieAdd}></input>
      </label>
      <button type="submit">Add new Movie</button>
    </form>
  )
}


export default AddMovieTitle;