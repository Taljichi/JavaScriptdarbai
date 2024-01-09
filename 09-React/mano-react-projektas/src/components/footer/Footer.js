import footer from './footer.css';
import React from 'react';

const footerStyle = {
  backgroundColor: '#343A40',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 all rights reserved.</p>
    </footer>
  );
}

export default Footer;
