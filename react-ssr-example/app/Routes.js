import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';

class FourOhFour extends Component {
  render() {
    return (
      <div>Oh No, This page doesn't exist!</div>
    );
  }
}

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={FourOhFour} />
      </Switch>
    );
  }
}
