    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    
    let attempts = 0;

    function spetiskaiciu() {
        const userGuess = parseInt(document.getElementById('input').value);
        attempts++;
        document.getElementById('attempts').textContent = `Bandyti: ${attempts}`;
        if (userGuess === hiddenNumber) {
            alert(`Sveikiname! Jūs atspėjote teisingą skaičių per ${attempts} bandymus!`);
        } else {
            const hint = userGuess < hiddenNumber ? 'Didesnis skaičius' : 'Mažesnis skaičius';
            document.getElementById('hint').textContent = hint;
        }
    }