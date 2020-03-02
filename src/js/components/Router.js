/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Switch, Route} from 'react-router-dom';

class Router extends React.Component {
  render() {
    const pages = this.props.pages;
    return (
      // All routes should be described here
      <Switch>
        <Route component={pages.Dashboard} exact path='/'/>
        <Route component={pages.Appointment} path='/appointment/:id'/>
      </Switch>
    );
  }
}

export default Router;
