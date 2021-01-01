//DOM elements
let lowerBox = document.getElementById("lowerCase").checked;
let upperBox = document.getElementById("upperCase").checked;
let symBox = document.getElementById("symbol").checked;
let numbBox = document.getElementById("number").checked;
let chosenLength = document.getElementById("slider");
let yourPassword = document.getElementById("yourPassword")

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



function generatePassword() {
    let len = chosenLength.value;
    let password = "";

    for(let i = 0; i < len; i++) {
        let p = generateP();
        password += p;
    }
    
    yourPassword.innerText = password;
}



function generateP() {
    let xp = [];
    lowerBox.checked && xp.push(getLowerCaseChar());
    upperBox.checked && xp.push(getUpperCaseChar());
    symBox.checked && xp.push(getSymbol());
    numbBox.checked && xp.push(getNumber());

    return xp[Math.floor(Math.random() * xp.length)];
}