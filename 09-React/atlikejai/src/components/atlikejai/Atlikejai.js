import React from 'react';
import './atlikejai.css';
import IMG1 from '../../img/elipse1.jpg';
import IMG2 from '../../img/elipse2.jpg';
import IMG3 from '../../img/elipse3.jpg';
import IMG4 from '../../img/elipse4.jpg';
import IMG5 from '../../img/elipse5.jpg';
import IMG6 from '../../img/elipse6.jpg';
import IMG7 from '../../img/elipse7.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tomke',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Upce',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Hendrei',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Polvek',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Pugr',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lajs',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Lawew',
    info: 'Elementum hendrerit lectus laoreet gravida',
  },
]


function Atlikejai() {
  return (
    <div class="artists-section general-section">
      <div class="container">
        <div class="title-part">
          <h2>Atlikėjai</h2>
          <div class="red-row"></div>
          <p>In felis, ultricies vitae, morbi. Elementum hendrerit lectus laoreet gravida urna nunc, a, elementum.
            Donec nisi vel scelerisque dignissim cursus auctor.</p>
        </div>
        <div className="content-part">
        {
          data.map(({ id, image, title, info }) => {
            return (
              <div key={id} className='artist-block'>
                <div className='image'>
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{info}</p>
              </div>  
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Atlikejai;