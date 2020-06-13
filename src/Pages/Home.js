import React from 'react';
import { NavLink } from 'react-router-dom';
import {observer} from 'mobx-react';
import store from './store.js';

const Home = () => (
  <div>
    <button onClick={() => store.increment()}> + (Increment)</button>
   
    <button onClick={() => store.decrement()}>- (Decrement)</button>
	 <center>
	 <h2>{store.counter}</h2>
		<button>
		<NavLink className={'bx--btn bx--btn--primary'} to={'/Time'}>
		Next Page
		</NavLink>
		</button>
	</center>
	</div>
);

export default observer(Home);