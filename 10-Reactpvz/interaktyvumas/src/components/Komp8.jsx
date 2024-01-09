function Komp8() {
  let slaptasSk = Math.floor(Math.random() * 3) + 1;

  const speti1SkHandler = () => {
    alert(slaptasSk == 1 ? 'Atspejote!' : 'Neatspejote');
  };

  const speti2SkHandler = () => {
    alert(slaptasSk == 2 ? 'Atspejote!' : 'Neatspejote');
  };

  const speti3SkHandler = () => {
    alert(slaptasSk == 3 ? 'Atspejote!' : 'Neatspejote');
  };

  return (
    <div>
        <h2>Komp8</h2>
        <button onClick={speti1SkHandler}>Spejimas 1</button>
        <button onClick={speti2SkHandler}> Spejimas 2</button>
        <button onClick={speti3SkHandler}>Spejimas 3</button>
    </div>
  )
}

export default Komp8