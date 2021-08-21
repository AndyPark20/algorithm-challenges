



function palindrome (stringPalindrome){
  //create a hashmapObject with the string character as key and the number of same characters as values
    //divide the values via Object.value(object name) and divide it by 2
      // if divisble by 2 and equals 0 ==> return true
      // else return false

    const hashmapPalindromeObject ={};
    let count =1;
    let currentStatus=false;
    //creating hashmapObject
    for(let i =0; i<stringPalindrome.length;i++){
      if(!hashmapPalindromeObject[stringPalindrome[i]]){
          hashmapPalindromeObject[stringPalindrome[i]] = count;
      }else{
        hashmapPalindromeObject[stringPalindrome[i]]++
      }
    }
    console.log(hashmapPalindromeObject)
    //Checking to see if the values from hashmapPalindromObject is divisble by 2 to make it equal 0
    for(let keys in hashmapPalindromeObject){
      if(hashmapPalindromeObject[keys] %2 ===0 || Object.values(hashmapPalindromeObject).length ===1){
        currentStatus=true;
      }
      return false;
    }
    return currentStatus
}

console.log(palindrome(""))
