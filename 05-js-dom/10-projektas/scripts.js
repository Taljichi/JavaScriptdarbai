
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

// =============================================== ASTUNTAS

function pasleptiRodyti() {
  var tekstasElementas = document.getElementById("tekstas");
  if (tekstasElementas.style.display === "none" || tekstasElementas.style.display === "") {
      tekstasElementas.style.display = "block";
  } else {
      tekstasElementas.style.display = "none";
  }
}

// ================================================= DEVINTAS

var skaitliukoReiksme = 0;

function padidintiSkaitliuka() {
    skaitliukoReiksme++;
    document.getElementById("skaitliukas").textContent = skaitliukoReiksme;
}

// ==================================================== DESIMTAS

function skaiciuotiIlgį() {
  var tekstas = document.getElementById("tekstoLaukas").value;
  var ilgis = tekstas.length;
  document.getElementById("rezultatas").textContent = "Teksto ilgis: " + ilgis;
}

// ==================================================== VIENUOLIKTAS

var mygtukoNumeris = 1;

function pridetiMygtuka() {
    var mygtukas = document.createElement("button");
    mygtukas.textContent = "Mygtukas " + mygtukoNumeris;
    mygtukas.id = "mygtukas" + mygtukoNumeris;
    mygtukas.onclick = function() {
        alert("Paspaustas mygtukas " + mygtukoNumeris);
    };

    document.getElementById("mygtukuKonteineris").appendChild(mygtukas);
    mygtukoNumeris++;
}

// =================================================== DVYLIKTAS

function trintiElementa(elementoNumeris) {
  var sarasoElementas = document.getElementById("sarasas");
  var elementoId = "elementas" + elementoNumeris;
  var elementas = document.getElementById(elementoId);

  if (elementas) {
      sarasoElementas.removeChild(elementas);
  }
}

// ==================================================== Tryliktas

function pakeistiAktyvuLangą(langasNumeris) {
  var visiLangai = document.querySelectorAll('.langas');
  for (var i = 0; i < visiLangai.length; i++) {
      visiLangai[i].classList.remove('aktyvus');
  }

  var aktyvusLangas = document.getElementById('langas' + langasNumeris);
  aktyvusLangas.classList.add('aktyvus');
}

//  ================================================= Keturioliktas

var dabartinisPaveikslelis = 1;

function keistiPaveiksli() {
    dabartinisPaveikslelis++;
    if (dabartinisPaveikslelis > 3) {
        dabartinisPaveikslelis = 1;
    }

    var paveikslelis = document.getElementById("paveikslelis");
    paveikslelis.src = "paveikslas" + dabartinisPaveikslelis + ".jpg";
    paveikslelis.alt = "Paveikslėlis " + dabartinisPaveikslelis;
}