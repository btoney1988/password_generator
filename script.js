// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // Generator function
  function generatePassword() {

    // Final password to be displayed
    var finalPassword = ''
    // Prompts and Confirms for password criteria
    var length = prompt("Please write the password length (8-128) for the password.")
    // If outside of 8-128 alert will be presented
    if (parseFloat(length) <= 128 && parseFloat(length) >= 8) {

      var upper = confirm("Uppercase?");
      var lower = confirm("Lowercase?")
      var number = confirm("Numbers?");
      var symbol = confirm("Symbols?");
    } else {

      alert("Please choose numbers between 8 - 128.");
    }

    // Based off user input chooses which criteria to use
    const typesCount = upper + lower + number + symbol;

    console.log('typesCount: ', typesCount);

    // The array will filter out objects what were not confirmed during the prompts
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    console.log('typesArr: ', typesArr);

    // If no criteria is confirmed then it will return nothing
    if (typesCount === 0) {
      return ('');
    };
    // For loop based off user input of length and criteria
    for (let i = 0; i < length; i += typesCount) {
      // Based off user input the criteria is set run the randomize functions 
      typesArr.forEach(type => {
        // Function to go through each key individually inorder to not get the same numbers repeated
        const funcName = Object.keys(type)[0];

        console.log('funcName: ' + funcName);

        const criteria = {
          upper: getRandomUpper(),
          lower: getRandomLower(),
          number: getRandomNumber(),
          symbol: getRandomSymbol(),
        };

        // Final password is running the 
        finalPassword += criteria[funcName];
      });

      console.log(finalPassword)

    }

    // Returning the final product to be placed in the text box.
    return finalPassword;
  };
  
  // PasswordText will show the reult in the text area
  passwordText.value = password;
};

// Functions for random criteria - 'http://www.net-comber.com/charset.html'
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
  var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
