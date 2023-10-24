const wordToDigit = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

const input = 'zero;three;five;six;eight;one';
const words = input.split(';');
let output = '';

for (let i = 0; i < words.length; i++) {
    if(wordToDigit[words[i]]) {
        output += wordToDigit[words[i]];
    } else {
        output += words[i];
    }
}

console.log(output);