// Assignment Code
const lowers="abcdefghijklmnopqrstuvwxyz"
const uppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers="0123456789"
const symbols="!#$%&*?+-=@"
var pass= " "
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  let passwordLength = prompt("select a character amount between 8 and 128");
  if(passwordLength <8 || passwordLength >128 || isNaN(parseInt(passwordLength))){
  alert("enter a character amount between 8 and 128");
  } else
    {
  let lc = confirm("Include lower case letters?");
  if (lc){
    pass+=lowers;
  }
  let uc =confirm("Include upper case letters?");
  if (uc) {
    pass+=uppers;
  }
  let num = confirm("Include numbers?");
  if (num) {
    pass+=numbers;
  }
  let sym = confirm("Include special characters?");
  if (sym) {
    pass+=symbols;
  }
}

  let pw=" "
  for (let i=0; i<passwordLength; i++){
  pw+= pass.charAt(Math.floor(Math.random() * pass.length))
}
  return pw}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
