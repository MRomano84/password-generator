function password() {
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let numChar = "1234567890";
    let symChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let allChar = upperChar + lowerChar + numChar + symChar;

    let lowerBox = document.getElementById("lowerCase");
    let upperBox = document.getElementById("upperCase");
    let symBox = document.getElementById("symbols");
    let numbBox = document.getElementById("numbers");
    let chosenLength = document.getElementById("slider");
    let newPassword = document.getElementById("generate");



    console.log(password(chosenLength.value, allChar));
    display.value = password(chosenLength.value, allChar)


    document.getElementById("generate").addEventListener('click', function() {
        if (lowerBox.checked) {
            lowerChar += newPassword
        } else {
            lowerChar += nothing
        }

        if (upperBox.checked) {
            upperChar += newPassword
        } else {
            upperChar += nothing
        }
        if (numbBox.checked) {
            numChar += newPassword
        } else {
            numChar += nothing
        }
        if (symBox.checked) {
            symChar += newPassword
        } else {
            symChar += nothing
        }
    });




    function password(l, characters) {
        let pword = "";

        for (var i = 0; i < l; i++) {
            pword = pword + characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return pword;
    }
};
