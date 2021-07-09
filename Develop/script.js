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
  while (passLength < 8 || passLength > 128) {
    passLength = window.prompt(
      "Please type a number between 8 and 128 for your password length"
    );
  }

  var lowercaseConfirm = window.confirm("Would you like lowercase letters in your password? Click OK if yes");
  var uppercaseConfirm = window.confirm("Would you like uppercase letters in your password? Click OK if yes");
  var numbersConfirm = window.confirm("Would you like numbers in your password? Click OK if yes");
  var specialConfirm = window.confirm("Would you like special characters in your password? Click OK if yes");

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
}


function generatePassword() {
  createPass();
  for (let i = 1; i <= passLength; i++) {
    const randomNumber = password[Math.floor(Math.random() * password.length)]
    newPassword += randomNumber;
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
