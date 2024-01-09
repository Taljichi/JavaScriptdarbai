function Komp7() {
    let sk = 14;

    const PatikrintiSkHandler = () => {
        if (sk > 10) {
            alert(' Skaicius didesnus uz 10');
        } else {
            alert('Skaicius mazesnis arba lygus 10');
        }
    }
  return (
    <div>
        <h2>Komp7</h2>
        <button onClick={PatikrintiSkHandler}>Patikrinti skaiciu</button>
    </div>
  )
}

export default Komp7