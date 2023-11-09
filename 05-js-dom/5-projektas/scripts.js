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

let payments = [
    { id: 1, type: 'income', amount: 900, when: '2023-11-09 10:25:54' },
    { id: 2, type: 'income', amount: 300, when: '2023-11-10 11:22:33' },
    { id: 3, type: 'expense', amount: -90, when: '2023-11-10 13:44:54' },
    { id: 4, type: 'expense', amount: -26, when: '2023-11-10 16:33:22' },
    { id: 5, type: 'expense', amount: -80, when: '2023-11-11 18:14:43' },
    { id: 6, type: 'expense', amount: -44, when: '2023-11-11 19:15:19' },
    { id: 7, type: 'income', amount: 200, when: '2023-11-12 09:25:54' },
];

load_data('.payments-wrapper', payments, '.balance-wrapper');