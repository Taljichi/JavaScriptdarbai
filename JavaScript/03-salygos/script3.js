// let skaicius = 4;

// switch (skaicius) {
//     case 1: console.log('vartotojas laimėjo vandens'); break;
//     case 2: console.log('vartotojas laimėjo limonadą'); break;
//     case 3: console.log('vartotojas laimėjo arbatą'); break;
//     case 4: console.log('vartotojas laimėjo kavą'); break;
//     default: console.log('Ivyko klaida'); break;
// }

let skaicius1 = 4;
let skaicius2 = 5;
let skaicius3 = 3;
let klaidosKodas = 2;

switch (skaicius1) {
    case 1:
        console.log('Pirmas skaicius lygus 1, triju skaiciu suma yra:', skaicius1 + skaicius2 + skaicius3);
        break;
    case 2:
        console.log('Pirmas skaicius lygus 2, antro ir trecio skaiciu sandauga yra:', skaicius2 * skaicius3);
        break;
    case 3:
        console.log('Pirmas skaicius lygus 3, pirmo skaiciaus kvadratas yra:', skaicius1 * skaicius1);
        break;
    default:
        switch (klaidosKodas) {
            case 1:
              console.log('Pirmas skaicius neatitinka jokios salygos.');
              break;
            case 2:
              console.log('Pirmas skaicius neatitinka jokios kitos salygos.');
              break;
            default:
              console.log('Pirmas skaicius neatitinka jokios salygos.');
              break;
          }
      }

