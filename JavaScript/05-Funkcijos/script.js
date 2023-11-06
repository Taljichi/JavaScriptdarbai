// ======================== 1 uzduotys

// function vardas() {
//     console.log('Mano vardas Marius');
//     console.log('Noriu isbandyti savo jegas');
// }

// vardas();

// ======================== 2 uzduotys

// function eilerastis() {
//     console.log('Mano batai buvo du');
//     console.log('Vienas dingo nerandu');
//     console.log('As su vienu bateliu');
//     console.log('Niekur eiti negaliu');
// }

// eilerastis()
// eilerastis()
// eilerastis()
// eilerastis()

// ======================== 3 uzduotys

// function vardas() {
//     console.log('Natalja')
// }

// function metai() {
//     console.log('30')
// }

// function meile() {
//     console.log('Marius')
// }

// vardas()
// metai()
// meile()

// ======================== 4 uzduotys

// function pirmas() {
//     console.log('Mano batai')
// }

// function antras() {
//     console.log('Buvo du')
// }

// function trecias() {
//     console.log(pirmas(), antras());
// }

// trecias()

// ======================== 5 uzduotys

// let kiekis = 2;
// let sum = 0;

// function pirmas() {
//     for (let i = 0; i < kiekis; i++) {
//         let atsitiktinis = Math.floor(Math.random() * 10);
//         sum += atsitiktinis;
//         console.log(sum)
//     }
// }

// pirmas()

// ======================== 6 uzduotys

// function policininkas(vardas, pavardė, amžius, alga, etatas, specializacija) {
//     console.log("Policininko informacija:");
//     console.log("Vardas: " + vardas);
//     console.log("Pavardė: " + pavardė);
//     console.log("Amžius: " + amžius + " metai");
//     console.log("Alga: " + alga + " EUR");
//     console.log("Etatas: " + etatas);
//     console.log("Specializacija: " + specializacija);
// }

// policininkas("Jonas", "Jonaitis", 30, 2000, "Pilnas", "Eismo policininkas");

// ======================== 7 uzduotys

// function skaicius() {
//     const skaiciai = [];
//     for (let i = 0; i < 10; i++) {
//         skaiciai.push(Math.floor(Math.random() * 100));
//     }
//     console.log(skaiciai.join(' '));
// }

// for (let i = 0; i < 5; i++) {
//     skaicius();
// }

// ======================== 8 uzduotys

// function skaiciu() {
//     let skaicius = Math.floor(Math.random() * 100); 
//     console.log(skaicius);
// }

// for (let i = 0; i < 10; i++) {
//     skaiciu();
// }

// function skaicius() {
//     let skaiciai = Math.floor(Math.random() * 100);
//     console.log(skaiciai);
// }

// for (let i = 0; i < 5; i++) {
//     skaicius();
// }

// ======================== 9 uzduotys

// function pasisveikinimas(vardas) {
//     console.log('Labas,' + vardas);
// }

// function visogero(vardas) {
//     console.log('Viso gero, ' + vardas);
// }

// let vardas = 'Marius'

// pasisveikinimas(vardas)
// visogero(vardas)

// ======================== 10 uzduotys

// function palygink(skaičius1, skaičius2) {
//     if (skaičius1 > skaičius2) {
//         console.log(skaičius1 + " yra didesnis uz " + skaičius2);
//     } else if (skaičius2 > skaičius1) {
//         console.log(skaičius2 + " yra didesnis uz " + skaičius1);
//     } else {
//         console.log("Skaiciai " + skaičius1 + " ir " + skaičius2 + " yra lygus.");
//     }
// }

// palygink(5, 10);
// palygink(8, 2);
// palygink(7, 7);

// ======================== 11 uzduotys

// function Automobiliai(marke, modelis, gamybosMetai, darbinisTuris) {
//     console.log("Automobilis: " + marke + " " + modelis);
//     console.log("Gamybos metai: " + gamybosMetai);
//     console.log("Darbinis tūris: " + darbinisTuris + " litrai");
//     console.log("----------");
// }

// Automobiliai("Volkswagen", "Golf", 2020, 2.0);
// Automobiliai("Ford", "Focus", 2019, 1.6);

// ======================== 12 uzduotys


// function atsitiktiniai() {
//     let sk1 = Math.floor(Math.random()* 100);
//     let sk2 = Math.floor(Math.random()* 100);

//     suma(sk1, sk2);
//     atimtis(sk1,sk2);
//     dalyba(sk1,sk2);
//     daugyba(sk1,sk2);
// }


