function load_data(data_wrapper_selector, data_array, balance_wrapper_selector) {
    let data_wrapper = document.querySelector(data_wrapper_selector)

for (const item of data_array) {
        data_wrapper.innerHTML += `<div class="item-wrapper">
        <p class="id">ID: ${item.id}</p>
        <p class="type ${item.type}">
            ${item.type == 'income' ? 'Pajamos' : 'Islaidos'}
        </p>
        <p class="amount ${item.type}">${item.amount}</p>
        <p class="when">${item.when}</p>
                </div>`;
    }

    let final_balance = calculate_balance(data_array);
    let balance_wrapper = document.querySelector(balance_wrapper_selector);
    balance_wrapper.innerHTML = `<h3>
    Galutinis likuts: <span class="${final_balance > 0 ? 'positive' : 'negative'}">${final_balance} $</span>
    <span class="incomes_expenses">
    ( ${calculate_incomes(data_array)} $ / ${calculate_expenses(data_array)} $)
    </span>
    </h3>`;
}

function calculate_balance(payments_data) {
    let sum = 0;
    for (const item of payments_data) {
        sum += item.amount;
    }
    return sum;
}

function calculate_incomes(payments_data) {
    let sum = 0;
    for (const item of payments_data) {
        if (item.type == 'income') {
            sum += item.amount;
        }
    }
    return sum;
}

function calculate_expenses(payments_data) {
    return payments_data.filter(item => item.type == 'expense')
        .reduce((sum, item) => sum + item.amount, 0);
}
// ==========================================================================
let payments = [];

function addPayment() {
    const amountInput = document.getElementById('amountInput').value;
    const amount = parseFloat(amountInput);

    if (!isNaN(amount)) {
        const type = amount >= 0 ? 'income' : 'expense';
        const when = new Date().toLocaleString();

        const newPayment = {
            id: payments.length + 1,
            type: type,
            amount: amount,
            when: when,
        };

        payments.push(newPayment);
        updatePage();
        document.getElementById('amountInput').value = '';
    } else {
        alert('Iveskiti tinkamus skaicius.');
    }
}

function updatePage() {
    updatePayments();
    updateBalance();
}

function updatePayments() {
    const paymentsWrapper = document.querySelector('.payments-wrapper');
    paymentsWrapper.innerHTML = ''; 

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    ['ID', 'Type', 'Amount', 'When'].forEach(headerText => {
        const headerCell = headerRow.insertCell();
        headerCell.appendChild(document.createTextNode(headerText));
    });

    payments.forEach(payment => {
        const row = table.insertRow();
        ['id', 'type', 'amount', 'when'].forEach(key => {
            const cell = row.insertCell();
            const cellContent = document.createTextNode(payment[key]);
            if (key === 'amount') {
                cell.appendChild(cellContent);
                cell.classList.add(payment[key] >= 0 ? 'positive' : 'negative');
            } else if (key === 'type') {
                cell.appendChild(cellContent);
                cell.classList.add(payment[key]);
            } else {
                cell.appendChild(cellContent);
            }
        });
    });

    paymentsWrapper.appendChild(table);
}

function updateBalance() {
    const balanceWrapper = document.querySelector('.balance-wrapper');
    const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);
    balanceWrapper.innerHTML = `<p>Galutine suma: ${totalAmount}</p>`;
}

updatePage();
