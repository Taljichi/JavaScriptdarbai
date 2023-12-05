let data = [];

function Table() {
    const lentele = document.querySelector('#lentele tbody');
    lentele.innerHTML = '';

    data.forEach(item => {
        const eile = document.createElement('tr');
        eile.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.number}</td>
        <td>
            <button class="edit" onclick="editItem(${item.id})">Keisti</button>
            <button class="delete" onclick="deleteItem(${item.id})">Ištrinti</button>
            </td>
            `;
            lentele.appendChild(eile);
    });
}

function addItem(item) {
    data.push(item);
    Table();
}

function editItem(id) {
    const keistipavadinima = prompt('Įrašyk pakeistą vardą:');
    const keistiskaiciu = prompt('Irasyk skaiciu:')
    if (keistipavadinima !== null) {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index].name = keistipavadinima;
            Table();
        }
    }
    if (keistiskaiciu !== null) {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index].number = keistiskaiciu;
            Table()
        }
    }
}


function deleteItem(id) {
    const istrinti = confirm('Ar tikrai nori ištrinti?');
    if (istrinti) {
      data = data.filter(item => item.id !== id);
      Table();
    }
  }

  document.getElementById('crudforma').addEventListener('submit', function (event) {
    event.preventDefault();
    const pavadinimas = document.getElementById('pavadinimas').value;
    const kiekis = document.getElementById('kiekis').value;
    const daiktas = {id: data.length + 1, name: pavadinimas, number: kiekis};
    addItem(daiktas);
    document.getElementById('crudforma').reset();
  });

Table();


function validateInput() {
    var inputElement = document.getElementById('pavadinimas');
    var inputValue = inputElement.value;
    var lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');
    inputElement.value = lettersOnly;
  }