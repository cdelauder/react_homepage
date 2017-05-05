import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const statement = 'Fuck this shit';

class Header extends Component {
  render(props) {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{statement}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <p className="App-intro">
            The current time is {}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
