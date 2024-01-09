function Komp5() {
    let title = 'Medžiai mūsų soduose';
    let medziai = ['Uosis', 'Beržas', 'Pušis', 'Kedras', 'Eglė', 'Klevas', 'Šermukšnė', 'Kaštonas', 'Kriašė', 'Obelis', 'Šeivamedis'];
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {medziai.map((medis, i) => <li key={i}>{medis}</li>)}
        </ul>
    </div>
  )
}

export default Komp5