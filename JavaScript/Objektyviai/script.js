// let studentas1 = {
//     vardas: 'Tomas',
//     mokykla: 'KTU'
// };

// console.log(studentas1);

// let automobilis = {
//     marke: 'Audi',
//     modelis: 'A4',
//     rida: 148765,
//     darbinis_turis: 1.6,
//     gamybos_metai: 2012
// };

// console.log(automobilis);

//  --------------------------------------------  Uzduotys 1
// let studentas = {
//     vardas: 'Natalja',
//     pavarde: 'Tomashevic',
//     amzius: '30',
//     ugis: '174',
//     kursas: 1,
//     mokykla: 'KTU'
// }

// console.log(studentas);
// console.log(studentas.vardas);
// console.log(studentas.amzius);

//  --------------------------------------------  Uzduotys 2

// let filmas = {
//     pavadinimas: 'KungFu',
//     rezisierius: 'Jacky Chan',
//     biudzetas: 5000000,
//     uzdarbis: 35000000,
//     zanras: 'Veiksmo komedija',
//     trukme: '2 valandos',
//     isleista: '2004',
//     aktoriai: [
//         'Jacky Chan',
//         'Marlyn Monroe',
//         'Arnold Svarcneger'
//     ]
// }

// let aktoriukiekis = filmas.aktoriai.length;

// console.log(filmas);

// pelnas = filmas.uzdarbis - filmas.biudzetas;

// const metai = new Date().getFullYear();

// console.log('Pelnas: ' ,pelnas);
// console.log('Is viso aktoriu' ,aktoriukiekis);
// console.log('Isleista pries' ,metai - filmas.isleista);

// --------------------------------------------   Uzduotys 3

// const knyga1 = {
//     pavadinimas: "Pirmos knygos pavadinimas",
//     autorius: "Pirmojo autoriaus Vardas Pavardė",
//     zanras: "Romanas",
//     kaina: 20.99,
//     puslapiuKiekis: 300,
//     skyriai: ["Skyrius 1", "Skyrius 2", "Skyrius 3"],
//     isleidimoMetai: 2020,
//     galimaRastiKnygynuose: true
// };

// const knyga2 = {
//     pavadinimas: "Antros knygos pavadinimas",
//     autorius: "Antrojo autoriaus Vardas Pavardė",
//     zanras: "Fantastika",
//     kaina: 15.99,
//     puslapiuKiekis: 250,
//     skyriai: ["Skyrius A", "Skyrius B", "Skyrius C", "Skyrius D"],
//     isleidimoMetai: 2021,
//     galimaRastiKnygynuose: false
// };

// console.log('Pirmoji kynga: ' ,knyga1);
// console.log('Antroji knyga: ' ,knyga2);

// if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
//     console.log('Pirmoji knyga turi daugiau puslapiu')
// } else {
//     console.log('Antroji knyga turi daugiau puslapiu')
// }

// if (knyga1.skyriai.length > knyga2.skyriai.length) {
//     console.log('Pirmoji knyga turi daugiau skyriu');
// } else {
//     console.log('Antroji knyga turi daugiau skyriu');
// }

// if (knyga1.kaina < knyga2.kaina*2) {
//     console.log('Pigesnes knygos kaina , padvigubinus bus didesne')
// } else {
//     console.log('Ne vis butu pigesne')
// }

// --------------------------------------------   Uzduotys 4

// const preke1 = {
//     pavadinimas: "Prekė 1",
//     kaina: 25.99,
//     savikaina: 15.00,
//     kodas: "P001",
//     kiekisSandelyje: 100,
//     dėžėsMatmenys: { x: 10, y: 5, z: 3 }
// };

// const preke2 = {
//     pavadinimas: "Prekė 2",
//     kaina: 19.99,
//     savikaina: 12.00,
//     kodas: "P002",
//     kiekisSandelyje: 50,
//     dėžėsMatmenys: { x: 8, y: 4, z: 2 }
// };

// const preke3 = {
//     pavadinimas: "Prekė 3",
//     kaina: 35.99,
//     savikaina: 20.00,
//     kodas: "P003",
//     kiekisSandelyje: 75,
//     dėžėsMatmenys: { x: 12, y: 6, z: 4 }
// };

// console.log('Visos prekes');
// console.log(preke1);
// console.log(preke2);
// console.log(preke3);

// console.log('Pirmoji prekes kaina: ' + preke1.kaina, 'Antroji prekes kaina: ' + preke2.kaina, 'Trecioji prekes kaina: ' + preke3.kaina)

// if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
//     console.log('Preke brangesne: ' ,preke1)
// } else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
//     console.log('Preke brangesne: ' ,preke2)
// } else if (preke3.kaina > preke1.kaina && preke3.kaina > preke1.kaina) {
//     console.log('Preke brangesne: ' ,preke3)
// }

// let turys1 = 0;
// let turys2 = 0;
// let tyrys3 = 0;

// turys1 = preke1.dėžėsMatmenys.x * preke1.dėžėsMatmenys.y * preke1.dėžėsMatmenys.z;
// turys2 = preke2.dėžėsMatmenys.x * preke2.dėžėsMatmenys.y * preke2.dėžėsMatmenys.z;
// turys3 = preke3.dėžėsMatmenys.x * preke3.dėžėsMatmenys.y * preke3.dėžėsMatmenys.z;

