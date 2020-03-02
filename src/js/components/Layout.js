/* eslint-disable require-jsdoc */
import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Router from './Router';

// Importing all pages
import * as Pages from '../../js/components/pages';

export default class Layout extends React.Component {
  render() {
    return (
      // Items added here will be rendered on every page
      <div>
        <Header/>
        <Router pages={Pages}/>
        <Footer/>
      </div>
    );
  }
};
