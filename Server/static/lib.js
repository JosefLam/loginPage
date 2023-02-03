const eHints = document.getElementById("hints");
const audio = document.getElementById("11");
const logoEggNum = 10;
const charError = "Must be between 5 and characters";
var logoClickNum = 0;
var createUserBox = false;

function logoClick() {
    console.log("click");
    logoClickNum += 1;
    console.log(logoClickNum);
    if (logoClickNum == logoEggNum) {
        audio.play();
        console.log("RickRoll");
    }
}

function reset() {

}

function createUser() {
    console.log("click");
    if (!createUserBox) {
        console.log("box should show");
        createUserBox = true;
        document.getElementById("passLable").hidden = false;
    } else {
        let password = document.getElementById("password").value;
        let newPassword = document.getElementById("newPassword").value
        try {
            if (newPassword == password) {
                presenceCheck(password, charError);
                lengthCheck(password, 5, 10, charError);
                eHints.innerText = "Attempting Account creation";
            } else {
                throw "passwords do not match"
            }
        } catch (e) {
            eHints.innerText = e;
        }
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    try {
        presenceCheck(username, "Please enter your username");
        presenceCheck(password, "Please enter your password");
        lengthCheck(username, 5, 10, charError);
        lengthCheck(password, 5, 10, charError);
        eHints.innerText = "Attempting login";
        eForm.Submit();
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

function presenceCheck(input, message) {
    if (input == "") {
        eHints.innerText = message;
        throw message;
    }
}