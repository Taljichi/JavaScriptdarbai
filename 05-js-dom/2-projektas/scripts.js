document.addEventListener('DOMContentLoaded', function () {
    let calculateButton = document.getElementById('calculate');
    let resultDiv = document.getElementById('results');
    let boardLengthInput = document.getElementById('board-length');
    let boardWidthInput = document.getElementById('board-width');
    let boardDepthInput = document.getElementById('board-depth');
    let boardQuantityInput = document.getElementById('board-quantity');

    calculateButton.addEventListener('click', function () {
        let length = parseFloat(boardLengthInput.value);
        let width = parseFloat(boardWidthInput.value);
        let depth = parseFloat(boardDepthInput.value);
        let quantity = parseInt(boardQuantityInput.value);

        let volume = length * width * depth * quantity;
        let price = volume * 100;

        resultDiv.innerHTML = `<p><strong>Bendra kubatūra:</strong> ${volume.toFixed(2)} m³</p>`;
        resultDiv.innerHTML += `<p><strong>Galutinė kaina:</strong> ${price.toFixed(2)} €</p>`;
    });

    function validateInput(inputElement) {
        let inputValue = inputElement.valueAsNumber;

        if (inputValue < 0) {
            inputElement.classList.add('error');
            inputElement.nextElementSibling.classList.add('show');
        } else {
            inputElement.classList.remove('error');
            inputElement.nextElementSibling.classList.remove('show');
        }
    }

    boardLengthInput.addEventListener('input', function () {
        validateInput(boardLengthInput);
    });

    boardWidthInput.addEventListener('input', function () {
        validateInput(boardWidthInput);
    });

    boardDepthInput.addEventListener('input', function () {
        validateInput(boardDepthInput);
    });

    boardQuantityInput.addEventListener('input', function () {
        validateInput(boardQuantityInput);
    });

    document.getElementById('reset').addEventListener('click', function () {
        boardLengthInput.value = 0;
        boardWidthInput.value = 0;
        boardDepthInput.value = 0;
        boardQuantityInput.value = 0;
        resultDiv.innerHTML = `<p>Kol kas nieko nėra.</p>`;
    });
});
