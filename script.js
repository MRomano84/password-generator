//DOM elements
let lowerBox = document.getElementById("lowerCase");
let upperBox = document.getElementById("upperCase");
let symBox = document.getElementById("symbol");
let numbBox = document.getElementById("number");
let chosenLength = document.getElementById("slider");

//Characters for password
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let symChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Functions to get characters
function getLowerCaseChar() {
    return lowLetters[Math.floor(Math.random() * lowLetters.length)];
}

function getUpperCaseChar() {
    return uppLetters[Math.floor(Math.random() * uppLetters.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

