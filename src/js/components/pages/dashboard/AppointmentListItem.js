/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';

// Component used to render appointments in a list.
export default class AppointmentListItem extends React.Component {
  render() {
    const appointment = this.props.appointment;
    const location = appointment.location;
    const doctor = appointment.doctor;
    return (
      <div className='appointment-list-item'>
        <div className='appointment-list-item-info'>
          <div>Location: {location.name}</div>
          <div>Date: {appointment.date}</div>
          <div>Time: {appointment.time}</div>
          <div>Doctor: {doctor.name}</div>
        </div>
        <div className='appointment-list-item-actions'>
          <div className='button'>
            <Link to={`/appointment/${appointment.id}`}> View </ Link>
          </div>
          <div className='button'>Cancel Appointment</div>
        </div>
      </div>
    );
  }
}
