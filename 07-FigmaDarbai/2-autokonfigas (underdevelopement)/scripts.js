var minimalus = document.getElementById('minimalus');
var bazinis = document.getElementById('bazinis');
var pilnas = document.getElementById('pilnas');

minimalus = 18000;
bazinis = 20000;
pilnas = 25000;

function updateSum() {
    let checkboxes = document.querySelectorAll('.checkbox');

    let sum = 0;
    checkboxes.forEach(function(checkbox) {
        if(checkbox.checked){
            sum += parseInt.(checkbox.value);
        }
    })

    document.getElementById('main-price').textContent = sum;
}