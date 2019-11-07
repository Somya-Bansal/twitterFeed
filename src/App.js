import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search/search';
import Card from './components/Card/card';

class App extends Component {
  state = {
    cards: []
  }

  componentDidMount(){
    // fetch('https://aravindtwitter.herokuapp.com/twittersearch?key=adobe')
    fetch('https://aravindtwitter.herokuapp.com/twittersearch')
  }

  render() {
    return (
      <div className="app">
        <Search></Search>
        <Card></Card>
      </div>
    );
  }
}

export default App;
