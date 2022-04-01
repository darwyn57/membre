import React, { Component } from 'react'
import Membre from './Membre.js';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>{this.props.titre}</h1>
        <Membre name='antho' />
        <Membre name='mohamed' />
        <Membre name='claude' />
        <Membre name='saïd' />
        <Membre name='alexi' />

      </div>

    )
  }

}

export default App;
