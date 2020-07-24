

// Defining the variables that will be used in the conditional statements
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let numberCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let specialCase = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

let passWord = []

// Password Generator scenarios

const generatePassword = () => {

  let possiblePassword = []
  


  let passLength = parseInt(prompt('Between 8 - 128, how long would you want your password?'))

  if (passLength < 8 || passLength > 128) {
    alert('Please choose a valid length')
    return
  }

  if (confirm('Would you like to add upperCase to your Password?')) {
    possiblePassword = possiblePassword.concat(upperCase)
    

  }
  if (confirm('Would you like to add lowerCase to your Password?')) {
    possiblePassword = possiblePassword.concat(lowerCase)
  
  }
  if (confirm('Would you like to numbers to your Password?')) {
    possiblePassword = possiblePassword.concat(numberCase)
   
  }

  if (confirm('Would you like to add special characters to your Password?')) {
    possiblePassword = possiblePassword.concat(specialCase)
    
  }

  for (let i = 0; i < passLength; i++) {
    passWord.push(possiblePassword[Math.floor(Math.random() * possiblePassword.length)])
  }

 
// stops the function from  continuing
  return passWord.join("");
}

// Outside of the conditional statements. generates password
document.getElementById('generate').addEventListener('click', () => {
  let passWord = generatePassword()

  document.getElementById('password').textContent = passWord
})



