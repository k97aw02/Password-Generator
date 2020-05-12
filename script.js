
// Assignment Code
var generateBtn = document.querySelector("#generate");
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f'];
var upperArray = ['A', 'B', 'C'];
var specialArray = ['?', '<',];


function getPasswordOptions() {
    var passwordLength = parseInt(prompt("How long"));
    if (isNaN(passwordLength) === true) {
        alert("must be number");
        return;
    }

    console.log(passwordLength);

    if (passwordLength < 8) {
        alert("outside the parameters");
        return;
    }
    if (passwordLength > 128) {
        alert("outside the parameters2");
        return;
    }


    var hasNum = confirm("Ok to include number");
    var hasLower = confirm("Ok to include lower case letters");
    var hasUpper = confirm("Ok to include Upper Case letters");
    var hasSpecial = confirm("ok to include special characters");


    if (hasNum === false && hasLower === false && hasUpper === false && hasSpecial === false) {
        alert("must choose one");
        return;
    }
    var passwordOptions = {
        passwordLength: passwordLength,
        hasLower,
        hasNum,
        hasUpper,
        hasSpecial,
    }
    return passwordOptions;
};
function constructPassword() {
    var options = getPasswordOptions()
    console.log(options)

    var passwordArray = [];
    var result = [];
    if (options.hasNum === true) {
        passwordArray = passwordArray.concat(numArray);
    }
    console.log(passwordArray)
    if (options.hasLower === true) {
        passwordArray = passwordArray.concat(lowerArray);
    }
    console.log(passwordArray)
    if (options.hasUpper === true) {
        passwordArray = passwordArray.concat(upperArray);
    }
    console.log(passwordArray)
    if (options.hasSpecial === true) {
        passwordArray = passwordArray.concat(specialArray);
    }
    console.log(passwordArray)


    for (var i = 0; i < options.passwordLength; i++) {
        var index = Math.floor(Math.random() * passwordArray.length);
        var passwordDigit = passwordArray[index]
        result.push(passwordDigit)
        console.log(result)
    };
    return result.join("");

};
// Write password to the #password input
function writePassword() {
    var password = constructPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
console.log(password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


