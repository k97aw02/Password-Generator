
// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArray = ["1", "2", "3"];
var lowerArray = ["a", "b", "c"];
var upperArray =["A", "B", "C"];
var specialArray = ["!","@","#"];


function getOptions() {
    var passwordLength = parseInt(prompt("How long"));
    if(isNaN(passwordLength) === true) {
        alert("must be number");
        return;
    }
   
    if(passwordLength < 8) {
        alert("outside the parameters");
        return;
    }
    if(passwordLength > 128) {
        alert("outside the parameters2");
        return;
    }

    var hasNum = confirm("Ok num");
    var hasLower = confirm("Ok lower");

    if (hasNum === false && hasLower === false) {
        alert("must choose one");
        return;
    }
    var passOptions = {
        length: passwordLength,
        hasNum,
        hasLower,

    }
    return passOptions;
}

function getRandom(arr) {
  var index = Math.floor(Math.random * arr.length);
   var digit = arr[index];
   return digit;
}
function generatePassword() {
    var options = getOptions();
    var superArray = [];
    var result = [];

   if (options.hasNum) {
        superArray = superArray.concat(hasNum);
    }

    for (var i = 0; i < options.length; i++) {
        var passwordDigit = getRandom(superArray);
        result.push(passwordDigit)
        console.log(result)
    }
    return result.join("")
 
}   
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);