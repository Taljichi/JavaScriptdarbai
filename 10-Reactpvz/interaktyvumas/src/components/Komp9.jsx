function Komp9() {
    let slaptasSk = Math.floor(Math.random() * 3) + 1;

    const spetiSkHandler = (spejimas) => {
        alert(slaptasSk == spejimas ? 'Atspejote!' : 'Neatspejote!');
    };

  return (
    <div>
        <h2>Komp9</h2>
        <button onClick={ () => spetiSkHandler(1) }>Spejimas 1</button>
        <button onClick={ () => spetiSkHandler(2) }>Spejimas 1</button>
        <button onClick={ () => spetiSkHandler(3) }>Spejimas 1</button>
    </div>
  )
}

export default Komp9