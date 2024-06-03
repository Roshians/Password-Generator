const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


const passwordLength = 15
let passwordBtn = document.getElementById("generatePasswordBtn")
let firstPassword = document.getElementById("firstpassword")
let secondPassword = document.getElementById("secondpassword")

function generatePasswords() {

    let password = ''

    for (i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        password += characters[randomNum]
    }
    return password
}

function renderPasswords(){
    firstPassword.textContent = generatePasswords()
    secondPassword.textContent = generatePasswords()
}
