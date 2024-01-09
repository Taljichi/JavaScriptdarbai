import React from 'react';
import './galerija.css';
import IMG1 from '../../img/rec1.jpg';
import IMG2 from '../../img/rec2.jpg';
import IMG3 from '../../img/rec3.jpg';
import IMG4 from '../../img/rec4.jpg';
import IMG5 from '../../img/rec5.jpg';
import IMG6 from '../../img/rec6.jpg';
import IMG7 from '../../img/rec7.jpg';
import IMG8 from '../../img/rec8.jpg';
import IMG9 from '../../img/rec9.jpg';
import IMG10 from '../../img/rec10.jpg';
import IMG11 from '../../img/rec11.jpg';
import IMG12 from '../../img/rec12.jpg';
import IMG13 from '../../img/rec13.jpg';
import IMG14 from '../../img/rec14.jpg';
import IMG15 from '../../img/rec15.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'gallery photo',
  },
  {
    id: 2,
    image: IMG2,
    title: 'gallery photo',
  },
  {
    id: 3,
    image: IMG3,
    title: 'gallery photo',
  },
  {
    id: 4,
    image: IMG4,
    title: 'gallery photo',
  },
  {
    id: 5,
    image: IMG5,
    title: 'gallery photo',
  },
  {
    id: 6,
    image: IMG6,
    title: 'gallery photo',
  },
  {
    id: 7,
    image: IMG7,
    title: 'gallery photo',
  },
  {
    id: 8,
    image: IMG8,
    title: 'gallery photo',
  },
  {
    id: 9,
    image: IMG9,
    title: 'gallery photo',
  },
  {
    id: 10,
    image: IMG10,
    title: 'gallery photo',
  },
  {
    id: 11,
    image: IMG11,
    title: 'gallery photo',
  },
  {
    id: 12,
    image: IMG12,
    title: 'gallery photo',
  },
  {
    id: 13,
    image: IMG13,
    title: 'gallery photo',
  },
  {
    id: 14,
    image: IMG14,
    title: 'gallery photo',
  },
  {
    id: 15,
    image: IMG15,
    title: 'gallery photo',
  },
]

function Galerija() {
  return (
    <div class="gallery-section general-section">
        <div class="container">
            <div class="title-part">
                <h2>Galerija</h2>
                <div class="red-row"></div>
                <p>In felis, ultricies vitae, morbirna nunc, a, elementum. Donec nisi vel scelerisque dignissim cursus
                    auctor.</p>
            </div>
            <div class="content-part">
            {
          data.map(({ id, image, title }) => {
            return (
              <img key={id} src={image} alt={title} />             
            )
          })
        }
            </div>
        </div>
    </div>
  );
}

export default Galerija;