function Komp6() {
    let sk1 = [10, 8, 7, 6, 8, 7];
    let sk2 = [];
  return (
    <div>
        <h2>Skaičiai su if sąlyga</h2>
        <h3>Skaičiai 1
            {
                sk1.length > 0 ?
                    <ul>
                        {sk1.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
                    </ul>
                    :
                    <p>Skaičių 1 nėra</p>
            }
        </h3>
        <h3>Skaičiai 2
            {
                sk2.length > 0 ?
                <ul>
                    {sk2.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
                </ul>
                :
                <p>Skaičių 2 nėra</p>
            }
        </h3>
    </div>
  )
}

export default Komp6