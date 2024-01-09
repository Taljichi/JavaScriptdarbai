import React from 'react';
import './nav.css'

function Nav() {
  return (
          <nav>
        <h1>
            <a href="#">Festivalis ABC</a>
        </h1>
        <ul>
            <li class="active"><a href="#">Pradžia</a></li>
            <li><a href="#">Atlikėjai</a></li>
            <li><a href="#">Kaip rasti?</a></li>
            <li><a href="#">Galerija</a></li>
            <li><a href="#">Bilietai</a></li>
            <li><a href="#">Susisiekti</a></li>
        </ul>
    </nav>
  );
}

export default Nav;