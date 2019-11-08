import React, { Component } from 'react';

import './App.scss';
import Card from './components/Card/card';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      cards: [],
      searchKey: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount(){
    if(window.location.search){
      let url = 'https://aravindtwitter.herokuapp.com/twittersearch' + window.location.search
      this.getData(url);
    }
    console.log(window.location.search);
  }

  getData(url){
    this.setState({
      loading: true
    })
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        cards: data.statuses,
        loading: false
      })
    })
  }

  handleSearch() {
    let url = 'https://aravindtwitter.herokuapp.com/twittersearch?key=' + this.state.searchKey;
    this.getData(url);
  }

  handleSearchKey = ev => {
    this.setState({
      searchKey: ev.target.value
    });
  }

  render() {
    const searchKey = this.state.searchKey;
    return (
      <div className="app">
        <div className="SearchContainer">
          <div className="SearchHeading">
            <span className="searchAtText">Search @ Twitter</span>
            <span className="autoRefreshText">
              Auto refresh in 27 seconds
          </span>
          </div>
          <div className="SearchBarContainer">
            <div className="SearchBar">
              <input
                onChange={(ev) => this.handleSearchKey(ev)}
                value={searchKey}
                type="text"
                placeholder="Search"
              >
              </input>
            </div>
            <div className="SearchButton">
              <button
                onClick={this.handleSearch}
              >Search</button>
            </div>
          </div>
        </div>
        <Card cards={this.state.cards} loading={this.state.loading}></Card>
      </div>
    );
  }
}

export default App;
