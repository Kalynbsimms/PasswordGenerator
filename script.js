// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {

  let passLength = parseInt(prompt('Between 8 - 128, how long would you want your password?'))
  if (passLength < 8 || passLength > 128) {
    alert('Pick a Valid Number!')
    return
  }

  let upperConfirm = confirm('Would you like uppercase?')
  let lowerConfirm = confirm('Would you like lowercase?')
  let numberConfirm = confirm('Would you like numbers?')
  let specialConfirm = confirm('Would you like special characters?')



  let characters = {
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    special: ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']
  }




  let password = ''

  for (let i = 0; i < passLength; i++) {

    let pick = Math.floor(Math.random() * 4)

    if (pick === 0) {

      if (upperConfirm === true) {
        let change = characters.upperCase[Math.floor() * characters.upperCase.length]
        password = password + change
      } else {
        i--
      }

    } else if (pick === 1) {
      if (lowerConfirm === true) {
        let change = characters.lowerCase[Math.floor() * characters.lowerCase.length]
        password = password + change
      } else {
        i--
      }


    } else if (pick === 2) {

      if (numberConfirm === true) {
        let change = characters.numbers[Math.floor() * characters.numbers.length]
        password = password + change
      } else {
        i--
      }

    } else {
      if (specialConfirm === true) {
        let change = characters.special[Math.floor() * characters.special.length]
        password = password + change
      } else {
        i--
      }

    }





  }





}












// Add event listener to generate button
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
