import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">QR Codes</NavLink></li>
        <li><NavLink to="/beach">Video</NavLink></li>
        <li><NavLink to="/bird">Audio</NavLink></li>
        <li><NavLink to="/food">Chat</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
