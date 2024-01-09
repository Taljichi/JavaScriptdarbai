
import nav from './nav.css';
import React from 'react';

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  color: 'white',
};

const linkStyle = {
  color: 'white',
  marginRight: '10px',
  textDecoration: 'none',
};

function Nav() {
  return (
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>Namai</a>
      <a href="/about" style={linkStyle}>Apie mus</a>
      <a href="/contact" style={linkStyle}>Paslaugos</a>
    </nav>
  );
}

export default Nav;
