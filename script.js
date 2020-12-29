
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let symChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let allChar = ["upperChar", "lowerChar", "numChar", "symChar"];

let lowerBox = document.getElementById("lowerCase");
let upperBox = document.getElementById("upperCase");
let symBox = document.getElementById("symbols");
let numbBox = document.getElementById("numbers");
let chosenLength = document.getElementById("slider");
let newPassword = document.getElementById("generate");

console.log(password(chosenLength, allChar));

function password(l, characters) {
    let pword = "";

    for (var i = 0; i < l; i++) {
        pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pword;
}

lowerBox.addEventListener('change', function()){
    if (this.checked) {
        lowerChar += pword;
    else {}
    }
}

upperBox.addEventListener('change', function()){
    if (this.checked) {
        upperChar += pword;
    else {}
    }
}

numbBox.addEventListener('change', function()){
    if (this.checked) {
        numChar += pword;
    else {}
    }
}

symBox.addEventListener('change', function()){
    if (this.checked) {
        symChar += pword;
    }
}