// console.log('Pirmos prekes turys: ' ,turys1);
// console.log('Antros prekes turys: ' ,turys2);
// console.log('Trecios prekes turys: ' ,turys3);

// let pelnas1 = 0;
// let pelnas2 = 0;
// let pelnas3 = 0;

// pelnas1 = (preke1.kaina - preke1.savikaina) * preke1.kiekisSandelyje;
// pelnas2 = (preke2.kaina - preke2.savikaina) * preke2.kiekisSandelyje;
// pelnas3 = (preke3.kaina - preke3.savikaina) * preke3.kiekisSandelyje;

// console.log('Pirmos prekes pelningumas: ', pelnas1.toFixed(2));
// console.log('Antros prekes pelningumas: ', pelnas2.toFixed(2));
// console.log('Trecios prekes pelningumas: ', pelnas3.toFixed(2));
// --------------------------------------------   Uzduotys 5

// const automobilis = {};

// automobilis.marke = "Toyota";
// automobilis.modelis = "Camry";
// automobilis.rida = 50000;
// automobilis.gamybosMetai = 2018;
// automobilis.spalva = "Balta";
// automobilis.darbinisTuris = 2.0;
// automobilis.dauzta = false;
// automobilis.parduodama = true;

// console.log("Automobilio informacija: ", automobilis);

// const metai = new Date().getFullYear();

// let senumas = 0;

// senumas = metai - automobilis.gamybosMetai;

// console.log('Automobiliui jau: ' , senumas, 'metai');

// let nuvaziavo = 0;

// nuvaziavo = automobilis.rida / senumas;

// console.log ('Per metus nuvaziuoja vidutiniskai: ', nuvaziavo, 'KM');

// -------------------------------------------- uzduotys 6

// const zmogus1 = {
//     vardas: "John",
//     amzius: 30,
//     miestas: "New York",
//     lytis: "vyras",
//     hobis: "kelionės"
// };

// const zmogus2 = {
//     vardas: "Anna",
//     amzius: 25,
//     miestas: "Los Angeles",
//     lytis: "moteris",
//     hobis: "sportas"
// };

// console.log("Pirmo zmogaus informacija:", zmogus1);
// console.log("Antro zmogaus informacija:", zmogus2);

// const skirtumas = (zmogus1.amzius - zmogus2.amzius);
// console.log("Amziaus skirtumas:", skirtumas);

// if (zmogus1.miestas === zmogus2.miestas) {
//     console.log("miestai sutampa.");
// } else {
//     console.log("miestai nesutampa.");
// }

// if (zmogus1.lytis !== zmogus2.lytis) {
//     console.log("lytys yra skirtingos.");
// } else {
//     console.log("lytys yra vienodos.");
// }

// ------------------------------------ uzduotys 7

// let knygynas = {
//     pavadinimas: "Knygų Rojus",
//     adresas: "Gatvės g. 123, Miestas",
//     "plotas (kv. m.)": 300,
//     "kiek turi knygų": 5000,
//     "darbo valandos": "Pirmadieniais - Penktadieniais: 9:00-19:00, Šeštadieniais: 10:00-17:00",
//     "ar atidarytas": true
// };

// for (let savybes in knygynas) {
//     if (knygynas.hasOwnProperty(savybes)) {
//         console.log(savybes + ": " + knygynas[savybes])
//     }
// }

// console.log("\nSavybes nera string tipo: ");

// for (let savybes in knygynas) {
//     if (knygynas.hasOwnProperty(savybes)) {
//         let reiksme = knygynas[savybes];
//         if (typeof reiksme !== 'string') {
//             console.log(savybes + ": " + reiksme);
//         }
//     }
// }

// ------------------------------------ uzduotys 8

// let studentas1 = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis",
//     programa: "Informatika",
//     pazymiai: [8, 9, 7, 10, 9]
// };

// let studentas2 = {
//     vardas: "Laura",
//     pavarde: "Lauraitė",
//     programa: "Cheminė inžinerija",
//     pazymiai: [9, 8, 9, 8, 7]
// };

// console.log('Studentas pirmas: ', studentas1);
// console.log('Studentas antras: ', studentas2);

// let sum1 = 0;

// for (i = 0; i < studentas1.pazymiai.length; i++) {
//     sum1 += studentas1.pazymiai[i]
// }

// let vidurkis1 = sum1 / studentas1.pazymiai.length;
// console.log('Pirmo studento: ' , vidurkis1);

// let sum2 = 0;

// for (i = 0; i < studentas2.pazymiai.length; i++) {
//     sum2 += studentas2.pazymiai[i];
// }

// let vidurkis2 = sum2 / studentas2.pazymiai.length;
// console.log('Antro studento: ' , vidurkis2);

// if (vidurkis1 > vidurkis2) {
//     console.log('Pirmo studento vidurkis didesnis', studentas1.vardas , studentas1.pavarde);
// } else {
//     console.log('Antro studento vidurkis didesnis', studentas2.vardas , studentas2.pavarde);
// }