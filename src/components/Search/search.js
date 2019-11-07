import React from 'react';

import './search.scss'

class Search extends React.Component{
  render(){
    return (
      <div className="SearchContainer">
        <div className="SearchHeading">
          <span className="searchAtText">Search @ Twitter</span>
          <span className="autoRefreshText">
            Auto refresh in 27 seconds
          </span>
        </div>
        <div className="SearchBarContainer">
          <div className="SearchBar">
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="SearchButton">
            <button>Search</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;