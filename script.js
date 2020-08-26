// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // Generator function
  function generatePassword() {

    // Final password set as a string
    var finalPassword = '';

    // Prompts and Confirms for password criteria
    var length = prompt("Please write the password length (8-128) for the password.");

    // If outside of 8-128 alert will be presented.
    if (length <= 128 && length >= 8) {

      // Criteria confirmed by user
      var upper = confirm("Would you like to use uppercase letters?");
      var lower = confirm("Would you like to use lowercase letters?")
      var number = confirm("Would you like to use numbers?");
      var symbol = confirm("Would you like to use symbols?");
    } else {

      // Alert to request numbers between 8-128.
      alert("Please choose numbers between 8 - 128.");
    };

    // Based off user input chooses which criteria to use
    const criteriaCount = upper + lower + number + symbol;

    console.log('criteriaCount: ', criteriaCount);

    // The array will filter out objects what were not confirmed during the prompts
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    console.log('typesArr: ', typesArr);

    // If no criteria is confirmed then it will return nothing
    if (criteriaCount === 0) {
      return ('No criteria given');
    };

    // For loop based off user input of length and criteria
    for (let i = 0; i < length; i += criteriaCount) {

      // Based off user input the criteria is set run the randomize functions 
      typesArr.forEach(type => {

        const criteria = {
          upper: getRandomUpper(),
          lower: getRandomLower(),
          number: getRandomNumber(),
          symbol: getRandomSymbol(),
        };

        // Function to go through each key individually inorder to not get the same numbers repeated.
        const funcName = Object.keys(type)[0];

        console.log('funcName: ' + funcName);


        // Final password is running the 
        finalPassword += criteria[funcName];

      });

      console.log(finalPassword);

    };

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
