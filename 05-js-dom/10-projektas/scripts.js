
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

var dpaveikslelis = 1;

function keistiPaveiksli() {
  dpaveikslelis++;
    if (dpaveikslelis > 3) {
      dpaveikslelis = 1;
    }

    var paveikslelis = document.getElementById("paveikslelis");
    paveikslelis.src = "paveikslas" + dpaveikslelis + ".jpg";
    paveikslelis.alt = "Paveikslėlis " + dpaveikslelis;
}

// ==================================================== PENKIOLIKTAS

function rodytiLaika() {
  let laikoLaukas = document.getElementById("laikoLaukas");
  let dabartinisLaikas = new Date();
  let valanda = dabartinisLaikas.getHours();
  let minutes = dabartinisLaikas.getMinutes();
  let sekundes = dabartinisLaikas.getSeconds();
  laikoLaukas.value = valanda + ":" + minutes + ":" + sekundes;
}

// ==================================================== SESIOLIKTAS
function pateiktiForma() {
  let ivykioLaukas = document.getElementById("ivykioLaukas");
  let turinys = ivykioLaukas.value;
  console.log("Pateikta forma su turiniu: " + turinys);
}
// ==================================================== SEPTINIOLIKTAS

function skaiciuotiBMI() {
  let svoris = document.getElementById("svoris").value;
  let ugis = document.getElementById("ugis").value;
  let rezultatoDiv = document.getElementById("rezultatoDiv");
  
  if (svoris && ugis) {
      let bmi = svoris / (ugis * ugis);
      let rezultatas = "Jūsų BMI yra: " + bmi.toFixed(2);
      rezultatoDiv.innerHTML = rezultatas;
  } else {
      alert("Įveskite kūno svorį ir ūgį!");
  }
}

//  ============================================================ Astuonioliktas

function apskaiciuotiIslaikymoSanaudas() {
  var atstumas = document.getElementById("atstumas").value;
  var sanaudos = document.getElementById("sanaudos").value;
  var kuroKaina = document.getElementById("kuroKaina").value;

  var bendrosIslaikymoSanaudos = (atstumas * sanaudos * kuroKaina).toFixed(2);

  document.getElementById("rezultatas").innerHTML = "Bendros kelionės išlaidos: " + bendrosIslaikymoSanaudos + " EUR";
}

//  =========================================================== devinioliktas
function pridetiPreke() {
  var pavadinimas = document.getElementById("pavadinimas").value;
  var kiekis = document.getElementById("kiekis").value;
  var kaina = document.getElementById("kaina").value;

  var bendraSuma = (kiekis * kaina).toFixed(2);

  var uzsakymoSarasas = document.getElementById("uzsakymoSarasas");
  var naujaPreke = document.createElement("li");
  naujaPreke.textContent = pavadinimas + " - Kiekis: " + kiekis + ", Kaina: " + kaina + " EUR, Bendra suma: " + bendraSuma + " EUR";
  uzsakymoSarasas.appendChild(naujaPreke);
}

//  =========================================================== dvidesimtas
var visoSaskaituSuma = 0;

function pridetiSaskaita() {
    var saskaitosNumeris = document.getElementById("saskaitosNumeris").value;
    var suma = parseFloat(document.getElementById("suma").value);
    var terminas = document.getElementById("terminas").value;

    visoSaskaituSuma += suma;

    var saskaituSarasas = document.getElementById("saskaituSarasas");
    var naujaSaskaita = document.createElement("li");
    naujaSaskaita.textContent = "Sąskaita Nr. " + saskaitosNumeris + " - Suma: " + suma.toFixed(2) + " EUR, Terminas: " + terminas + " dienos";
    saskaituSarasas.appendChild(naujaSaskaita);

    document.getElementById("visuSaskaituSuma").innerHTML = "Visų sąskaitų suma: " + visoSaskaituSuma.toFixed(2) + " EUR";
}