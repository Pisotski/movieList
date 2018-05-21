import React, { Component} from "react";

var Search = function(props) {
  return (
    <form>
      <label>
        <input className="form" type="text" onChange={props.handleChange} placeholder="Search..."></input>
      </label>
      <input type="submit" value="Search"></input>
    </form>
  )
}

export default Search;
