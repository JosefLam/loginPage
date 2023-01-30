const eHints = document.getElementById("hints");



function reset() {

}

function creatUser() {

}

function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    try {
        presenceCheck(username, "Please enter your username");
        presenceCheck(password, "Please enter your password");
        lengthCheck(username, 5, 10, "Must be between 5 and character");
        lengthCheck(password, 5, 10, "Must be between 5 and character");
        eHints.innerText = "Attempting login";
    } catch (e) {
        eHints.innerText = e;
    }
    
}

function lengthCheck(input, minLength, maxLength, message) {
    if (input.length > maxLength || input.length < minLength) {
        eHints.innerText = message;
        throw message;
    }
}

function presenceCheck(input) {
    if (input == "") {
        eHints.innerText = message;
        throw message;
    } else {
        eHints.innerText = "";
    }
}