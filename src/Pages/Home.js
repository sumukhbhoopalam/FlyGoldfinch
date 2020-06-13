import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}> + (Increment)</button>
        <button onClick={this.DecreaseItem}> - (Decrement)</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
		<button>
		<NavLink className={'bx--btn bx--btn--primary'} to={'/Time'}>
		Next Page
		</NavLink>
		</button>
      </div>
    );
  }
}
export default Home;