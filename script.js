
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let symChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

let lowerBox = document.getElementById("lowerCase");
let upperBox = document.getElementById("upperCase");
let symBox = document.getElementById("symbols");
let numbBox = document.getElementById("numbers");
let chosenLength = document.getElementById("slider");
let newPassword = document.getElementById("generate");

console.log(password(chosenLength.value, allChar));



generate.addEventListener('click', function(e) {

    let thePassword = newPassword
    (upperBox.checked) ? randomPassword += upperChar : "";
    (numbBox.checked) ? randomPassword += numChar : "";
    (symBox.checked) ? randomPassword += symChar : "";
    (lowerBox.checked) ? randomPassword += lowerChar : "";

});






function password(l, characters) {
    let pword = "";

    for (var i = 0; i < l; i++) {
        pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pword;
}
