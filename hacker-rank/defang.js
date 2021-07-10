/*Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".*/

/*Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"*/

function defang(address){
//use the replaceAll() to replace . with [.] in a string
// if wanting to replace only a character use replace();

  let replaced = address.replaceAll('.','[.]')
  return replaced
}
const address = "1.1.1.1";
console.log(defang(address))
