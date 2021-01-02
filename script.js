//DOM elements
const yourPassword = document.getElementById("display");
const chosenLength = document.getElementById("slider");
const upperBox = document.getElementById("upperCase");
const lowerBox = document.getElementById("lowerCase");
const numbBox = document.getElementById("number");
const symBox = document.getElementById("symbol");
const genButton = document.getElementById("generate");

//Characters to make password with
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]";

//Functions to get characters
function getLowercase() {
  return lowerChar[Math.floor(Math.random() * lowerChar.length)];
}

function getUppercase() {
  return upperChar[Math.floor(Math.random() * upperChar.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Function to generate Password
function generatePassword() {
    const len = chosenLength.value;
    let password = "";

    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }

    display.innerText = password;
}

//Adding checked checkbox characters to array of potential password characters
function generateX() {
    const char = [];
    upperBox.checked && char.push(getUppercase());
    lowerBox.checked && char.push(getLowercase());
    numbBox.checked && char.push(getNumber());
    symBox.checked && char.push(getSymbol());

    if (char.length == 0) {
        return alert("Please Select at Least 1 Character Type.")[0];
    } else {
      return char[Math.floor(Math.random() * char.length)];
    }


}

//Executing the function to get password
genButton.addEventListener("click", generatePassword);