import header from './header.css';
import React from 'react';

const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Sveiki!</h1>
      <p>Tai puikus webas!</p>
    </header>
  );
}

export default Header;
