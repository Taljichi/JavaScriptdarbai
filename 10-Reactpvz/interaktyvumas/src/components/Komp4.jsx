function Komp4() {
    const pirmasHandler  = () => {
        alert('Pirmas');
    };

    const antrashandler = () => {
        alert('Antras');
    };

  return (
    <div>
        <h2>Komp4</h2>
        <button onClick={pirmasHandler}>Pirmas</button>
        <button onClick={antrashandler}>Antras</button>
        <button onClick={antrashandler}>Trecias</button>
    </div>
  )
}

export default Komp4