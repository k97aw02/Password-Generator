
// Assignment Code
var generateBtn = document.querySelector("#generate");
var numArray = ['0123456789'];
var lowerArray = ['abcdefghijklmnopqrstuvwxyz'];
var upperArray =['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var specialArray = ['?<>!@#$%^&*()=+'];
var passwordArray = [];
var result = [];

function generatePassword() {
    var passwordLength = parseInt(prompt("How long"));
    if(isNaN(passwordLength) === true) {
        alert("must be number");
        return; 
    }
   
        console.log(passwordLength);

    if (passwordLength < 8) {
        alert("outside the parameters");
        return;
    }
    if(passwordLength > 128) {
        alert("outside the parameters2");
        return;
    }


    var hasNum = confirm("Ok to include number");
    var hasLower = confirm("Ok to include lower case letters");
    var hasUpper = confirm("Ok to include Upper Case letters");
    var hasSpecial = confirm("ok to include special characters");

        console.log(hasNum);
        console.log(hasLower);
        console.log(hasUpper);
        console.log(hasSpecial);

    if (hasNum === false && hasLower === false && hasUpper === false && hasSpecial === false) {
        alert("must choose one");
        return;
    }
 
    if (hasNum === true) {
        passwordArray = passwordArray.concat(numArray);
    }
    if (hasLower === true) {
        passwordArray = passwordArray.concat(lowerArray);
    }
    if (hasUpper === true) {
        passwordArray = passwordArray.concat(upperArray);
    }
    if (hasSpecial === true) {
        passwordArray = passwordArray.concat(specialArray);
    }


    for (var i = 0; i < passwordLength; i++) {
        var passwordDigit = Math.floor(Math.random() * passwordArray.length);
        result.push(passwordDigit)
        console.log(result)
    };
    return result.join("");
 
};   
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

