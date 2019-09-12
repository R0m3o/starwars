import React, { Component } from 'react';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>StarWars</h1>
        </header>
        <main>
          <Home/>
        </main>
      </div>
    );
  }
}

export default App


