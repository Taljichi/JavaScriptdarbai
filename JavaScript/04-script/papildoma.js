document.getElementById('convert').addEventListener('click', function() {
    const Farengheit = document.getElementById('Farengheit');
    const Celcius = document.getElementById('Celcius');
    if (Farengheit.value) {
        const farenheit = Farengheit.value;
        const celsius = (farenheit - 32) * 5/9;
        document.getElementById('result').textContent = celsius.toFixed(2);
    }
});