//  Uzduotis pirma

// let pirmas = 7;
// let antras = 4;
// let trecias = 9;

// if (pirmas > antras) {
//     console.log('Didesnis')
// } else {
//     console.log('Mazesnis')
// }

// if (antras > trecias)  {
//     console.log('Didesnis')
// } else {
//     console.log('Mazesnis')
// }

// if (trecias > pirmas) {
//     console.log('Didesnis')
// } else {
//     console.log('Mazesnis')
// }

// if (pirmas == antras) {
//     console.log('Lygus')
// } else {
//     console.log('Nelygus')
// }

// if (antras == trecias) {
//     console.log('Lygus')
// } else {
//     console.log('Nelygus')
// }

// if (pirmas == 0) {
//     console.log('Lygus')
// } else {
//     console.log('Nelygus')
// }

// if (antras > 0 ) {
//     console.log('Teigiamas')
// } else {
//     console.log('Neigiamas')
// }

// if (trecias > 0) {
//     console.log('Teigiamas')
// } else {
//     console.log('Neigiamas')
// }

// Uzduotis antra

// const pazy = 9;

// if (pazy == 10) {
//     console.log('Puiku')
// } else if (pazy >=9) {
//     console.log('Labai gerai')
// } else if (pazy >=7) {
//     console.log('gerai')
// } else if (pazy >=5) {
//     console.log('patenkinimai')
// } else if (pazymis < 5) {
//     console.log('egzaminas neislaikytas')
// }

//116
// const skaicius = 8;

// if (skaicius % 2 === 0) {
//     console.log('lyginis');
// } else {
//     console.log('nelyginis');
// }


// if (skaicius % 7 === 0) {
//     console.log('Dalijasi is 7')
// } else {
//     console.log('Nesidalija is 7')
// }

// let failas = true;

// if (failas) {
//     console.log('Failas rastas')
// } else {
//     console.log('Failas nerastas')
// }
//125
// const skaicius = 7;

// if (skaicius % 2 === 0) {
//     console.log('Lyginis')
// } else if (skaicius % 5 === 0) {
//     console.log('Dalinasi')
// } else if (skaicius == 3) {
//     console.log('Lygus')
// } else {
//     console.log('Error')
// }


// const pirmas = 1;
// const antras = 5;
// const trecias = 2;

// if (pirmas == antras) {
//     console.log('Pirmi du skaiciai lygus')
// } else if (pirmas == trecias) {
//     console.log('pirmas ir trecias skaicius lygus')
// } else if (trecias > pirmas) {
//     console.log('Didesnis uz pirma')
// } else if (antras == (trecias * 2)) {
//     console.log('Antras lygus treciam sudvigubintam skaiciui')
// } else if (pirmas % 3 === 0) {
//     console.log('Dalinasi')
// } else {
//     console.log('Error')
// }

                        // salygos

// let skaicius1 = 7;
// let skaicius2 = 12;
// let skaicius3 = 5;

// if (skaicius1 >= skaicius2 && skaicius1 >= skaicius3) {
//     console.log('Pirmas skaičius yra didžiausias:', skaicius1);
// } else if (skaicius2 >= skaicius1 && skaicius2 >= skaicius3) {
//     console.log('Antras skaičius yra didžiausias:', skaicius2);
// } else {
//     console.log('Trečias skaičius yra didžiausias:', skaicius3);
// }

// if (skaicius1 <= skaicius2 && skaicius1 <= skaicius3) {
//     console.log('Pirmas skaičius yra mažiausias:', skaicius1);
// } else if (skaicius2 <= skaicius1 && skaicius2 <= skaicius3) {
//     console.log('Antras skaičius yra mažiausias:', skaicius2);
// } else {
//     console.log('Trečias skaičius yra mažiausias:', skaicius3);
// }

// let egzaminas1 = 5;
// let egzaminas2 = 7;
// let egzaminas3 = 10;

// let vidurkis = (egzaminas1 + egzaminas2 + egzaminas3) / 3;

// if (vidurkis >= 8 && vidurkis <= 10) {
//   console.log('Vidurkis yra [8-10].');
// } else if (vidurkis >= 5 && vidurkis <= 8) {
//   console.log('Vidurkis yra [5-8).');
// } else if (vidurkis < 5) {
//   console.log('Vidurkis yra mažesnis už 5.');
// }

// let pirmas = 19;
// let antras = 11;
// if (pirmas > antras || pirmas === 0) {
//   console.log('pirmas skaicius yra didesnis uz antraji arba yra lygus 0.');
// }
// if (antras > pirmas || antras === 5) {
//   console.log('antras skaicius yra didesnis uz pirmaji arba yra lygus 5.');
// }
// if (pirmas > antras && pirmas === 20) {
//   console.log('pirmas skaicius yra didesnis uz antraji ir yra lygus 20.');
// }
// if (antras > pirmas && antras < 100) {
//   console.log('antras skaicius yra didesnis uz pirmaji ir yra mazesnis uz 100.');
// }

// // Duomenys
// const darboValandosPerDiena = 8;
// const kepaluPerValanda = 10; // Pavyzdys: gali iškepti 10 kepalų per valandą
// const darbuotojuSkaicius = 2; // Pavyzdys: turite 2 darbuotojus
// const kepaloSavikaina = 1.5; // Pavyzdys: vieno kepalo savikaina yra 1.5 JAV doleriai
// const kepaloPardavimoKaina = 3; // Pavyzdys: vieno kepalo pardavimo kaina yra 3 JAV doleriai
// const uzsakymai = 80; // Pavyzdys: tą dieną turite 80 užsakymų

// // Skaičiavimai
// const kepaloPajamos = kepaloPardavimoKaina - kepaloSavikaina;
// const pajamosPerValanda = darbuotojuSkaicius * kepaluPerValanda * kepaloPajamos;
// const pajamosPerDiena = pajamosPerValanda * darboValandosPerDiena;
// const iskeptuKepaluPerDiena = darbuotojuSkaicius * kepaluPerValanda * darboValandosPerDiena;

// // Tikriname, ar kepykla spės iškepti visus užsakymus
// let uzsakymuSkirtumas = uzsakymai - iskeptuKepaluPerDiena;
// if (uzsakymuSkirtumas <= 0) {
//   console.log(`Kepykla spės iškepti visus ${uzsakymai} užsakymus.`);
// } else {
//   console.log(`Kepykla nespės iškepti ${uzsakymuSkirtumas} užsakymų.`);
// }

// // Apskaičiuojame pelną ir visų kepalų savikainą
// if (iskeptuKepaluPerDiena > 0) {
//   const visuKepaluSavikaina = iskeptuKepaluPerDiena * kepaloSavikaina;
//   const pelnas = pajamosPerDiena - visuKepaluSavikaina;
//   const pelnoDalis = (pelnas / pajamosPerDiena) * 100;

//   console.log(`Visų kepalų savikaina: $${visuKepaluSavikaina.toFixed(2)}`);
//   console.log(`Gautos pajamos: $${pajamosPerDiena.toFixed(2)}`);
//   console.log(`Pelnas: $${pelnas.toFixed(2)}`);
//   console.log(`Pelnas kaip procentas nuo pajamų: ${pelnoDalis.toFixed(2)}%`);
// } else {
//   console.log("Šiandien kepykla negaus pajamų, nes nespės iškepti užsakymų.");
// }