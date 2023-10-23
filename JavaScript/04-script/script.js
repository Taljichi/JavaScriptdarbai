// 0.94 Euro to dollar

// 1.06 dollar to Euro

// const kursas = 1.06;

// const eurai = 100;

// const doleriai = eurai * kursas;

// console.log(doleriai + ' doleriai yra ' + eurai + ' euru.');

/* *************** 2 uzduotis *************** */

// // Valiutos keitimo kursas: 1 doleris = 0.96 euro
// const valiutosKursas = 0.96;

// // Suma doleriais, kurią norite paversti į eurus
// const doleriai = 100;

// // Paverčiame dolerius į eurus
// const eurai = doleriai * valiutosKursas;

// console.log(doleriai + ' dolerių yra ' + eurai + ' eurų.');

/* *************** 3 uzduotis *************** */

// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters. When using English measurements, pounds should be divided by inches squared. This should then be multiplied by 703 to convert from lbs/inches2 to kg/m2.


// let svoris = 100;
// let ugis = 1.84;

// const bmi = (svoris / (ugis * ugis)).toFixed(2);

// console.log('BMI ' + bmi);

// /* *************** 4 uzduotis *************** */

// let kilom = 327;
// let milia = 1.6;

// const kilomilia = kilom * milia;

// console.log(kilomilia);


// /* *************** 5 uzduotis *************** */

// let valanda = 1;

// const minute = valanda * 60;
// const sekundes = valanda * (60 * 60);

// console.log(minute + ' minutes', sekundes +' sekundes');

/* *************** 6 uzduotis *************** */

// Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų
// kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.

// let metai = 31;

// let dienos = metai * 365;
// let valandos = dienos * 24;
// let minutes = valandos * 60;
// let sekundes = minutes * 60;

// console.log(metai + ' metai');
// console.log(dienos + ' dienos');
// console.log(valandos + ' valandos');
// console.log(minutes + ' minutes');
// console.log(sekundes + ' sekundes');

/* *************** 7 uzduotis *************** */

// let metai = 30;

// let max = (220 - metai) * 0.85;
// let min = (220 - metai) * 0.65;

// console.log(metai + ' Metu');
// console.log( max + ' max sirdies ritmas');
// console.log(min + ' min sirdies ritmas');

/* *************** 8 uzduotis *************** */

let pajamos = 1000;
let npd = 625;

if (pajamos > 1926) {
    npd = 400 - (0.18 * (pajamos - 642));
}else if (pajamos > 840) {
    npd = 625 - (0.42 * (pajamos - 840));
}

console.log(npd, ' taikomas npd');
let tarifas = ((pajamos - npd) * 0.2);
let socd = (pajamos * 0.195);
let alga = (pajamos - (tarifas + socd)).toFixed(2);
console.log(alga, 'alga');



