import React from 'react';
import './header.css'

function Header() {
  return (
    <header>
        <div class="content">
            <h1>Festivalis ABC</h1>
            <p>Šiais metais Festivalis ABC vyks Trakuose.</p>
            <div class="buttons">
                <a href="#" className="primary-button">Pirkti bilietą</a>
                <a href="#" className="secondary-button">Žiūrėti atlikėjus</a>
            </div>
        </div>
    </header>
  );
}

export default Header;