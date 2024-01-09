function Komp7() {
    let pageTitle = 'Puslapio pavadinimas';

    let links = [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos'},
        { id: 3, url: '/apie-mus', title: 'Apie mus' },
        { id: 4, url: '/kontaktai', title: 'Kontaktai'}
    ];
  return (
    <div>
        <h2>{pageTitle}</h2>
        <ul>
            {
                links.map(link => {
                    return <li key={link.id}><a href={link.url}>{link.title}</a></li>
                })
            }
        </ul>
    </div>
  )
}

export default Komp7