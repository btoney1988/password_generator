// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var passwordCriteria = ["characterLength, upper, lower, numbers, symbols"];
    passwordCriteria[0] = prompt("Please write the password length (8-128) for the password.");

    // Random functions for password criteria
    if (parseFloat(passwordCriteria[0]) >= 8 && parseFloat(passwordCriteria[0]) <= 128) {
      passwordCriteria[1] = confirm("Uppercase?");
      passwordCriteria[2] = confirm("Lowercase?");
      passwordCriteria[3] = confirm("Numbers?");
      passwordCriteria[4] = confirm("Symbols?");


      if (passwordCriteria[1] == true) {

        function getRandomUpper() {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        };

        console.log(getRandomUpper());

      };

      if (passwordCriteria[2] == true) {

        function getRandomLower() {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

        };


        console.log(getRandomLower());
      };

      if (passwordCriteria[3] == true) {

        function getRandomNumber() {
          return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

        };

        console.log(getRandomNumber());

      };

      if (passwordCriteria[4] == true) {

        function getRandomSymbol() {
          var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
          return symbols[Math.floor(Math.random() * symbols.length)];

        };

        console.log(getRandomSymbol());

      };

    } else {

      alert("start over")
    };


  };

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);