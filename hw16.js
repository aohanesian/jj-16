`use strict`;

const num = +prompt(`Enter number`);
let minDivisor = 2;

if (num > 1) {
    for (minDivisor; num >= minDivisor; minDivisor++) {
        if (num % minDivisor === 0) {
            break;
        }
    }
    console.log(minDivisor);
} else {
    console.log(NaN);
}