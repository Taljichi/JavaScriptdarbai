function Komp3() {
    let studentas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        mokykla: 'Coding School',
        vidurkis: 8.5,
        kursas: 2
    };
  return (

    <div className="student-details">
        <h2>Studento informacija</h2>
        <p><strong>Stundetas( -ė):</strong> {studentas.vardas} {studentas.pavarde}</p>
        <p><strong>Mokosi:</strong> {studentas.mokykla}</p>
        <p><strong>Vidurkis:</strong> {studentas.vidurkis}</p>
        <p><strong>Kursas:</strong> {studentas.kursas}</p>
    </div>
  )
}

export default Komp3