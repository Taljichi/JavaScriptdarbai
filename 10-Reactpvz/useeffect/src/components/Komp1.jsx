import {useState, useEffect} from "react";

const Komp1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('komponentas uzsikrove');
    },[]);

    useEffect (() => {
        console.log('pasikeite count reiksme')
        if (count > 5) {
            alert('virsijote 5');
            setCount(0);
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h2>Komp1</h2>
        <button onClick={handleClick}>Click</button>
        <p>{count}</p>
    </div>
  )
}

export default Komp1