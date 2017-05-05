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

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  tick() {
    this.setState({date: new Date()});
  }
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <div>
        <p className="App-intro">
          The current time is {this.state.date.toLocaleString()}
        </p>
      </div>
    )
  } 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Time />
      </div>
    );
  }
}   
 
export default App;
