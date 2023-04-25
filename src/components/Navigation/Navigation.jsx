import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          return {
            padding: '12px',
            display: 'inline-block',
            fontFamily: 'Medium',
            fontSize: '20px',
            lineHeight: '24px',
            color: isActive ? 'blue' : 'yellow',
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            padding: '12px',
            display: 'inline-block',
            fontFamily: 'Medium',
            fontSize: '20px',
            lineHeight: '24px',
            color: isActive ? 'blue' : 'yellow',
          };
        }}
        to="/tweets"
      >
        Tweets
      </NavLink>
    </nav>
  );
}
