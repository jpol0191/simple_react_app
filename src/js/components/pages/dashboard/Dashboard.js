/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {connect} from 'react-redux';

import AppointmentList from './AppointmentList';

// Main component used to render dashboard page.
class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <AppointmentList appointments={this.props.appointments}/>
      </div>
    );
  }
}


export default connect((store) => {
  return {appointments: store.user.user.appointments};
})(Dashboard);
