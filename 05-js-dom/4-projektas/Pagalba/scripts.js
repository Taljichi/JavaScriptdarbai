let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculationSpan = document.getElementById('calculation');

let history = [];

// papildoma uzduotis #3
// Papildykite programą taip, kad eitų įvesti skaičius per kablelį.
// function onNumberClick(number) {
//     // Patikriname, ar skaitmuo yra kablelis
//     if (number === '.') {
//         // Patikriname, ar įvesties lauke jau yra kablelis
//         if (!input.value.includes('.')) {
//             input.value += number;
//         }
//     } else {
//         // Patikriname, ar tai pirmas skaitmuo ir ar jis yra 0
//         if (input.value === '0') {
//             input.value = ''; // Jei taip, išvalome įvesties lauką
//         }
//         input.value += number;
//     }
// }

function onDotClick(dot) {
    // Patikriname, ar įvesties lauke jau yra kablelis
    if (!input.value.includes(dot)) {
        input.value += dot;
    }
}


// papildoma uzduotis #2
// Padarykite, kad iš eilės nebūtų galima suvesti dviejų skirtingų veiksmų
// arba kad paskutinį įvestą veiksmą pakeistų naujai paspaustu (kad nebūtų
// dviejų sudėčių iš eilės ir pan.).
function onActionClick(clickedAction) {
    // Patikriname, ar tai nėra pradinis veiksmas ir ar paskutinis simbolis neveiksmas
    if (input.value !== '' && !isLastCharAnAction()) {
        // Pridedame naują veiksmą
        input.value += ' ' + clickedAction + ' ';
    } else {
        // Pakeičiame paskutinį veiksmą naujai paspaustu veiksmu
        input.value = input.value.slice(0, -2) + clickedAction + ' ';
    }
}

function isLastCharAnAction() {
    // Patikriname, ar paskutinis simbolis veiksmas
    return ['+', '-', 'x', '/'].includes(input.value.slice(-1));
}


function onCountClick() {
    let splitted = input.value.split(' ');
    firstNumber = parseInt(splitted[0]);
    action = splitted[1];
    secondNumber = parseInt(splitted[2]);

    calculateAnswer();
    input.value = answer;

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;

    addToHistory();
}

function calculateAnswer() {
    switch (action) {
    case '+': answer = firstNumber + secondNumber; break;
    case '-': answer = firstNumber - secondNumber; break;
    case 'x': answer = firstNumber * secondNumber; break;
    case '/': answer = firstNumber / secondNumber; break;
    }
}

function onCleanClick() {
    firstNumber = 0;
    secondNumber = 0;
    action = '+';
    answer = 0;
    input.value = '';
    calculationSpan.innerText = '';
}

function addToHistory() {
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem);
}

document.getElementById('show-history').onclick = function() {
    // console.log('veikia');
    let formatted = history.map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.innerHTML = formatted.join('');
}

// papildoma uzduotis #1
// Padarykite, kad įvedimas negalėtų prasidėti su skaičiumi 0.
function onNumberClick(number) {
    if (number === '.' && input.value.includes('.')) {
        return;
    }
    if (input.value === '0' && number !== '0') {
        input.value = number;
    } else {
        input.value += number;
    }
}

let historyEnabled = true; // Pradinė būsena - istorija įjungta

// papildoma uzduotis #4
// Leiskite išjungti / įjungti istoriją.
function toggleHistory() {
    historyEnabled = !historyEnabled; // Pakeičiame būseną (įjungiame/išjungiame)
    updateHistoryButtonLabel(); // Atnaujiname mygtuko tekstą
}

function updateHistoryButtonLabel() {
    const historyButton = document.getElementById('show-history');
    historyButton.innerText = historyEnabled ? 'Išjungti istoriją' : 'Įjungti istoriją';
}

// ...

document.getElementById('show-history').onclick = function() {
    if (historyEnabled) {
        let formatted = history.map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
        let historyBlock = document.querySelector('.calculator .history-items');
        historyBlock.innerHTML = formatted.join('');
    }
}

function atliktiVeiksma(ivestasSkaicius) {
    console.log (ivestasSkaicius);
}