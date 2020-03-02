/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

export default class UserFrame extends React.Component {
  render() {
    const user = this.props.user;
    return (
      // Component to render user profile picture and greeting
      <div className="user-frame">
        <div className="user-frame-greeting">Welcome {user.displayName}</div>
        <img className="user-frame-avatar" src={user.profilePicture}></img>
      </div>
    );
  }
}
