const avaibleCoins = [25, 10, 5, 1]
let change;
let message = 'Change owed:';

while (true) {
    change = prompt(message);

    if (change === null) {
        alert('Canseled');
        break;
    }
    
    if (change.trim() === "" || Number.isNaN(Number(change)) || Number(change) <= 0) {
        message = 'Invalid valuie! Change owed:';
        continue;
    }
    else {
        change = Number((change % 1).toFixed(2)) * 100 //забираю цілу частину і перетворюю в копійки
        break;
    }
}

let coinsToChange = [];
let changeCounter = 0;

if (change) {
    for (let i = 0; change > 0; i++) {
    changeCounter += Math.floor(change / avaibleCoins[i]);
    for (let n = 0; n < Math.floor(change / avaibleCoins[i]); n++) {
        coinsToChange.push(avaibleCoins[i]);
    }
    change %= avaibleCoins[i];
    }
}

coinsToChange = coinsToChange.join(", ");

alert(`Change is ${changeCounter} coins - ${coinsToChange}`);