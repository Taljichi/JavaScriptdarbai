// function sukurtiDarbuotoja(vardas, pavardė, atlyginimas, etatas) {
//     return {
//       vardas,
//       pavardė,
//       atlyginimas,
//       etatas,
//       pakeistiAtlyginima(procentai) {
//         const naujasAtlyginimas = this.atlyginimas * ( 1 + procentai / 100);
//         return naujasAtlyginimas.toFixed(2); 
//       },
//       pakeistiEtata(naujasEtatas) {
//         const pokytis = ((this.atlyginimas * naujasEtatas) - (this.atlyginimas * this.etatas)).toFixed(2); 
//         return pokytis;
//       },
//     };
//   }
  
  
//   const darbuotojai = [
//     sukurtiDarbuotoja('Jonas', 'Jonaitis', 1000, 0.5),
//     sukurtiDarbuotoja('Petras', 'Petraitis', 1200, 1.0),
//     sukurtiDarbuotoja('Ona', 'Onaitė', 800, 0.8),
//   ];
  

//   darbuotojai.forEach((darbuotojas, index) => {
//     console.log(`Darbuotojas ${index + 1}: ${darbuotojas.vardas} ${darbuotojas.pavardė}`);
//     console.log(`Dabartinis atlyginimas: ${darbuotojas.atlyginimas} EUR`);
    

//     const naujasAtlyginimas = darbuotojas.pakeistiAtlyginima(10);
//     console.log(`Naujas atlyginimas po pakeitimo: ${naujasAtlyginimas} EUR`);
    
   
//     const pokytis = darbuotojas.pakeistiEtata(0.7);
//     console.log(`Atlyginimo pokytis po etato pakeitimo: ${pokytis} EUR`);
//     console.log('---');
//   });
  





  // Sukurkime darbuotojo objektą
function Darbuotojas(vardas, pareigos, atlyginimas) {
    this.vardas = vardas;
    this.pareigos = pareigos;
    this.atlyginimas = atlyginimas;
}

// Sukurkime gamyklos (factory) funkciją, kuri sukuria darbuotojo objektus
function sukurtiDarbuotoja(vardas, pareigos, atlyginimas) {
    return new Darbuotojas(vardas, pareigos, atlyginimas);
}

// Sukurkime darbuotojų masyvą naudodami gamyklos funkciją
var darbuotojuMasyvas = [
    sukurtiDarbuotoja("Jonas", "Inžinierius", 35000),
    sukurtiDarbuotoja("Petras", "Programuotojas", 42000),
    sukurtiDarbuotoja("Ona", "Dizainerė", 30000)
];

// Ciklas per darbuotojų masyvą ir išvedimas duomenų
for (var i = 0; i < darbuotojuMasyvas.length; i++) {
    var darbuotojas = darbuotojuMasyvas[i];
    console.log("Vardas: " + darbuotojas.vardas);
    console.log("Pareigos: " + darbuotojas.pareigos);
    console.log("Atlyginimas: " + darbuotojas.atlyginimas);
    console.log("------------------------");
}

// Skaičiavimų funkcijos
function vidutinisAtlyginimas(masyvas) {
    var suma = 0;
    for (var i = 0; i < masyvas.length; i++) {
        suma += masyvas[i].atlyginimas;
    }
    return suma / masyvas.length;
}

function auksciausiasAtlyginimas(masyvas) {
    var auksciausias = 0;
    for (var i = 0; i < masyvas.length; i++) {
        if (masyvas[i].atlyginimas > auksciausias) {
            auksciausias = masyvas[i].atlyginimas;
        }
    }
    return auksciausias;
}

// Išvesti skaičiavimų rezultatus
console.log("Vidutinis atlyginimas: " + vidutinisAtlyginimas(darbuotojuMasyvas));
console.log("Aukščiausias atlyginimas: " + auksciausiasAtlyginimas(darbuotojuMasyvas));