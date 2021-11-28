/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */

const prompt = require('prompt-sync')();




module.exports = encryptPhoneNumber;

function encryptPhoneNumber(phoneNumber) {
  let newNumber = ""
  for (index = 0; index < 12; index++) {
    if (index < 2) {
      newNumber += "*"
    } else if (index = 3) {
      newNumber === "-"
    } else if (index > 4 && index < 7) {
      newNumber += "*"
    } else {
      newNumber += phoneNumber[index]
    }
  }
  console.log(newNumber)
}