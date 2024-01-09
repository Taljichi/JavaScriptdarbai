import React from 'react';

const aboutUsStyle = {
  backgroundColor: '#007BFF',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

function AboutUs() {
  return (
    <section style={aboutUsStyle}>
      <h2>Apie mus</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa
        vel quam tincidunt fermentum et vel justo. Quisque congue ligula vel enim
        scelerisque, non consectetur turpis efficitur.
      </p>
    </section>
  );
}

export default AboutUs;
