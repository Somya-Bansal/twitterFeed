import React, { Component } from 'react';

import './App.scss';
import Card from './components/Card/card';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      cards: [],
      searchKey: '',
      secondCounter: 30
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    if (window.location.search) {
      let url = 'https://aravindtwitter.herokuapp.com/twittersearch' + window.location.search
      this.getData(url);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getData(url) {
    let counter = 30;
    clearInterval(this.intervalId)

    this.intervalId = setInterval(() => {
      counter--;
      if (counter === 0) {
        counter = 30;
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
      if(counter >= 0){
        this.setState({
          secondCounter: counter,
        });
      }
    }, 1000);

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
    // clearInterval(this.intervalId);
    // this.intervalId = setInterval(() => this.getData(url), 30000);
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
              Auto refresh in {this.state.secondCounter} seconds
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
