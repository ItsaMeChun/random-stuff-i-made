const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let stringRandom = '';
let randomNumber = 10;
let positionToSplit;

if (randomNumber % 2 === 0) {
    positionToSplit = randomNumber / 2;
} else {
    positionToSplit = (randomNumber + 1) / 2;
}

function random(numberWantToRandom) {
    for (let i = 0; i < numberWantToRandom; i++) {
        const randomIndex = Math.floor(Math.random() * uppercase.length);
        stringRandom += uppercase[randomIndex];
    }
    stringRandom = insertHyphens(stringRandom, positionToSplit);
    return stringRandom;
}

function insertHyphens(str, interval) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % interval === 0 && i !== str.length - 1) {
            result += '-';
        }
    }
    return result;
}

console.log(random(randomNumber));
