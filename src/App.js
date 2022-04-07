import React, { Component } from 'react'
import Membre from './Membre.js';
import button from './Button.js';
import './App.css';

const famille = {
  membre1: {
    name: 'Antho',
    age: 27
  },
  membre2: {
    name: 'Mohamed',
    age: 30
  },
  membre3: {
    name: 'Claude',
    age: 29
  },
  membre4: {
    name: 'Saïd',
    age: 23
  },
  membre5: {
    name: 'Théo',
    age: 25
  },
}
class App extends Component {
  state = { famille, isShow: false }
  handleClick = (param) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += param
    this.setState({ famille })
  }
  handleChange = (e) => {
    const famille = { ...this.state.famille }
    const name = e.target.value
    famille.membre1.name = name
    this.setState({ famille })
  }
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }
  cacherNom = (id) => {
    const famille = { ...this.state.famille }
    famille[id].name = 'X'
    this.setState({ famille })
  }

  render() {

    const { titre } = this.props;//destructuration
    const { famille, isShow } = this.state
    let description = null

    if (isShow) {
      description = <strong>description lol</strong>
    }

    < button onClick={this.handleShowDescription} >
      {
        isShow ? 'cacher' : 'Montrer'
      }
    </button >


    const liste = Object.keys(famille).map(membre => (
      <Membre
        age={famille[membre].age}
        name={famille[membre].name} />

    ))
    console.log(liste);
    return (
      <div className="App">
        <h1>{titre}</h1> {/*this.props.titre devient titre suite a la destructuration*/}
        <input type="texte" value={famille.membre1.name} onChange={this.handleChange} />
        {liste}
        {description}
        <button onClick={this.handleShowDescription}>
          {isShow ? 'cacher' : 'Montrer'}
        </button>
        {/* <Membre
          name={famille.membre1.name}
          age={famille.membre1.age} />
        
        <Membre
          name={famille.membre2.name}
          age={famille.membre2.age} />
        <Membre
          name={famille.membre3.name}
          age={famille.membre3.age} />
        <Membre
          name={famille.membre4.name}
          age={famille.membre4.age} />
        <Membre
          name={famille.membre5.name}
          age={famille.membre5.age} />
        <Button vieillir={() => this.handleClick(2)} /> */}
      </div >
    )
  }
}

export default App;
