import { useState, useEffect } from "react";
import axios from "axios";

const Komp3 = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        console.log('komp 3 uzsikrove')

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( response => {
            setdata(response.data);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
        <h2>Komp3</h2>
        {
            data.map((item, i) => {
                return <div key={i} style={{border: '1px solid black'}}>
                    <h3>{item.title}</h3>
                    <p>{item.completed ? 'Atlikta' : 'Neatlikta'}</p>
                </div>
            })
        }
        </div>
    )
}

export default Komp3