// function suma(sk1, sk2) {
//     let suma = sk1 + sk2;
//     console.log(sk1, "+", sk2, "=", suma);
// }

// function atimtis(sk1, sk2) {
//     let skirtumas = sk1 - sk2;
//     console.log(sk1, "-", sk2, "=", skirtumas);
// }

// function dalyba(sk1, sk2) {
//     let dalyba = sk1 / sk2;
//     console.log(sk1, "/", sk2, "=", dalyba);
// }

// function daugyba(sk1, sk2) {
//     let daugyba = sk1 * sk2;
//     console.log(sk1, "*", sk2, "=", daugyba);
// }


// for (let i = 0; i < 5; i++) {
//     atsitiktiniai()
//     console.log('----------------')
// }

// ======================== 13 uzduotys

// function zodziu(zodziuMasyvas) {
//     for (let i = 0; i < zodziuMasyvas.length; i++) {
//       const zodis = zodziuMasyvas[i];
//       const ilgis = zodis.length;
//       console.log(`${zodis}: ${ilgis} simboliai`);
//     }
//   }
  
//   const zodziai = ["Geras", "rytas", "labas", "pasauli"];
  
//   zodziu(zodziai);

// ======================== 14 uzduotys

//   const masyvas1 = [2, 4, 6, 8, 10];
//   const masyvas2 = [3, 5, 7, 9, 11];

// function spausdinti(masyvas) {
//     for (let i = 0; i < masyvas.length; i++) {
//       const skaicius = masyvas[i];
//       const kvadratas = skaicius * skaicius;
//       const dalyba = kvadratas / 2;
//       console.log(`Skaicius: ${skaicius}, Kvadratas: ${kvadratas}, Dalyba is dvieju: ${dalyba}`);
//       console.log('----------------------------')
//     }
//   }  
//   spausdinti(masyvas1);
//   spausdinti(masyvas2);

// ======================== 15 uzduotys

// function informacija(vardas, pavarde, pazymiai) {
//     console.log(`Studento vardas: ${vardas}`);
//     console.log(`Studento pavardė: ${pavarde}`);
//     console.log(`Pažymiai: ${pazymiai.join(', ')}`);
  
//     const suma = pazymiai.reduce((acc, pazymys) => acc + pazymys, 0);
//     const vidurkis = suma / pazymiai.length;
//     console.log(`Pažymių vidurkis: ${vidurkis}`);
//   }
  
//   const vardas = "Jonas";
//   const pavarde = "Jonaitis";
//   const pazymiai = [8, 9, 7, 10, 8];
  
//   informacija(vardas, pavarde, pazymiai);


// ======================== 16 uzduotys

// function didziausia(masyvas) {
//     if (masyvas.length === 0) {
//       console.log("Masyvas yra tuščias.");
//       return;
//     }
//     const didziausias = Math.max(...masyvas);
//     console.log(`Didžiausias skaičius masyve yra: ${didziausias}`);
//   }
  
//   const masyvas1 = [];
//   const masyvas2 = [];
//   const masyvas3 = [];
  
//   function skaciai(masyvas, kiekis) {
//     for (let i = 0; i < kiekis; i++) {
//       masyvas.push(Math.floor(Math.random() * 100));
//     }
//   }
  
//   skaciai(masyvas1, 5);
//   skaciai(masyvas2, 7);
//   skaciai(masyvas3, 3);
  
//   console.log("Pirmas masyvas:", masyvas1);
//   console.log("Antras masyvas:", masyvas2);
//   console.log("Trečias masyvas:", masyvas3);
  
//   didziausia(masyvas1);
//   didziausia(masyvas2);
//   didziausia(masyvas3);
  


// ======================== 17 uzduotys

// function grazintiSakini(sakinys) {
//     return sakinys;
// }

// let manoSakinys = grazintiSakini("Tai yra mano norimas sakinys.");
// console.log(manoSakinys);



// ======================== 18 uzduotys

// function atsitiktinisSkaicius() {
//     return Math.random();
// }

// for (let i = 0; i < 5; i++) {
//     let atsakymas = atsitiktinisSkaicius();
//     console.log("Atsitiktinis skaičius:", atsakymas);
// }


// ======================== 19 uzduotys

// function generuotiSakini(vardas, vidurkis) {
//     return "Studentas " + vardas + " turi vidurkį " + vidurkis;
// }

// let atsakymas1 = generuotiSakini("Tomas", 8.7);
// let atsakymas2 = generuotiSakini("Laura", 9.2);

// console.log(atsakymas1);
// console.log(atsakymas2);

