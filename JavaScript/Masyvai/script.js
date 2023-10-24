//            **********************              Uzduotis 1

// let studijos = ['programuotojas', 'investitorius', 'vadybininkas']

// console.log(studijos[0]);
// console.log(studijos[1]);
// console.log(studijos[2]);


//            **********************              Uzduotis 2


// let salys = ['Lietuva', 'Lenkija', 'Latvija', 'Estija'];

// console.log('Šalys ', salys[0]);
// console.log('Šalys ', salys[1]);
// console.log('Šalys ', salys[2]);
// console.log('Šalys ', salys[3]);

//            **********************              Uzduotis 3


// let projektai = ['Teatro', 'Festivalio', 'Koncertas'];


// console.log(projektai);
// console.log(projektai[0]);
// console.log(projektai[1]);
// console.log(projektai[2]);

//            **********************              Uzduotis 4

// let skaiciai = [1, 26, 5, 9, 13];

// let didesnis = skaiciai.filter(Number => Number >5);

// console.log(didesnis);

//            **********************              Uzduotis 5

// let skaiciai = [];
// let kiekis = 20;

// for (let i = 0; i < kiekis; i++) {
//     let randomskaiciai = Math.floor(Math.random() * 100);
//     skaiciai.push(randomskaiciai);
// }

// console.log(skaiciai);

// let suma = 0;

// for (let i = 0; i < skaiciai.length; i++) {
// if (skaiciai[i] % 4 == 0) {
//     suma += skaiciai[i];
// } 
// }

//     console.log(suma);

//            **********************              Uzduotis 6


// let pazymiai = [];
// let kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     let randompazymiai = Math.floor(Math.random() * 10);
//     pazymiai.push(randompazymiai);
// }

// console.log(pazymiai);

// let suma = 0;

// for (let i = 0; i < pazymiai.length; i++) {
//     suma += pazymiai[i];
// }

// let vidurkis = suma / pazymiai.length;

// console.log("Pazymius suma:", suma);
// console.log("Vidurkis:", vidurkis);

//            **********************              Uzduotis 7


// let pazymiai = [];
// let kiekis = 5;

// for (let i = 0; i < kiekis; i++) {
//     let randompazymiai = Math.floor(Math.random() * 10);
//     pazymiai.push(randompazymiai);
// }

// console.log(pazymiai);

// let suma = 0;

// for (let i = 0; i < pazymiai.length; i++) {
//     suma += pazymiai[i];
// }

// let vidurkis = suma / kiekis;

// console.log("Pazymius suma:", suma);
// console.log("Vidurkis:", vidurkis);

// for (let i  = 0; i < kiekis; i++) {
//     if (pazymiai[i] > vidurkis) {
//         console.log(pazymiai[i]);
//     }
// }

//            **********************              Uzduotis 8

// let skaiciai = [];
// let kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     skaiciai.push(Math.floor(Math.random()*100));
// }

// console.log(skaiciai);


// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 2 == 0) {
//         kvadratas = skaiciai[i] * skaiciai[i];
//     }
//     console.log(skaiciai[i] + ' <-- kvadaratas = ', kvadratas)
// }


//            **********************              Uzduotis 9

// let pazymiai = [];
// let kiekis = 5;

// for (let i = 0; i < kiekis; i++) {
//     pazymiai.push(Math.floor(Math.random()*10));
// }

// console.log(pazymiai);

// for (let i = 0; i < pazymiai.length; i++) {
//     let pazymys = pazymiai[i];
//     let pranesimas = "";

//     if (pazymys >= 5) {
//         pranesimas = "Teigiamas pazymys";
//     } else {
//         pranesimas = "Neigiamas pazymys";
//         let balutruko = 5 - pazymys;
//         pranesimas += `(truko ${balutruko} balai iki teigiamo pazymio)`
//     }
//     console.log(`${pazymys}: ${pranesimas}`);
// }


// const pazymiai = [];
// const kiekis = 5;

// for (let i = 0; i < kiekis; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 10 + 1);
//     pazymiai.push(atsitiktinis);
// }

// console.log(pazymiai);

// for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i] >= 5) {
//         console.log(pazymiai[i] + ' pazymys teigiamas.');
//     }   else {
//         console.log(pazymiai[i] + ' pazymys neigiamas. Iki teigiamo balo pritruko ' + (5 - pazymiai[i]));
//     }
// }

//            **********************              Uzduotis 10

// let zodziai = ["medis", "alus", "automobilis", "programavimas", "rytas"];

// let suma = 0;

// for (let i = 0; i < zodziai.length; i++) {
//     let zodis = zodziai[i];
//     let skaicius = zodis.length;
//     suma += skaicius;
//     console.log(`${zodis}: ${skaicius} raides`);
// }

// for(let I = 0; I < zodziai.length; I++){
//     suma += zodziai[I].length;
//     console.log(`${zodziai[I]}: ${zodziai[I].length} raides`);
//  }

// console.log(`raidziu suma: ${suma}`);

//            **********************              Uzduotis 11

// let skaiciai = [];
// let kiekis = 10;

// for (let i = 0; i < kiekis; i++) {
//     skaiciai.push(Math.floor(Math.random()*100));
// }

// console.log(skaiciai);

// let suma = 0;
// let kiekis1 = 0;

// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 3 === 0) {
//         suma += skaiciai[i];
//         kiekis1++;
//     }
// }

// let vidurkis = kiekis1 > 0 ? suma / kiekis1 : 0;

// console.log("Pradiniai duomenys: ", skaiciai);
// console.log("Suma skaičių, kurie dalijasi iš 3: ", suma);
// console.log("Vidurkis: ", vidurkis);



