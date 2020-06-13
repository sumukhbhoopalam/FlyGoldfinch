import React, { Component } from "react";
import Home from "./Pages/Home";
import Time from "./Pages/Time";
import API from "./Pages/API";
import Currency from "./Pages/Currency";

import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={Home} />
	   <Route exact path="/time" component={Time}/>
	   <Route exact path="/data" component={API}/>
	   <Route exact path="/currency" component={Currency}/>
      </Router>
    );
  }
}

export default App;