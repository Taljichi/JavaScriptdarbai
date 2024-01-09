

import paslaugos from './paslaugos.css';
import React from 'react';

const stylius = {
  backgroundColor: '#FFC107',
  padding: '20px',
  color: '#212529',
  textAlign: 'center',
};

function Paslaugos() {
  return (
    <section style={stylius}>
      <h2>Musu paslaugos</h2>
      <ul>
        <li>Paslauga 1</li>
        <li>Paslauga 2</li>
        <li>Paslauga 3</li>
      </ul>
    </section>
  );
}

export default Paslaugos;