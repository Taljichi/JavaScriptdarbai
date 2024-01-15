import { useState, useEffect } from 'react';

const Komp2 = () => {
    const [selectedAction, setSelectedAction] = useState('none');

    

    useEffect(() => {
        console.log('atliekami papildomi veiksmai susije su', selectedAction);
    }, [selectedAction]);

    const handleClick = (event) => {
        setSelectedAction(event.target.textContent);
    }


  return (
    <div>
        <h2>Komp2</h2>
        <button onClick={handleClick}>Produktai</button>
        <button onClick={handleClick}>Užsakymai</button>
        <p>Pasirinkta: {selectedAction}</p>
    </div>
  )
}

export default Komp2