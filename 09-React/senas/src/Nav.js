import nav from './nav.css';
import React from 'react';



function Nav() {
    return (
        <div>
                  <nav>
        {  <nav className="Container">
    <a class="logo" href="#">Logo</a>
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Industries</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Career</a></li>
      <li><a class="contact" href="#">Contact us</a></li>
    </ul>
  </nav>}
      </nav>
        </div>
);
};

export default Nav;
