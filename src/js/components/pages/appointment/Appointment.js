/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {connect} from 'react-redux';

// Main component used to render Appointment view.
class Appointment extends React.Component {
  render() {
    const {match: {params}} = this.props;
    const appointment = this.props.appointments.find(
        (appointment) =>{
          return appointment.id === parseInt(params.id);
        },
    );
    const location = appointment.location;
    const doctor = appointment.doctor;
    return (
      <div>
        <h1>Appointment</h1>
        <div>Location: {location.name}</div>
        <div>Date: {appointment.date}</div>
        <div>Time: {appointment.time}</div>
        <div>Doctor: {doctor.name}</div>
      </div>
    );
  }
}

export default connect((store) => {
  return {appointments: store.user.user.appointments};
})(Appointment);
