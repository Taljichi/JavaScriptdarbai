
//  ===================================== PIRMAS

function spalvos() {
    document.getElementById('tekst').style.color = atsitiktine();
  }
  
  function atsitiktine() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

//   ===================================== ANTRAS

function dydis() {
  document.getElementById('langelis').style.height = '500px';
}

//  ====================================== TRECIAS

function turinys() {
  document.getElementById('tekst').innerText = 'Pakeistas tekstas !!!';
}

//  =======================================  KETVIRTAS

document.addEventListener('DOMContentLoaded', function(){
    let tekstas = document.getElementById('tekst');
    let mygtukas = document.querySelector('.btn2');

    mygtukas.addEventListener('click', function () {

        tekstas.style.fontSize = '25px';
    })
});

// ========================================  PENKTAS

function keisti() {
  document.getElementById('inputas').type = 'password';
  document.getElementById('inputas').placeholder = 'Slaptazodis';
}

// ========================================  SESTAS

function pridetiElementa() {
  let sarasas = document.getElementById("sarasas");
  let naujasElementas = document.createElement("li");
  naujasElementas.textContent = "elementas";
  sarasas.appendChild(naujasElementas);
}

// ============================================= SEPTINAS

function rodytiReiksme() {
  var inputLaukas = document.getElementById("inputTekstas");
  var reiksme = inputLaukas.value;
  
  if (reiksme.trim() !== "") {
      alert("Jūsų įvestas tekstas: " + reiksme);
  } else {
      alert("Įveskite tekstą!");
  }
}