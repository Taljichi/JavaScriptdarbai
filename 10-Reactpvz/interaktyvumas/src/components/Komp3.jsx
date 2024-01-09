function Komp3() {
    const mygtukasHandler = () => {
        console.log(' Paspaudei mygtuka');
    };
  return (
    <div>
        <h2>Komp3</h2>
        <button onClick={mygtukasHandler}>mygtukas</button>
        <button>Kitas mygtukas</button>
    </div>
  )
}

export default Komp3