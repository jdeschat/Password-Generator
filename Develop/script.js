// Characters code
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '123456789';
var specialCharacters = '!@#$%^&*_-+=';
var storePassword = "generated password";
var passLength = 0;
var password = "";
var allCharacters = "";

// create password
var createPass = function () {
  // reset characters, password & length
  allCharacters = "";
  password = "";
  passLength = 0;
  // ensure code is between 8-128 characters
  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt(
      "Please type a number between 8 and 128 for your password length"
    );
  }
  // windows asking which character type they would like included in their password
  var lowercaseConfirm = window.confirm("Would you like lowercase letters in your password? Click OK if yes");
  var uppercaseConfirm = window.confirm("Would you like uppercase letters in your password? Click OK if yes");
  var numbersConfirm = window.confirm("Would you like numbers in your password? Click OK if yes");
  var specialConfirm = window.confirm("Would you like special characters in your password? Click OK if yes");
  // adding the character types they wish to use in their password
  if (lowercaseConfirm) {
    allCharacters += lowercase;
  };
  if (uppercaseConfirm) {
    allCharacters += uppercase;
  };
  if (numbersConfirm) {
    allCharacters += numbers;
  };
  if (specialConfirm) {
    allCharacters += specialCharacters;
  };

  console.log(allCharacters);
}

// generate password length
function generatePassword() {
  createPass();
  for (let i = 1; i <= passLength; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters[randomNumber];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
