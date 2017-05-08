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

class Experience extends Component {
  render() {
    return (
      <div className="content experience">
        <div className="company-header">
          <h3>Shotput</h3>
          <h5 className="inline">Director of Engineering</h5>
          <h5 className="inline">San Francisco, CA</h5>
          <h5 className="inline">Dec. 2015 - Present</h5>
        </div>
        <div className="company-bullets">
          <ul>
            <li>Built and led the team of Shotput engineers.</li>
            <li>Scaled Shotput from tens of shipments per week to tens of thousands of shipments per week.</li>
            <li>Created policies and workflow to ensure a well-tested reliable app, resulting in test coverage improving from 0% to 74%.</li>
            <li>Built and maintained the DevOps infrastructure on AWS, set up monitoring software, and developed the front end build
              system.</li>
            <li>Architected, designed, and implemented the Shotput Payment Account server to handle deposit account transactions.
              Features include separate audit-logging of every incoming request, 90% test coverage, and only one error in production
              during its lifetime.</li>
            <li>Implemented multi-facility logistics, which involved rewriting the majority of both the front end and back end of the
              codebase, as nearly every model and action was affected.</li>
            <li>Created “God Mode”, allowing Shotput admins to securely view the site as seen by our clients, and perform privileged
              actions on the behalf of those clients.</li>
            <li>Improved batch order creation performance by 75% via the implementation of multithreading</li>
            <li>Implemented and maintained a number of third-party API integrations including Easypost, Shopify, Shipstation, and SkuVault.</li>
          </ul>
        </div>
        <div className="company-header">
          <h3>Stanza</h3>
          <h5 className="inline">Software Engineer</h5>
          <h5 className="inline">San Francisco, CA</h5>
          <h5 className="inline">Oct 2014 - Dec. 2015</h5>
        </div>
        <div className="company-bullets">
          <ul>
            <li>Decreased average latency on our most heavily trafficked endpoint by 5000% by implementing redis caching.</li>
            <li>Refactored every server endpoint to increase efficiency and introduce proper error-handling. Eliminated every point of
              silent failure.</li>
            <li>Rewrote the front and back ends of our OAuth process to finally provide a unified auth process across our various apps.</li>
            <li>Implemented a new build system to provide our front end engineers with a rapid-development environment.</li>
            <li>Purged 50% of the code base by removing old, unused code and deprecating 50% of our models to reduce developer
              confusion and increase the speed of the app. </li>
          </ul>
        </div>
      </div>
    );
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
        {selected === experience &&
          <Experience />
        }
      </div>
    );
  }
}
 
export default App;
