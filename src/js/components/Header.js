/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {connect} from 'react-redux';

import UserFrame from './UserFrame';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Genoa HealthCare</div>
        <nav className='navigation'>
          <ul>
            {/* Working links excluded as described in assignment */}
            <li>Home</li>
            <li>Find Doctors</li>
            <li>Schedule Appointment</li>
          </ul>
        </nav>
        <UserFrame user={this.props.user.user} />
      </div>
    );
  }
}

export default connect((store) => {
  return {user: store.user};
})(Header);
