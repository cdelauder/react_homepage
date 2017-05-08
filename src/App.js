import React, { Component } from 'react';
import './App.css';

const about = 'About'
const experience = 'Experience'
const resume = 'Resume'
const github = 'Github'
const linkedin = 'Linkedin'
const email = 'Email'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="images/me_beach.jpg" alt="Chris on the beach" className="beach-picture"/>
        <h1 className="name">Chris DeLauder</h1>
        <h3 className="title">Software Engineer</h3>
      </div>
    )
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render(props) {
    return (
      <div className="nav">
        <h5 className={"nav-item" + (this.props.selected === about ? ' selected' : '')} onClick={(link) => this.props.navigate(about)}>{about}</h5>
        <h5 className={"nav-item" + (this.props.selected ===  experience ? ' selected' : '')} onClick={(link) => this.props.navigate(experience)}>{experience}</h5>
        <h5 className="nav-item" onClick={(link) => this.props.navigate(resume)}>{resume}</h5>
        <h5 className="nav-item" onClick={(link) => this.props.navigate(github)}><span className="fa fa-github"></span> <span className="hidden-xs">Github</span></h5>
        <h5 className="nav-item" onClick={(link) => this.props.navigate(linkedin)}><span className="fa fa-linkedin"></span> <span className="hidden-xs">Linkedin</span></h5>
        <h5 className="nav-item" onClick={(link) => this.props.navigate(email)}><span className="fa fa-envelope"></span> <span className="hidden-xs">Email</span></h5>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div className="content about">
        <p className="summary">I take ideas and transform them into stable robust platforms. I believe in simplicity, reliability, and efficiency. I favor production-ready over new and shiny.</p>
        <p className="summary">I traverse the stack on a daily basis. My work has encompassed both front and back end development, as well as healthy dose of DevOps. I write pixel-perfect front end code, but my true passion is for the back end. Optimizing servers and increasing availablity is as exciting to me as writing a new feature.</p>
        <p className="summary">When I'm not writing code I am most likely exploring San Francisco with my beagle Nibbler. I love to stay active and also enjoy a number of sports including curling, running, and surfing.</p>
        <p className="summary">I am currently seeking new opportunities. <a href="mailto:cdelauder@gmail.com" target="blank" className="email-link">Get in touch!</a></p>
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
  reset(e) {
    this.setState({inputValue: ''}) 
  }
  render(props) {
    return (
      <div>
        <label>Type stuff here!</label>
        <input name="stuff" value={this.state.inputValue} type="text" onChange={(e) => this.takeInput(e)}/>
        <p>You typed {this.state.inputValue.length > 0 ? this.state.inputValue : 'nothing'}!</p>
        <button onClick={(e) => this.reset(e)}>Clear</button>
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
  constructor(props) {
    super(props);
    this.state = {
      selected: about
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(link) {
    if (link === resume) {
      window.open('chris_delauder_resume_2017.pdf');
    } else if (link === github) {
      window.open('https://github.com/cdelauder');
    } else if (link === linkedin) {
      window.open('https://linkedin.com/in/chrisdelauder/');
    } else if (link === email) {
      window.open('mailto:cdelauder@gmail.com');
    } else {
      this.setState({selected: link})
    }
  };

  render() {
    const selected = this.state.selected;
    const navigate = this.navigate;
    return (
      <div className="App">
        <Header />
        <NavBar selected={selected} navigate={navigate}/>
        {selected === about &&
          <About />
        }
      </div>
    );
  }
}
 
export default App;
