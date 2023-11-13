let firstNumber = 0;
let secondNumber = 0;
let action = '+'
let answer = 0;

let input = document.getElementById('calc-input');
let calculationSpan = document.getElementById('calculation');

let history = [];

function onActionClick(clickedAction) {
    if (input.value !== '' && !isLastCharAnAction()) {
        input.value += ' ' + clickedAction + ' ';
    } else {
        input.value = input.value.slice(0, -2) + clickedAction + ' ';
    }
}

function isLastCharAnAction() {
    const lastChar = input.value.slice(-1);
    return ['+', '-', '*', '/'].includes(lastChar);
}

function onNumberClick(number) {
    if (number === '.' && input.value.includes('.')) {
        return;
    }
    if (input.value === '0' && number !== '0') {
        input.value = number;
    } else {
        if (isLastCharAnAction()) {
            input.value = input.value.slice(0, -2) + number;
        } else {
            input.value += number;
        }
    }
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
        case '+' : answer = firstNumber + secondNumber; break;
        case '-' : answer = firstNumber - secondNumber; break;
        case '*' : answer = firstNumber * secondNumber; break;
        case '/' : answer = firstNumber / secondNumber; break;
    }
}

function onCleanClick(){
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
    //  console.log('veikia');
    let formatted = history.map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.innerHTML = formatted.join('');
}



