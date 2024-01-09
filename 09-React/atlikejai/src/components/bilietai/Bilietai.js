import React from 'react';
import './bilietai.css';

const data = [
  {
    id: 1,
    title: '1-os dienos bilietas',
    info: 'Neque cursus metus volutpat nulla euismod eu, phasellus nisl ultricies nibh at odio lacus pulvinar fermentum, neque tincidunt mattis magna',
    kaina: '400 €'
  },
  {
    id: 2,
    title: '2-ų dienos bilietas',
    info: 'Neque cursus metus volutpat nulla euismod eu, phasellus nisl ultricies nibh at odio lacus pulvinar fermentum, neque tincidunt mattis magna',
    kaina: '450 €',
  },
  {
    id: 3,
    title: '3-ų dienos bilietas',
    info: 'Neque cursus metus volutpat nulla euismod eu, phasellus nisl ultricies nibh at odio lacus pulvinar fermentum, neque tincidunt mattis magna',
    kaina: '500 €',
  },
]

function Bilietai() {
  return (
    <div class="ticket-section general-section">
    <div class="container">
        <div class="title-part">
            <h2>Bilietai</h2>
            <div class="red-row"></div>
            <p>Atae, morbi. Elementum hendrerit lectus laoreet gravida urna nunc, a, elementum. Donec nisi vel
                scelerisque cursus auctor.</p>
        </div>
        <div className="tickets">
            {
              data.map(({ id, title, info, kaina}) => {
                return (
                  <div key={id} className="ticket-block">
                  <h3>{title}</h3>
                  <div class="black-row"></div>
                  <p>{info}</p>
                  <p class="kaina1">Kaina: <b class="kaina2">{kaina}</b></p>
                  <div class="button">
                      <a href="#">Pirkti bilietą</a>
                  </div>
              </div>
                )
              })
            }
        </div>
    </div>
</div>
  );
}

export default Bilietai;