// ======================== 20 uzduotys

// function maziausiasDaliklis(sk) {
//     for (let i = 2; i <= sk; i++) {
//         if (sk % i === 0) {
//             return i;
//         }
//     }
//     return sk;
// }
// for (let i = 10; i <= 30; i++) {
//     var maziausias = maziausiasDaliklis(i);
//     console.log(`Mažiausias daliklis skaičiui ${i} yra ${maziausias}`);
// }


// ======================== 21 uzduotys

// function arPirminis(sk) {
//     if (sk <= 1) {
//         return false;
//     }
//     for (let i = 2; i < sk; i++) {
//         if (sk % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// for (let i = 2; i <= 15; i++) {
//     var pirminis = arPirminis(i);
//     console.log(`${i} ${pirminis}`);
// }


// ======================== 22 uzduotys

// function sudeti(sk1, sk2) {
//     return sk1 + sk2;
// }

// function atimti(sk1, sk2) {
//     return sk1 - sk2;
// }

// function dauginti(sk1, sk2) {
//     return sk1 * sk2;
// }

// function generuotiAtsitiktiniusSkaicius(kiekis) {
//     const skaiciai = [];
//     for (let i = 0; i < kiekis; i++) {
//         skaiciai.push(Math.floor(Math.random() * 100));
//     }
//     return skaiciai;
// }

// function atliktiSkaiciavimus() {
//     const skaiciai = generuotiAtsitiktiniusSkaicius(5); 
//     console.log("Generuoti skaičiai:", skaiciai);
    
//     for (let i = 0; i < skaiciai.length - 1; i++) {
//         const sk1 = skaiciai[i];
//         const sk2 = skaiciai[i + 1];
        
//         const suma = sudeti(sk1, sk2);
//         console.log(`${sk1} + ${sk2} = ${suma}`);
        
//         const skirtumas = atimti(sk1, sk2);
//         console.log(`${sk1} - ${sk2} = ${skirtumas}`);
        
//         const sandauga = dauginti(sk1, sk2);
//         console.log(`${sk1} * ${sk2} = ${sandauga}`);
//     }
// }

// atliktiSkaiciavimus();


// ======================== 23 uzduotys

// function rastiSuma(skaičiųMasyvas) {
//     let suma = 0;
//     for (let i = 0; i < skaičiųMasyvas.length; i++) {
//         suma += skaičiųMasyvas[i];
//     }
//     return suma;
// }

// const masyvas1 = [2, 4, 6, 8, 10];
// const masyvas2 = [1, 3, 5, 7, 9];

// const suma1 = rastiSuma(masyvas1);
// const suma2 = rastiSuma(masyvas2);

// console.log("Suma masyvo 1:", suma1);
// console.log("Suma masyvo 2:", suma2);

// if (suma1 > suma2) {
//     console.log("Masyvo 1 suma yra didesnė.");
// } else if (suma2 > suma1) {
//     console.log("Masyvo 2 suma yra didesnė.");
// } else {
//     console.log("Sumos yra lygios.");
// }


// ======================== 24 uzduotys

// function ilgiausiasZodis(zodziuMasyvas) {
//     let ilgiausias = "";
//     for (let i = 0; i < zodziuMasyvas.length; i++) {
//         if (zodziuMasyvas[i].length > ilgiausias.length) {
//             ilgiausias = zodziuMasyvas[i];
//         }
//     }
//     return ilgiausias;
// }

// const zodziai = ["katinas", "šuo", "gyvatele", "pingvinas", "eziukas"];

// const ilgiausias = ilgiausiasZodis(zodziai);

// console.log("Ilgiausias žodis:", ilgiausias);
// console.log("Šio žodžio ilgis:", ilgiausias.length);


// ======================== 25 uzduotys

// function arVisiTeigiami(pazymiuMasyvas) {
//     for (let i = 0; i < pazymiuMasyvas.length; i++) {
//         if (pazymiuMasyvas[i] < 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function konvertuotiIteksta(atsakymas) {
//     return atsakymas ? "visi studento pažymiai teigiami" : "studentas turi bent vieną neigiamą pažymį";
// }

// const pazymiai1 = [8, 9, 7, 10];
// const pazymiai2 = [8, -2, 9, 7, 10];


// const atsakymas1 = arVisiTeigiami(pazymiai1);
// const atsakymas2 = arVisiTeigiami(pazymiai2);

// console.log(konvertuotiIteksta(atsakymas1));
// console.log(konvertuotiIteksta(atsakymas2));
