// Ciklas uzduotis 1

// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <=15; i += 2) {
//     console.log(i)
// }

// for (let i = 1; i <=20; i += 3) {
//     console.log([i]);
// }

// for (let i = 4; i <=20; i++) {
//     if (i % 4 == 0) {
//         console.log('skaicius', i, 'dalinasi is 4')
//     }
// }

// uzduotis 2

// let pradzia = 2;
// let pabaiga = 8;

// if (pradzia < pabaiga) {
//     for (let i = pradzia; i <= pabaiga; i++) {
//         console.log(i + ' ' + i * i);
//     }
// }


// let pradzia = 1;
// let pabaiga = 7;

// if (pradzia < pabaiga) {
//     for (let i = pradzia; i <= pabaiga; i++) {
//         if(i % 8 === 0 || i % 2 !== 0) {
//             console.log(i)
//         }
//     }   
// }

//     zenklai  =        ||   reiskia arba     o   !==   (Nelyginis)

// let pradzia = 4;
// let pabaiga = 20;

// if (pradzia < pabaiga) {
//     for (let i = pradzia; i <=pabaiga; i++){
//         if (i % 8 == 0 || i % 2 !==0) {                     
//             console.log(i)
//         }
//     }
// }


// function sudaugint(pirmas, antras) {
//     let rezultatas = 0;
//     for (let i = 0; i < pirmas; i++) {
//       rezultatas += antras;
//     }
//     return rezultatas;
//   }

//   let pirmas = 5;
//   let antras = 3;
//   let rezultatas = sudaugint(pirmas, antras);

//   console.log('Sudauginti skaičiai be daugybos:', rezultatas);

// const sk1 = 5;
// const sk2 = 3;
// let result = 0;

// if (sk2 > 0) {
//     for (let i = 0; i < sk2; i++) {
//         result += sk1;
//     }
// } else if (sk2 < 0) {
//     for (let i = 0; i > sk2; i--) {
//         result -= sk1;
//     }
// }

// console.log(result);

// let start = 0;

// while(start < 20) {
//     start++;
//     console.log(start);
// }

// let start = 0;

// while(start < 50) {
//     if(start % 2 == 0) {
//         console.log('Lyginis', start);
//     } else (start % 2 !== 0) {
//         console.log('Nelyginis', start)
//     }
//     start++;
// }

// let end = 50;
// let i = 0;
// while(i++ < end){
// 	i%2===0?console.log(`${i} Lyginis`):console.log(`${i} Nelyginis`);
// }


// let pirmas = 25;

// while (pirmas <= 50) {
//   if (pirmas % 3 === 0) {
//     console.log('skaičius', pirmas, 'dalinasi iš 3');
//   }
//   pirmas++;
// }

// let sk1 = 1;

//  while(sk1 <= 5) {
//     if (sk1 % 3 == 0) {
//         console.log('Skaicius 3 dalinasi is', sk1);
//     } else if (sk1 % 5 == 0) {
//         console.log('Skaicius 5 dalinasi is', sk1);
//     }
//     sk1++;
//  }

// let ska = 1;
// let suma = 0;

// while (ska <= 100) {
//     if (ska % 2 == 0) {
//         suma += ska;  
//     }
//     ska++;
// }

// console.log(suma)

// let skaicius = 1;

// while (skaicius < 5) {
//     console.log(skaicius, skaicius * skaicius);
//     skaicius++;
// }

// let random = Math.floor(Math.random() * 10) + 1; 

// while (random > 0) {
//   const skaicius = Math.random();
//   console.log('Atsitiktinis skaičius:', skaicius);
//   random--;
// }


// let random = Math.floor(Math.random() * 10) + 1; 
// let sum = 0;

// while (random > 0) {
//   const skaicius = Math.random();
//   console.log('Atsitiktinis skaičius:', skaicius);
//   sum +=skaicius;
//   random--;
// }


// let kiekis1 = Math.floor(Math.random() * 10); // Sugeneruojamas atsitiktinis kiekis1 nuo 0 iki 9
// let suma1 = 0;
// while (kiekis1 > 0) {
//   let skaicius = Math.floor(Math.random() * 100); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 99
//   console.log(skaicius);
//   suma1 += skaicius;
//   kiekis1--;
// }
// console.log("Visų atsitiktinių skaičių suma yra " + suma1);

// console.log(sum);

// Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti.Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių(gali būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1 dalies).Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima inventoriuje.Pardavinėkite tol kol nieko neliks.


// const prekes = {
//     preke1: 5,
//     preke2: 8, 
//     preke3: 9, 
// }
//   while(prekes > 0) {
//     const prekes = {
//         preke1: Math.floor(Math.random() * 10),
//         preke2: Math.floor(Math.random() * 10),
//         preke3: Math.floor(Math.random() * 10),
//     }
//   }


//   let inventoriausPrekes = {
//     preke1: 10, // Pavyzdinės prekių atsargos
//     preke2: 8,
//     preke3: 15,
//   };
  
//   while (inventoriausPrekes.preke1 > 0 || inventoriausPrekes.preke2 > 0 || inventoriausPrekes.preke3 > 0) {
//     let pirktiPreke1 = Math.floor(Math.random() * 10) ;
//     let pirktiPreke2 = Math.floor(Math.random() * 10) ;
//     let pirktiPreke3 = Math.floor(Math.random() * 10) ;
  
//     if (inventoriausPrekes.preke1 >= pirktiPreke1) {
//       inventoriausPrekes.preke1 -= pirktiPreke1;
//     }
//     if (inventoriausPrekes.preke2 >= pirktiPreke2) {
//       inventoriausPrekes.preke2 -= pirktiPreke2;
//     }
//     if (inventoriausPrekes.preke3 >= pirktiPreke3) {
//       inventoriausPrekes.preke3 -= pirktiPreke3;
//     }
  
//     console.log("Pirkome " + pirktiPreke1 + " prekes 1, " + pirktiPreke2 + " prekes 2, " + pirktiPreke3 + " prekes 3");
//   }


// let skaicius = 1;

// function Pirminis(skaicius) {
//     if (skaicius <= 1) return false;
//     if (skaicius <= 3) return true;
  
//     if (skaicius % 2 === 0) return false;
  
//     for (let i = 3; i * i <= skaicius; i += 2) {
//       if (skaicius % i === 0) return false;
//     }
  
//     return true;
//   }
  
 
  
//   while (!Pirminis(skaicius)) {
//     skaicius++;
//   }
  
//   console.log('Pirmas rastas pirminis skaičius yra:', skaicius);
  