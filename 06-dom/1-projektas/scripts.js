let form = document.getElementById('price-switch');
let nuoma = document.getElementById('nuoma');
let pirkimas = document.getElementById('pirkimas')

form.addEventListener('change', function() {
    checkPrice();
});

function checkPrice() {
    let selectValue = document.querySelector('input[name="group"]:checked').value;
    
    if(selectValue === "nuoma") {
        nuoma.style.display = 'block';
        pirkimas.style.display = 'none';
    } else {
        pirkimas.style.display = 'block';
        nuoma.style.display = 'none';
    }
}

checkPrice();
