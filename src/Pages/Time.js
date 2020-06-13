import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
	<div>
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
		<button>
		<NavLink className={'bx--btn bx--btn--primary'} to={'/'}>
		Previous Page
		</NavLink>
		</button>
		<button>
		<NavLink className={'bx--btn bx--btn--primary'} to={'/data'}>
		Next Page
		</NavLink>
		</button>
	  </div>
    );
  }
}

export default Time;