import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

class Time extends React.Component {
  constructor() {
    super();
    extendObservable(this, {time: "",});
  }
  componentDidMount() {
     setInterval(
	 () =>{
		let t=new Date();
		this.time = t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();
	 },1000
    );
  }
  render() {
    return (
	<div>
      <center><p className="App-clock">
        The time is {this.time}
      </p></center>
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

export default observer(Time);
