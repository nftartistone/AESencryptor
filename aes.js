const CryptoJS = require("crypto-js");

function encrypt() {
    let plaintext = document.getElementById("plaintext").value;
    let password = document.getElementById("password").value;

    let ciphertext = CryptoJS.AES.encrypt(plaintext, password);

    document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
    let ciphertext = document.getElementById("ciphertext-dec").value;
    let password = document.getElementById("password-dec").value;

    let bytes  = CryptoJS.AES.decrypt(ciphertext, password);
    let plaintext = bytes.toString(CryptoJS.enc.Utf8);

    document.getElementById("plaintext-dec").value = plaintext;
}
