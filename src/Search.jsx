import React, { Component} from "react";

var Search = function(props) {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        <input onChange={props.handleChange} className="form" type="text" placeholder="Search.."></input>
        <button>Search</button>
      </label>
    </form>
  )
}

export default Search;
