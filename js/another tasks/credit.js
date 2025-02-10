let message = 'Number';
let cardNumberArr = [];
let cardNumber = '';

while (true) {
    cardNumber = prompt(message);

    if (cardNumber === null) {
        alert('Canseled');
        break;
    }
    else if (Number.isNaN(Number(cardNumber)) ||
        cardNumber.length !== 15 && cardNumber.length !== 16 && cardNumber.length !== 13) {
        message = 'Invalid';
    }
    else {
        cardNumberArr = cardNumber.split('');
        break;
    }
}

let multiplyNum = [];

for (let i = cardNumberArr.length - 2; i >= 0; i -= 2) {
    multiplyNum.push(cardNumberArr[i] * 2);
    cardNumberArr[i] = 0;
}
let splitedNums = multiplyNum.join('').split('');
const firstSum = splitedNums.reduce((prev, num) => prev + Number(num), 0);
const secondSum = cardNumberArr.reduce((prev, num) => prev + Number(num), 0);
const result = firstSum + secondSum;

if ((result % 10 === 0) && (cardNumber.startsWith("34") || cardNumber.startsWith("37"))) {
    alert('American Express');
}
else if ((result % 10 === 0) && (cardNumber.startsWith("51") || cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") || cardNumber.startsWith("54") || cardNumber.startsWith("55"))) {
    alert('Mastercard');
}
else if ((result % 10 === 0) && (cardNumber.startsWith("4"))) {
    alert('Visa');
}    


////////////////////////////////////////////////////////////////////////////////////////////////


// Інший спосіб
// function isValidCard(cardNumber) {
//     return cardNumber
//         .split("")
//         .reverse()
//         .map((digit, i) => (i % 2 ? digit * 2 : Number(digit)))
//         .map(digit => (digit > 9 ? digit - 9 : digit))
//         .reduce((prev, digit) => prev + digit, 0) % 10 === 0;
// }

// console.log(isValidCard("4003600000000014")); // true
// console.log(isValidCard("1234567812345670")); // false
