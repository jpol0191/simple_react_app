/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import AppointmentListItem from './AppointmentListItem';

// Component used to list AppointmentListItem components.
export default class AppointmentList extends React.Component {
  generateList() {
    const appointmentList = this.props.appointments.map( (appointment) => {
      return (
        <AppointmentListItem key={appointment.id} appointment={appointment} />
      );
    });
    return appointmentList;
  }
  render() {
    return (
      <div className='appointment-list'>
        {this.generateList()}
      </div>
    );
  }
}
