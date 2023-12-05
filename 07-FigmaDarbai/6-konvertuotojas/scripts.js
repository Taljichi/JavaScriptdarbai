function konvertacija() {
    const input = document.getElementById('suma');
    const valiutos = document.getElementById('valiuta').value;
    const selektorius = document.getElementById('selektorius').value;
    const keiciamas = gautireitinga(selektorius);
    const reitingas = gautireitinga(valiutos);
    const inputValue = parseFloat(input.value);
    const iskeista = (inputValue/keiciamas) * reitingas;
    const rezultatash = document.createElement('h3');
    rezultatash.classList.add('rezultatas');
    rezultatash.textContent = iskeista.toFixed(2) + ' ' + valiutos.toUpperCase();
    const container = document.getElementById('rezultatai');
    container.innerHTML = '';
    container.appendChild(rezultatash);
    
}

function gautireitinga(valiuta) {
    reitingai = {
        usd: 1.2,
        eur: 1.0,
        aud: 1.1,
        gbp: 1.5
    };
    return reitingai[valiuta] || 1.0;
}
