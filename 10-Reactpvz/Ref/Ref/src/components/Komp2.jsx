import { useState, useRef } from "react";

const Komp2 = () => {
    const [pirmasZodis, setPirmasZodis] = useState('');
    const [antrasZodis, setAntrasZodis] = useState('');

    const pirmasZodisRef = useRef();
    const antrasZodisRef = useRef();

    const ivestiHandler = () => {
        // alert('paspaustas mygtukas')
        // console.log({
        //     pirmasZodisRef,
        //     antrasZodisRef
        // });

        const zodis1 = pirmasZodisRef.current.value;
        const zodis2 = antrasZodisRef.current.value;
        // console.log({zodis1, zodis2});
        setPirmasZodis(zodis1);
        setAntrasZodis(zodis2);

        pirmasZodisRef.current.value = '';
        antrasZodisRef.current.value = '';
    }

    const daugiauARaidžiu = () => {
        let pirmoAts = pirmasZodis.split('').filter(raide => raide === 'a').length;
        let antroAts = antrasZodis.split('').filter(raide => raide === 'a').length;
        
        if (pirmoAts > antroAts) {
            return pirmasZodis;
        } else if (pirmoAts < antroAts) {
            return antrasZodis;
        } else {
            return 'abu lygūs';
        }
    };

  return (
    <div>
        <h2>Lyginti žodžius</h2>
        <div>
            <label htmlFor="pirmasZodis">Pirmas žodis:</label>
            <input type="text" ref={pirmasZodisRef} id="pirmasZodis" />
        </div>
        <div>
            <label htmlFor="antrasZodis">Antras žodis:</label>
            <input type="text" ref={antrasZodisRef} id="antrasZodis" />
        </div>
        <div>
            <button onClick={ivestiHandler}>Įvesti</button>
        </div>
        {
            pirmasZodis && antrasZodis &&
            <>
        <div>
            <p>Įvesti žodžiai:</p>
            <p>Pirmas: {pirmasZodis}</p>
            <p>Antras: {antrasZodis}</p>
        </div>
        <div>
            <p>Daugiau A raižių yra žodyje: { daugiauARaidžiu() }</p>
        </div>
        </>
        }
    </div>

  )
}

export default Komp2