
// uzduotis 1

// let zodziai = ['medis', 'tvora', 'namas', 'automobilis', 'telefonas'];


// for (let zod in zodziai) {
//     console.log('zodis:', zod, zodziai[zod]);
// }

// uzduotis 2

// let pirkiniai = ['bananas', 'pienas', 'arbuzas', 'sokoladas', 'agurkas'];

// console.log('Kiekis: ', pirkiniai.length);


// for (let i = 0; i < pirkiniai.length; i++) {
//     console.log(pirkiniai[i]);
//     if (i< pirkiniai.length - 1){
//         console.log('--------')
//     }
// }


// uzduotis 3
// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
// gautą vidurkį.


// const pazymiai = [];
// const kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 10 + 1);
//     pazymiai.push(atsitiktinis);
// }

// console.log(pazymiai);

// let suma = 0;

// for (let i = 0; i < pazymiai.length; i++) {
//     suma += pazymiai[i];
// }

// let vidurkis = suma / kiekis;

// console.log("Vidurkis:", vidurkis);



// uzduotis 4

// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
// užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// per dieną kilometrus, kurie yra didesni nei 150.

// const km = [];
// const kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 250);
//     km.push(atsitiktinis);
// }

// console.log(km);

// for (let i = 0; i < km.length; i++) {
//     if (km[i] > 150){
//         console.log(km[i])
//     }
// }

// uzduotis 5

// const failai = ['sarasas.txt', 'script.js', 'knyga.txt', 'java.js', 'nuotrauka.jpg', 'failas.jpg'];

// for (let i = 0; i < failai.length; i++) {
//     const pavadinimas = failai[i];
//     if (pavadinimas.endsWith(".txt") || pavadinimas.endsWith(".js")) {
//         console.log(pavadinimas);
//     }
// }

// uzduotis 6

// let masinos = ['BMW', 'Audi', 'Volvo', 'Opel', 'Toyota', 'Dacia'];


// for (let i = 0; i < masinos.length; i++) {
//     let zodis = masinos[i];
//     let skaicius = zodis.length;
//     console.log(zodis, skaicius)
// }

// const markes = ['audi', 'mercedes', 'volvo', 'bmw'];

// for (let marke of markes) {
//     console.log(marke + ' raidziu skaicius yra ' + marke.length);
// }

// const carArray = ["BMW", "Audi", "Opel", "Volvo", "Citroen"];
// carArray.forEach((car) => {
//   console.log(`${car} susideda is ${car.length} raidziu`);
// });
// uzduotis 7

// const klaidos = {
//     "ui87": "Grafinės sąsajos klaida navigacijoje",
//     "sys12": "Trūksta operatyviosios atminties sistemoje",
//     "db32": "Duomenų bazės klaida",
//     "net404": "Tinklo ryšio klaida - puslapis nerastas",
// };

// const klaida = ["ui87", "sys12", "db32", "net404", "ui87"];

// console.log("klaidos:");

// for (let i = 0; i < klaida.length; i++) {
//     const Kodas = klaida[i];
//     const klaidoss = klaidos[Kodas];
//     if (klaidoss) {
//         console.log(`${Kodas}: ${klaidoss}`);
//     } else {
//         console.log(`${Kodas}: Nepavyko rasti klaidos`);
//     }
// }


// const errorArray = ["123", "432", "654", "888", "999"];
// errorArray.forEach((error) => {
//   switch (error) {
//     case "123":
//       console.log("Grafinės sąsajos klaida navigacijoje");
//       break;
//     case "432":
//       console.log("Trūksta operatyviosios atminties sistemoje");
//       break;
//     case "654":
//       console.log("Prarastas rysys su duomenu baze");
//       break;
//     case "888":
//       console.log("Neturi reikiamu teisiu");
//       break;
//     case "999":
//       console.log("Per ilgas uzklausos apdorokjimo laikas");
//       break;
//     default:
//       console.log("Klaida neatpazinta");
//   }
// });

// uzduotis 8

// const likuciai = [74, 54, 32];
// const pardavimas = 5;

// console.log("likuciai:");

// for (let i = 0; i < likuciai.length; i++) {
//     const likutis = likuciai[i];
//     const dienos = Math.ceil(likutis / pardavimas);
//     console.log(`${likutis} vnt. prekės užteks maždaug ${dienos} dienų`);
// }

// uzduotis 9


// const pazymiai = [];
// const kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 10);
//     pazymiai.push(atsitiktinis);
// }
// let suma = 0;

// console.log(pazymiai);

// for (let i = 0; i < pazymiai.length; i++) {
//     suma += pazymiai[i];
// }

// let vidurkis = suma / kiekis;

// console.log('Vidurkis: ', vidurkis);

// for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i]< 5){
//         console.log('Neigiamas: ', pazymiai[i])
//     } else if (pazymiai[i] >= 5) {
//         console.log('Teigiamas: ' ,pazymiai[i])
//     }
// }

//    uzduotys 10  

// let pirmas = [];
// let antras = [];

// const kiekis = 5;

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 10);
//     pirmas.push(atsitiktinis);
// }

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 10);
//     antras.push(atsitiktinis);
// }

// console.log(pirmas, antras);

// let suma1 = 0;

// for (let i = 0; i < pirmas.length; i++) {
//     suma1 += pirmas[i];
// }

// let vidurkis1 = suma1  / kiekis;

// let suma2 = 0;

// for (let i = 0; i < antras.length; i++) {
//     suma2 += antras[i];
// }

// let vidurkis2 = suma2 / kiekis;

// console.log('Pirmo vidurkis:', vidurkis1);
// console.log('Antro vidurkis:', vidurkis2);

// if (vidurkis1 > vidurkis2) {
//     console.log('Pirmo studento  vidurkis didesnis')
// } else {
//     console.log('Antro studento vidurkis didesnis')
// }

//    uzduotys 11 


// let zodziai = ['Automobilis', 'Kompiuteris', 'Gele', 'Vaza', 'Telefonas'];

// let trumpi = [];

// console.log(zodziai)

// for (let zodz of zodziai) {
//     if (zodz.length < 5) {
//         trumpi.push(zodz);
//         console.log('Zodis trumpesnis nei 5 raides' ,zodz);
//     }
// }

// console.log(trumpi);