import React from "react";
import Header from '../../components/header/Header'
import IMG1 from '../../components/foto/trecias1.png'
import IMG2 from '../../components/foto/trecias2.png'
import IMG3 from '../../components/foto/trecias3.png'
import IMG4 from '../../components/foto/trecias4.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Nulinis aukštas',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Pirmas aukštas',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Antras aukštas',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Trečias aukštas',
    },
]



const Last = () => {
    return (
        
        <div className="container">
        <Header />
        <div class="images">
            {
                data.map(({ id, image, title}) => {
                    return (
                        <div key={id}>
                            <p>{title}</p>
                            <img src={image} alt={title} />
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Last