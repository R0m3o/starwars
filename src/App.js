import React, { Component } from 'react';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>STARWARS</h1>
        </header>
        <main className="container">
          <Home/>
        </main>
      </div>
    );
  }
}

export default App


