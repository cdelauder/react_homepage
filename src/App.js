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

class TakeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  takeInput(e) {
    this.setState({inputValue: e.target.value})
  }
  render(props) {
    return (
      <div>
        <label>Type stuff here!</label>
        <input name="stuff" value={this.state.inputValue} type="text" onChange={(e) => this.takeInput(e)}/>
        <p>You typed {this.state.inputValue}!</p>
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
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
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
        <TakeInput />
      </div>
    );
  }
}   
 
export default App;
